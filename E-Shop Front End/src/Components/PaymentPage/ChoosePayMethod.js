import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ViewAddressHook from '../CustomHooks/User/ViewAddress-Hook'
import OrderPayCashHook from '../CustomHooks/Checkout/OrderPayCash-Hook'
import { ToastContainer } from 'react-toastify'
import notify from '../../Hooks/UseNotification'
import OrderPayCardHook from '../CustomHooks/Checkout/OrderPayCard-Hook'
import GetAllProductsCartHook from '../CustomHooks/Cart/GetAllProductsCart-Hook'

const ChoosePayMethod = () => {

    const [addressres] = ViewAddressHook()
    const  [handelChooseAddress,addressDetails,handelCreateCashOrder] = OrderPayCashHook()
    const  [handelCreateVisaOrder] = OrderPayCardHook(addressDetails)
    const [,,cartTotalPrice,,cartTotalPriceAfterDis] = GetAllProductsCartHook()

    const [type, setType] = useState("")
    const ChangePayMethod = (e)=>{
        setType(e.target.value)
    }
    const handelPay = ()=>{
        if(type === "Card"){
            handelCreateVisaOrder()
            
        }else if(type === "Cash"){
            handelCreateCashOrder()
        } 
        else{
            notify("Choose Payment Method","warn")
        }
    }
    return (
        <div >
            <div className='pt-5 admin-content-text '>أختر طريقة الدفع</div>
            <div className='my-3 px-3 h-100 user-address-card w-100 '>
            <Row className='d-flex justify-content-between'>
                <Col xs="12" className='my-4'>
                    <input 
                        onChange={ChangePayMethod}
                        type="radio" 
                        name="paymentMethod" 
                        value="Card"
                        className='mt-2' 
                    />
                    <label className='mx-2'>الدفع عن طريق البطاقة الائتمانية</label>
                </Col>
            </Row>

            <Row>
                <Col xs="12" className='my-4'>
                    <input   
                        onChange={ChangePayMethod}
                        type="radio" 
                        name="paymentMethod" 
                        value="Cash"
                        className='mt-2' 
                    />
                    <label className='mx-2'>الدفع عن طريق الاستلام</label>
                </Col>
            </Row>

                <select 
                    onChange={handelChooseAddress}
                        name="address"
                        id="cat"
                        className="select input-form-area mt-1  w-25  mb-4 text-center px-2">
                        <option value="0">   أختر عنوان التوصيل </option>
                            {
                                
                                addressres.data ? (
                                    addressres.data.map((address,index)=>{
                                        return (
                                            <option key={address._id}  value={address._id} >{address.alias}</option>
                                        )
                                    })) 
                                    :<option  key={0} value={0}>   لا يوجد عناوين مسجلة  </option>
                            }
                        
                </select>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                <div className="product-price d-inline w-100 my-3  border">
                    {
                        cartTotalPriceAfterDis >=1  ? `${cartTotalPrice || 0} جنية / بعد الخصم ${cartTotalPriceAfterDis}`
                        :`${cartTotalPrice || 0} جنية`
                    }
                    </div>
                    <div onClick={handelPay} className="product-cart-add px-3 pt-2 d-inline me-2"> اتمام الشراء</div>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default ChoosePayMethod
