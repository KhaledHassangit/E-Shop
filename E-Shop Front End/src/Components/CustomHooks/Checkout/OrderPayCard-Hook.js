import {useState,useEffect} from "react"
import {useDispatch ,useSelector} from "react-redux"
import notify from "../../../Hooks/UseNotification"
import { CreateOrderCard} from "../../../Redux/Actions/ChecoutActions"
import {  useNavigate } from 'react-router-dom'


const OrderPayCardHook = (addressDetails) => {


    const [loadingCard, setloadingCard] = useState(true)

    const dispatch = useDispatch()
    const navigate= useNavigate()


    const AllCartres = useSelector(state => state.CartReducer.getallproductscart)

    const handelCreateVisaOrder = async ()=>{
        if(AllCartres._id === "0")
        {
            notify("Empty Cart !","warn")
            return
        }
        else{
            setloadingCard(true)
            await dispatch(CreateOrderCard(AllCartres.data._id,
                {
                    shippingAddress:
                    {
                        details: addressDetails.alias,
                        phone: addressDetails.phone,
                        city:addressDetails.city,
                        postalCode:addressDetails.postalCode,
                    }
                
                }
            ))
            setloadingCard(false)
        }
    }

    const VisaorderRes = useSelector(state  => state.ChecoutReducer.visaorder)

    useEffect(() => {
        if(loadingCard === false){
            if (VisaorderRes && VisaorderRes.status === "success") {
                notify("Order Completed","success")
                if(VisaorderRes.session.url){
                    window.open(VisaorderRes.session.url)
                }
            }else{
                notify("Failure!","error")
            }
        }
    }, [loadingCard])


    return [handelCreateVisaOrder]
}

export default OrderPayCardHook
