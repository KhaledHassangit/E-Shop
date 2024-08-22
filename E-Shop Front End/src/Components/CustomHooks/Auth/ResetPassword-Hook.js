import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from "../../../Hooks/UseNotification"
import { useNavigate } from "react-router"
import { ResetPassword } from "../../../Redux/Actions/AuthActions"




const ResetPasswordHook = () => {   

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(true)

    const onChangePassword = (e)=>{
        setPassword(e.target.value)

    }
    const onChangeconfirmPassword = (e)=>{
        setConfirmPassword(e.target.value)
}    
    
    const onSubmit = async()=>{
        if(password === ""){
            notify("من فضلك أدخل  كلمه السر", "error")
            return;
        }
        if (password != confirmpassword) {
            notify("من فضلك تأكد من كلمه السر", "error")
            return;
        }
        setLoading(true)
        await dispatch(ResetPassword({
            email:localStorage.getItem("user-email"),
            newPassword: password,
        }))
        setLoading(false)
    }
    const Reset = useSelector(state => state.AuthReducer.verifyPassword)

    useEffect(() => {
        if(loading === false)
        {
            if(Reset)
            {
                if(Reset.data.status === "Success")
                
                {
                    notify("تم تغير كلمة السر بنجاح", "success")
                    setTimeout(() => {
                        navigate("/login")
                    }, 1000);  
                    setLoading(true)
                }
                
                if(Reset.data.status === "fail")
                {
                    notify("Failure", "error")
                    
                }
                console.log(Reset)

            }
        }
    }, [loading])
    return [password,confirmpassword,onChangePassword,onChangeconfirmPassword,onSubmit,loading] 
}

export default ResetPasswordHook
