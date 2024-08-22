import { useEffect, useState } from "react"

const ProtectedRoutesHook = () => {

    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")))
    const [isUser, setisUser] = useState()
    const [isAdmin, setisAdmin] = useState()

    useEffect(() => {
        if(userData != null ){
            if(userData.role === "user")
            {
                setisUser(true)
                setisAdmin(false)
            }
            else
            {
                setisAdmin(true)
                setisUser(false)
            }
        }
        else
        {
            
        }
    }, [])

    return [isUser,isAdmin]
}

export default ProtectedRoutesHook
