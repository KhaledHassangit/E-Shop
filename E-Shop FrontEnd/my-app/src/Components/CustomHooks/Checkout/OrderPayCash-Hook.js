import {useState,useEffect} from "react"
import {useDispatch ,useSelector} from "react-redux"
import notify from "../../../Hooks/UseNotification"
import { GetOneAdress } from "../../../Redux/Actions/AddressActions"
import { CreateOrderCash } from "../../../Redux/Actions/ChecoutActions"
import {  useNavigate } from 'react-router-dom'

const OrderPayCashHook = () => {

    
    const [loading, setloading] = useState(true)
    const [loadingcash, setloadingcash] = useState(true)
    const [addressDetails, setAddressDetails] = useState([])

    const dispatch = useDispatch()
    const navigate= useNavigate()

    const AllCartres = useSelector(state => state.CartReducer.getallproductscart)

    const handelChooseAddress = (e)=>{
        if(e.target.value != "0")
        get(e.target.value)
    }

    const get = async (id)=>{
        setloading(true)
        await dispatch(GetOneAdress(id))
        setloading(false)
    }

    const resAddress = useSelector(state  => state.AddressReducer.oneaddress)
    useEffect(() => {
        if(loading === false){
            if (resAddress && resAddress.status === "success") {
                setAddressDetails(resAddress.data)
            }else{
                setAddressDetails([])
            }
        }
    }, [loading])

    const handelCreateCashOrder = async ()=>{
        if(AllCartres._id === "0")
        {
            notify("Empty Cart !","warn")
            return
        }
        else{
            setloadingcash(true)
            await dispatch(CreateOrderCash(AllCartres.data._id,
                {
                    shippingAddress:
                    {
                        details: resAddress.alias,
                        phone: resAddress.phone,
                        city:resAddress.city,
                        postalCode:resAddress.postalCode,
                    }
                
                }
            ))
            setloadingcash(false)
        }
    }

    const CashorderRes = useSelector(state  => state.ChecoutReducer.cashorder)
    useEffect(() => {
        if(loadingcash === false){
            if (CashorderRes && CashorderRes.status === 201) {
                notify("Order Completed","success")
                setTimeout(() => {
                    navigate("/User/AllOrders")
                }, 1000);
            }else{
                notify("Failure!","error")
            }
        }
    }, [loadingcash])

    return [handelChooseAddress,addressDetails,handelCreateCashOrder]
}

export default OrderPayCashHook
