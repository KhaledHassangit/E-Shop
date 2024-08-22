import React from 'react'
import CartItem from '../Cart/CartItem'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import UserAllOrderItem from '../User/UserAllOrderItem'
import AdminOrderDetailsHook from '../CustomHooks/Admin/AdminOrderDetails-Hook'
import { ToastContainer } from 'react-toastify'

const AdminOrderDetails = () => {
    const{id} = useParams()
    const [OrderData,cartItem,onChangePaid,onChangeDelving,onclickSavePay,onclickSaveDeliver] = AdminOrderDetailsHook(id)
    let OrderDetails = OrderData ? OrderData : null; 

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div>
            <div className='admin-content-text'>تاريخ الطلب{formatDate(OrderDetails.createdAt)}</div>
            <UserAllOrderItem orderItem={OrderDetails}/>
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                    {OrderDetails.user && OrderDetails.user.name ? OrderDetails.user.name : ""}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {OrderDetails.user && OrderDetails.user.phone ? OrderDetails.user.phone : ""}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {OrderDetails.user && OrderDetails.user.email ? OrderDetails.user.email : ""}

                    </div>
                </Col>
                <div className="d-flex mt-2 justify-content-center">
                    <select
                    onChange={onChangePaid}
                        name="languages"
                        id="paid"
                        className="select input-form-area mt-1  text-center px-1 w-25">
                        <option value="0">حالة الدفع</option>
                        <option value="true" > تم  </option>
                        <option  value="false">قيد التنفيذ</option>
                    </select>
                    <button onClick={onclickSavePay} className="btn-a px-3 d-inline mx-2 ">حفظ </button>

                    <select
                    onChange={onChangeDelving}
                        name="languages"
                        id="delving"
                        className="select input-form-area mt-1  text-center px-2 w-25">
                        <option value="0">حالة التوصيل</option>
                        <option   value="true">تم </option>
                        <option value="false">قيد التنفيذ</option>
                    </select>
                    <button  onClick={onclickSaveDeliver} className="btn-a px-3 d-inline mx-2 ">حفظ </button>
                </div>
            </Row>      
            <ToastContainer/>      
        </div>
    )
}

export default AdminOrderDetails
