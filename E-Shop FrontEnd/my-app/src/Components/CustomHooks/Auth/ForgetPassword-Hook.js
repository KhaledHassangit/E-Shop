import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ForgetPassword } from "../../../Redux/Actions/AuthActions"
import notify from "../../../Hooks/UseNotification"
import { useNavigate } from "react-router"




const ForgetPasswordHook = () => {   

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(true)

    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
        
    }

    const onSubmit = async()=>{
        if(email === "")
        {
            notify("تأكد من البريد الالكتروني ", "error")
            return ;

        }
        localStorage.setItem("user-email",email)
        setLoading(true)
        await dispatch(ForgetPassword({
            email,
        }))
        setLoading(false)
    }
const forgetPassword = useSelector(state => state.AuthReducer.forgetPassword)
    useEffect(() => {
        if(loading ===false)
        {
            if(forgetPassword)
            {
                if(forgetPassword.data.status === "Success")
                
                
                {
                    notify("تم الارسال ", "success")
                    setTimeout(() => {
                        navigate("/User/verify-code")
                    }, 1000);  

                }
                
                if(forgetPassword.data.status === "fail")
                {
                    notify("هذا الحساب غير موجود ", "error")

                }
                console.log(forgetPassword)

            }
        }
    }, [loading])
    return [onChangeEmail,onSubmit,email,loading] 
}

export default ForgetPasswordHook
