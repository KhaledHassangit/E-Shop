import { useState ,useEffect} from "react"
import {useDispatch ,useSelector} from "react-redux"
import {  EditAddress, GetOneAdress } from "../../../Redux/Actions/AddressActions"
import notify from "../../../Hooks/UseNotification"
import { useNavigate } from 'react-router-dom';

const EditAddressHook = (id) => {

    const [loading, setloading] = useState(true); 
    const [loadingEdit, setLoadingEdit] = useState(true);
    const [alias, setalias] = useState("")
    const [details, setdetails] = useState("")
    const [phonenumber, setphonenumber] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

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

    useEffect(() => {
        const get = async ()=>{
            setloading(true)
            await dispatch(GetOneAdress(id))
            setloading(false)
        }
        get()
    }, [])

    const resAddress = useSelector(state  => state.AddressReducer.oneaddress)
    useEffect(() => {   
        if(loading === false){
            if (resAddress && resAddress.status === "success") {
                setalias(resAddress.data.alias)
                setdetails(resAddress.data.details)
                setphonenumber(resAddress.data.phone)
            }
        }
    }, [loading])

    const handelEdit = async()=>{
        // if(alias === "" || details === "" || phonenumber === "" )
        // {            
        //     notify("Please fill in all required fields","warn")
        //     return
        // }
        setLoadingEdit(true)
        await dispatch(EditAddress(id,{
            alias,
            details,
            phone: phonenumber,
            city: "Alexandria",
            postalCode: "21527"
        }))
        setLoadingEdit(false)
    }

    const resEdit = useSelector(state => state.AddressReducer.updateaddress)
    console.log(resEdit)

    useEffect(() => {
        if (loadingEdit === false) {
            if (resEdit && resEdit.status === "success") {
                console.log(resEdit)
                notify("تمت عملية التعديل بنجاح", "success")
                setTimeout(() => {
                    navigate('/User/AllAddresses')
                }, 1000);
            } else {
                notify("فشل فى عملية التعديل", "error")
            }
        }
    }, [loadingEdit])

    
    return [handelEdit, alias, details, phonenumber, onChangeName, onChangeDetails, onChangeNumber,resAddress]
}




export default EditAddressHook
