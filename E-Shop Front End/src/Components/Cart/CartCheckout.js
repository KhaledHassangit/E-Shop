import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ClearCartHook from '../CustomHooks/Cart/ClearCart-Hook'
import { ToastContainer } from 'react-toastify'
import ApplyCouponHook from '../CustomHooks/Cart/ApplyCoupon-Hook'

const CartCheckout = ({cartTotalPrice,cartTotalPriceAfterDis,couponNameRes,cartItems}) => {
    const [ClearCarthandel] = ClearCartHook()
    const [couponName,onAddCoupon,AddCouponhandl,handelCheckOut] = ApplyCouponHook(cartItems)
    useEffect(() => {
        if(couponNameRes){
            onAddCoupon(couponNameRes)
        }
    }, [couponNameRes])

    return (
        <Row className="my-1 d-flex justify-content-center align-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column ">
                <div className="d-flex">
                    <input
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                        value={couponName}
                        onChange={(e)=>onAddCoupon(e.target.value)}
                        />
                    <button onClick={AddCouponhandl} className="copon-btn d-inline  ">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    {
                        cartTotalPriceAfterDis >=1  ? `${cartTotalPrice || 0} جنية / بعد الخصم ${cartTotalPriceAfterDis}`
                        :`${cartTotalPrice || 0} جنية`
                    }
                    
                    </div>
                    <button onClick={handelCheckOut} className="product-cart-add w-100 px-2 "> اتمام الشراء</button>
                <button onClick={ClearCarthandel}  className="product-cart-add w-100 px-2 my-1"> مسح العربة</button>
            </Col>
            <ToastContainer/>
        </Row>
    )
}

export default CartCheckout