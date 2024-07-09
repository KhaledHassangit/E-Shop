import { useNavigate } from 'react-router'
import { EditCoupon, getOneCoupon } from '../../../Redux/Actions/CouponActions'
import { useDispatch,useSelector } from 'react-redux'
import { useState,useEffect } from 'react'

const EditCouponHook = (id) => {
    const [couponname, setcouponname] = useState("")
    const [coupondate, setcoupondate] = useState("")
    const [couponvalue, setcouponvalue] = useState("")
    const [loadingCoupon, setloadingCoupon] = useState(true)
    const [loading, setloading] = useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onecoupon = useSelector((state) => state.CouponsReducer.onecoupon)

    useEffect(() => {
        const get = async ()=>{
            setloadingCoupon(true)
            await  dispatch(getOneCoupon(id))
            setloadingCoupon(false)
        }
        get()
    }, [])

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    useEffect(() => {
        if(loadingCoupon === false){
            if(onecoupon && onecoupon.data){
                setcouponname(onecoupon.data.name)
                setcoupondate(formatDate(onecoupon.data.expire))
                setcouponvalue(onecoupon.data.discount)
            }
        }
    }, [loadingCoupon])

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


    const onSubmit = async()=>{
        if(couponname === "" || coupondate === "" || couponvalue <= 0 )
        {            
            notify("Please fill in all required fields","warn")
            return

        }
        setloading(true)
        await dispatch(EditCoupon(id,{
            name: couponname,
            expire: coupondate,
            discount: couponvalue,

        }))
        setloading(false)
    }
    const editcoupon = useSelector((state) => state.CouponsReducer.editcoupon)


    useEffect(() => {
        if(loading === false){
            if(editcoupon && editcoupon.status === 200){
                notify("Coupon Edited Successfully","success")
                setTimeout(() => {
                    navigate('/admin/addCoupon')
                }, 1000);

                window.location.reload(false)
            } else if (Couponres.status === 400){
                notify(" The Coupon Is AlReady Exists ","error")
            }
                else if (Couponres.status === 403){
                notify("Forbidden","error")
            }
            
        }
    }, [loading])


    return [onChangeName,onChangeDate,onChangeValue,couponname,coupondate,couponvalue,onSubmit,onecoupon]

}

export default EditCouponHook
