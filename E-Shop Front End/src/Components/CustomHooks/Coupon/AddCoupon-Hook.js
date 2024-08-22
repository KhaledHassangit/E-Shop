import  { useEffect, useState } from 'react'
import {useSelector ,useDispatch} from "react-redux"
import { AddCoupon, getAllCoupons } from '../../../Redux/Actions/CouponActions'
import notify from '../../../Hooks/UseNotification'

const AddCouponHook = () => {

    const [couponname, setcouponname] = useState("")
    const [coupondate, setcoupondate] = useState("")
    const [couponvalue, setcouponvalue] = useState("")
    const [loading, setloading] = useState(true)

    const onChangeName=(e)=>{
        e.persist()
        setcouponname(e.target.value)
    }
    const onChangeDate=(e)=>{
        e.persist()
        setcoupondate(e.target.value)

    }
    const onChangeValue=(e)=>{
        e.persist()
        setcouponvalue(e.target.value)

    }
    const dispatch = useDispatch()

    const onSubmit = async()=>{
        if(couponname === "" || coupondate === "" || couponvalue <= 0 )
        {            
            notify("Please fill in all required fields","warn")
            return

        }
        setloading(true)
        await dispatch(AddCoupon({
            name:couponname,
            expire:coupondate,
            discount:couponvalue,
        }))
        setloading(false)
    }

    const Couponres = useSelector((state) => state.CouponsReducer.AddCoupons)

    useEffect(() => {
        if(loading === false){
            if(Couponres && Couponres.status === 201){
                notify("Coupon Added Successfully","success")
                // setcouponname("")
                // setcoupondate("")
                // setcouponvalue("")
                window.location.reload(false)
            } else if (Couponres.status === 400){
                notify(" The Coupon Is AlReady Exists ","error")
            }
                else if (Couponres.status === 403){
                notify("Forbidden","error")
            }
            
        }
    }, [loading])

// Getting All Coupons
    useEffect(() => {
        const get = async()=>{
            setloading(true)
            await dispatch(getAllCoupons())
            setloading(false)
        }
        get()
    }, [])

    const allcoupons = useSelector((state) => state.CouponsReducer.AllCoupons)

    let coupons = []
    try{
        if(allcoupons && allcoupons.data.length >= 1 )
        coupons  = allcoupons.data
    }   catch(e){}

    return [onChangeName,onChangeDate,onChangeValue,couponname,coupondate,couponvalue,onSubmit,coupons]
}

export default AddCouponHook
