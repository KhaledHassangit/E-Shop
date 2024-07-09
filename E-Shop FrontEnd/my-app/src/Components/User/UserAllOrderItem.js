import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrdersCard'

const UserAllOrderItem = ({orderItem}) => {
    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">طلب رقم #{orderItem.id ? orderItem.id : 0 }</div>
            </Row>
            {
                orderItem.cartItems ? (orderItem.cartItems.map((item,index)=>{
                    return (<UserAllOrderCard key={index} item={item} />
                )
                })): null
            }
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="">
                    <div>
                        <div className="d-inline">التوصيل </div>
                        <div className="d-inline mx-2 stat">
                            {orderItem.isDelivered === true ? "تم التوصيل " : "قيد التنفيذ"}
                            </div>
                    </div>

                    <div>
                        <div className="d-inline">الدفع </div>
                        <div className="d-inline mx-2 stat">
                            {orderItem.isPaid === true ? "تم التوصيل " : "قيد التنفيذ"}
                            </div>
                    </div>
                    <div>
                        <div className="d-inline">طريقة الدفع </div>
                        <div className="d-inline mx-2 stat">
                            {orderItem.paymentMethodType ===   "cash" ? "Cash" : "Visa Card"}
                            </div>
                    </div>
                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">{orderItem.totalOrderPrice || 0} جنيه</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllOrderItem