import  { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from "../../../Hooks/UseNotification.js"
import { ApplyCoupon } from '../../../Redux/Actions/CartActions.js'
import {  useNavigate } from 'react-router-dom'

const ApplyCouponHook = (cartItems) => {

    const navigate= useNavigate()
    const dispatch = useDispatch() 
    const  [couponName, setcouponName] = useState("")
    const  [loading, setLoading] = useState(true)

    const onAddCoupon =(e)=>{
        setcouponName(e)
    }

    const AddCouponhandl =  async()=>{
        if(couponName === ""){
            notify("Add Your Coupon" ,"warn")
            return;
        }
        setLoading(false)
        await dispatch(ApplyCoupon({
            couponName:couponName,
        }))
        setLoading(true)
    }
    const ApplyCouponres = useSelector(state => state.CartReducer.applycoupon)
    console.log(ApplyCouponres)
    useEffect(() => {
        if(loading === false){
            if(ApplyCouponres && ApplyCouponres.status === 200)
            {
                notify("Coupon Vaild " ,"success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1500);
            }
            else {
                notify("Coupon is invalid or has expired" ,"warn")
                setTimeout(() => {
                    window.location.reload(false)
                }, 1500);
            }
                
        }
    }, [loading])

    const handelCheckOut = ()=>{
        if(cartItems.length >= 1 ){
            navigate("/order/paymethod")
        }
        else{
            notify("Empty Cart Please Add a Product To Proceed","warn")
        }
    }
    return [couponName,onAddCoupon,AddCouponhandl,handelCheckOut]
}

export default ApplyCouponHook
