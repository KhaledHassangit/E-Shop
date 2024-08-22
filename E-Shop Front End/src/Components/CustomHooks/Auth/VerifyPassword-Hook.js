import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from "../../../Hooks/UseNotification"
import { useNavigate } from "react-router"




const VerifyPasswordHook = () => {   

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [code, setCode] = useState("")

    const [loading, setLoading] = useState(true)

    const onChangeCode = (e)=>{
        setCode(e.target.value)
        
    }

    const onSubmit = async()=>{
        if(code === "")
        {
            notify("تأكد من الرمز  ", "error")
            return ;

        }
        setLoading(true)
        await dispatch(VerifyPassword({
            resetCode:code,
        }))
        setLoading(false)
    }
const VerifyPassword = useSelector(state => state.AuthReducer.verifyPassword)
    useEffect(() => {
        if(loading === false)
        {
            if(VerifyPassword)
            {
                if(VerifyPassword.data.status === "Success")
                
                {
                    notify("Correct", "success")
                    setTimeout(() => {
                        navigate("/User/reset-password")
                    }, 1000);  
                    setLoading(true)
                }
                
                if(VerifyPassword.data.status === "fail")
                {
                    notify("تأكد من  الكود المرسل ", "error")

                }
                console.log(VerifyPassword)

            }
        }
    }, [loading])
    return [onChangeCode,onSubmit,code,loading] 
}

export default VerifyPasswordHook
