import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DeleteCoupon } from '../../../Redux/Actions/CouponActions';

const CouponCardHook = (coupon) => {
    
    let dateString;
    if (coupon) {
        dateString = coupon.expire;
    }
    
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    
    const handelDelete = async ()=>{
        await dispatch(DeleteCoupon(coupon._id))
        setShow(false)
        window.location.reload(false)
    }

    return [handleClose,handleShow,handelDelete,show,formatDate,dateString]
    
    
}

export default CouponCardHook
