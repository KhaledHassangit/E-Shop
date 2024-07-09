import { useState ,useEffect} from "react";
import {useDispatch ,useSelector} from "react-redux"
import { UpdateUserData, UpdateUserPassword } from "../../../Redux/Actions/AuthActions";
import { useNavigate } from "react-router"
import notify from "../../../Hooks/UseNotification"


const ProfileHook = () => {

    let user = []
    if((JSON.parse(localStorage.getItem("user"))) != null)
    {
        user = (JSON.parse(localStorage.getItem("user")))
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [name, setname] = useState(user.name)
    const [email, setemail] = useState(user.email)
    const [phonenumber, setphonenumber] = useState(user.phone)
    const [loading, setloading] = useState(true)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChangeName = (e)=>{
        e.persist()
        setname(e.target.value)
        
    }

    const onChangeEmail = (e)=>{
        e.persist()
        setemail(e.target.value)
    }

    const onChangeNumber = (e)=>{
        e.persist()
        setphonenumber(e.target.value)
    }

    const handledit = async()=>{
        let body
        if (user.email === email) {
            body = {
                name,
                phonenumber
            }
        } else {
            body = {
                name,
                email,
                phonenumber
            }
        }

        setloading(true)
        await dispatch(UpdateUserData(body))
        setloading(false)
        setShow(false)
    }

    const ProfileData = useSelector((state) => state.AuthReducer.usernewdata)

    useEffect(() => {
        if(loading === false){
            if(ProfileData && ProfileData.status === 200)
            {
                localStorage.setItem("user",JSON.stringify(ProfileData.data.data.user))
                notify("Profile is Updated Successfully","success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1500);
                
            } 
            else{
                notify("Error","error")
            }
        }
    }, [loading])  




    // Change Password
    const [oldpassword, setoldpassword] = useState("")
    const [newpassword, setnewpassword] = useState("")
    const [confirmnewpassword, setconfirmnewpassword] = useState("")
    const [loadingpass, setloadingpass] = useState(true)

    const onChangeOldPass = (e)=>{
        e.persist()
        setoldpassword(e.target.value)
        
    }

    const onChangeNewPass = (e)=>{
        e.persist()
        setnewpassword(e.target.value)
    }

    const onChangeConfirm = (e)=>{
        e.persist()
        setconfirmnewpassword(e.target.value)
    }


    const ChangePaswword = async ()=>{
        if(newpassword != confirmnewpassword){
            notify("Passwords Are Not Identical","error")
            return
        }
        setloadingpass(true)
        await dispatch(UpdateUserPassword({
            currentPassword:oldpassword,
            password:newpassword,
            passwordConfirm:confirmnewpassword, 
        }))
        setloadingpass(false)
    }

    const ChangePassword = useSelector((state) => state.AuthReducer.usernewpassword)
    useEffect(() => {
        if(loadingpass === false){
            if(ChangePassword && ChangePassword.status === 200)
            {
                notify("Password is Updated Successfully","success")
                setTimeout(() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    navigate("/login")
                }, 1500);
                
            } 
            else{
                notify("Error","error")
            }
        }
    }, [loadingpass])  


    return [user,show,handleClose,handleShow,handledit
        ,onChangeName,onChangeEmail,onChangeNumber
        ,name,email,phonenumber
        ,ChangePaswword,onChangeOldPass,onChangeNewPass,onChangeConfirm
        ,oldpassword,newpassword,confirmnewpassword]

}


export default ProfileHook
