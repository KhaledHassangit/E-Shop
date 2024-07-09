import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import deletion from "../../images/deletion.png"
import mobile from "../../images/mobile.png"
import { Link } from 'react-router-dom'

const AdminAllOrdersCard = ({orderItem}) => {
    return (
    <Link to={`/admin/AllOrders/${orderItem._id}`} style={{textDecoration:"none"}}>
        <Col xs="12" className="cart-item-body my-2 d-flex px-2 pb-5 mb-5" style={{height:"200px"}} > 

        {/* <img width="160px" height="197px" src={`http://127.0.0.1:8000/products/${orderItem.product.imageCover}`} alt="" /> */}
        <div className="w-100">
            <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 cat-text">رقم طلب #{orderItem.id}</div>
                <div className="d-inline pt-2 barnd-text  ms-3"> {orderItem.totalOrderPrice || 0} جنية</div>
            </Col>
            </Row>

            <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-column justify-content-start">
                <div className="d-inline pt-2 cat-title">
                أسم العميل :{orderItem.user.name}
                </div>
                <div className="d-inline pt-2 cat-rate me-2"> {orderItem.user.email}</div>
            </Col>
            </Row>
            {/* <Row>
            <Col sm="12" className="mt-1">
                <div className="cat-text d-inline">الماركة :</div>
                <div className="barnd-text d-inline mx-1">أبل </div>
            </Col>
            </Row> */}
            {/* <Row>
            <Col sm="12" className="mt-1 d-flex">
                
                <div className="color ms-2 border"style={{ backgroundColor: "rgb(229, 44, 44)" }}></div>
        
            </Col>
            </Row> */}
{/* 
            <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 d-flex">
                <div className="cat-text mt-2  d-inline">الكميه</div>
                <input className="mx-2 text-center"type="number" style={{ width: "60px", height: "40px" }}/>
                {/* <Button  className='btn btn-dark' >تفاصيل</Button> */}
                {/* </div>
            </Col>
            </Row> */} 
            <Row className="d-flex flex-row justify-content-between  mb-5">
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
                
            </Row>
        </div>

        </Col>
    </Link>
    )
}

export default AdminAllOrdersCard
