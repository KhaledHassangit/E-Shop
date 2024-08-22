import { useState ,useEffect} from "react"
import {useDispatch ,useSelector} from "react-redux"
import { AddAddress } from "../../../Redux/Actions/AddressActions"
import notify from "../../../Hooks/UseNotification"
import { useNavigate } from "react-router"
const UserAddAdressHook = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [alias, setalias] = useState("")
    const [details, setdetails] = useState("")
    const [phonenumber, setphonenumber] = useState()
    const [loading, setloading] = useState(true)

    const onChangeName = (e)=>{
        e.persist()
        setalias(e.target.value)
        
    }

    const onChangeDetails = (e)=>{
        e.persist()
        setdetails(e.target.value)
    }

    const onChangeNumber = (e)=>{
        e.persist()
        setphonenumber(e.target.value)

    }

    const onSubmit = async()=>{
        if(alias === "" || details === "" || phonenumber === "" )
        {            
            notify("Please fill in all required fields","warn")
            return

        }
        setloading(true)
        await dispatch(AddAddress({
            alias,
            details,
            phone: phonenumber,
            city: "Alexandria",
            postalCode: "21527"
        }))
        setloading(false)
    }

    const Address = useSelector((state) => state.AddressReducer.address)

    useEffect(() => {
        if(loading === false){
            if(Address && Address.status === 200)
            {
                notify("Address is Added Successfully","success")
                setTimeout(() => {
                    navigate("/User/AllAddresses")
                },1000 );
            } else{
                notify("Error","error")
            }
        }
    }, [loading])   
    return [onChangeName,onChangeDetails,onChangeNumber,alias,details,phonenumber,onSubmit]
}

export default UserAddAdressHook
