import { useEffect, useState } from "react"
import notify from "../../../Hooks/UseNotification"
import { useDispatch  ,useSelector} from "react-redux"
import { CreateNewUser } from "../../../Redux/Actions/AuthActions"
import { useNavigate } from "react-router"




export const RegisterHook = () => {


    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [loading, setLoading] = useState(true)

    const onChangeName = (e)=>{
        setName(e.target.value)

    }
    const onChangeEmail = (e)=>{
        setEmail(e.target.value)

    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value)

    }
    const onChangeconfirmPassword = (e)=>{
        setConfirmPassword(e.target.value)
    }
    const onChangePhone = (e)=>{
        setPhone(e.target.value)
    }
    const ValidationValues = ()=>{
        if (name === "") {
            notify("من فضلك ادخل اسم المستخدم", "error")
            return;
        }
        if (phone.length <= 10) {
            notify("من فضلك ادخل رقم هاتف صحيح", "error")
            return;
        }
        if (password != confirmpassword) {
            notify("من فضلك تأكد من كلمه السر", "error")
            return;
        }
    }
    const onSubmit =  async() =>{
        ValidationValues()
        setLoading(true)
        await dispatch(CreateNewUser({
            name,
            email,
            password,
            passwordConfirm:confirmpassword,
            phone,
        }))
        setLoading(false)
    }

    const CreateUser = useSelector(state => state.AuthReducer.createUser)
    
    useEffect(() => {
        if (loading === false){
            if (CreateUser){
                if(CreateUser.data.token){
                    localStorage.setItem("token",CreateUser.data.token)
                    notify("تم إنشاء  حسابك بنجاح ", "success")
                    // setLoading(true)
                    setName("")
                    setPassword("")
                    setConfirmPassword("")
                    setEmail("")
                    setPhone("")
                    // window.location.reload()
                    // console.log(CreateUser)
                    setTimeout(() => {
                        Navigate("/login")
                    }, 1500);
                }

                if (CreateUser && CreateUser.data && 
                    CreateUser.data.errors && CreateUser.data.errors.length > 0 
                    && CreateUser.data.errors[0].msg === "E-mail already in use") 
                {
                    notify("هذا الايميل مسجل من قبل", "error")
                }
                if (CreateUser.data.errors) {
                    if (CreateUser.data.errors[0].msg === "accept only egypt phone numbers")
                        notify("يجب ان يكون الرقم مصري مكون من 11 رقم", "error")
                }

                if (CreateUser.data.errors) {
                    if (CreateUser.data.errors[0].msg === "must be at least 6 chars")
                        notify("يجب ان لاقل كلمه السر عن 6 احرف او ارقام", "error")
                }
            }
        }
    }, [loading])


    return [name,email,password,confirmpassword,phone,loading
        ,onChangeName,onChangeEmail,onChangePassword,
        onChangeconfirmPassword,onChangePhone,ValidationValues,onSubmit]

}
