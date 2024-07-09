import { useEffect, useState } from "react"
import notify from "../../../Hooks/UseNotification"
import { useDispatch  ,useSelector} from "react-redux"
import { LoginUser } from "../../../Redux/Actions/AuthActions"


const LoginHook = () => {


    
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(true)
    const [isPress, setisPress] = useState(false)



    const onChangeEmail = (e)=>{
        setEmail(e.target.value)

    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value)

    }

    const ValidationValues = ()=>{
        if (email === "") {
            notify("من فضلك ادخل اسم المستخدم", "error")
            return;
        }

        if (password  === "") {
            notify("من فضلك أدخل  كلمه السر", "error")
            return;
        }

    }


    const onSubmit =  async() =>{
        ValidationValues()
        setLoading(true)
        setisPress(true)
        await dispatch(LoginUser({
            email,
            password,
        }))
        setLoading(false)
        setisPress(false)

    }

    const Login = useSelector(state => state.AuthReducer.loginUser)

    useEffect(() => {
            if(loading === false)
            {
                if(Login.data.token)
                {
                    console.log(Login)
                    localStorage.setItem("token",Login.data.token)
                    localStorage.setItem("user",JSON.stringify(Login.data.data))
                    notify("تم تسجيل الدخول ", "success")
                    setPassword("")
                    setEmail("")
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 1500);

                }
                else{
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")

                }
                
                if(Login.status.message === "Incorrect email or password")
                {
                    notify("Incorrect email or password", "error")
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                }
                setLoading(true)
            }
    }, [loading])




    return[email,password,loading,onChangeEmail,onChangePassword,onSubmit,isPress] 

}

export default LoginHook




