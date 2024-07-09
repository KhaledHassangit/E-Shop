import React, { useRef } from 'react'
import {  Col, Row } from 'react-bootstrap'
import AddCouponHook from '../CustomHooks/Coupon/AddCoupon-Hook'
import { ToastContainer } from "react-toastify"
import AdminCoupnCard from './AdminCoupnCard'

const AdminAddCoupon = () => {
    const dateRef = useRef()
    const [onChangeName,onChangeDate,onChangeValue,couponname,
            coupondate,couponvalue,onSubmit,coupons] =  AddCouponHook()
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">أضف كوبون جديد</div>
                <Col sm="8">

                    <input
                        type="text"
                        onChange={onChangeName}
                        value={couponname}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الكوبون"/>

                    <input type="text"
                        ref={dateRef}
                        onChange={onChangeDate}
                        value={coupondate}
                        onFocus={()=> dateRef.current.type="date"}
                        onBlur={()=> dateRef.current.type="text"}
                        className="input-form d-block mt-3 px-3"
                        placeholder="تاريخ الانتهاء"/>
                        

                    <input
                        type="number"
                        onChange={onChangeValue}
                        value={couponvalue}
                        className="input-form d-block mt-3 px-3" 
                        placeholder="نسبة خصم الكوبون"/>

                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 " onClick={onSubmit}>حفظ الكوبون</button>
                </Col>
            </Row>
            
            <Row>
                <Col sm="8" className="">
                    {
                        coupons ? (coupons.map((item, index) => {
                            return <AdminCoupnCard key={index} coupon={item} />
                        })) : <h6>لا يوجد كوبونات حتى الان</h6>
                    }

                </Col>
            </Row>
 
            <ToastContainer />
        </div>
    )
}

export default AdminAddCoupon