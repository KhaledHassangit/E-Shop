import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import deletion from "../../images/deletion.png"
import { Button, Modal } from 'react-bootstrap'
import ProfileHook from '../CustomHooks/User/Profile-Hook'
import { ToastContainer } from 'react-toastify'

const UserProfile = () => {
    const[user,show,handleClose,handleShow,handledit
        ,onChangeName,onChangeEmail,onChangeNumber
        ,name,email,phonenumber
        ,ChangePaswword,onChangeOldPass,onChangeNewPass,onChangeConfirm
        ,oldpassword,newpassword,confirmnewpassword]= ProfileHook()
    return (
        <div>
            <div className="admin-content-text">الصفحه الشخصية</div>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header >
                    <Modal.Title>
                        <div className='font'>
                            تعديل البيانات الشخصية
                        </div> 
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type="text"
                            className="input-form font d-block mt-3 px-3 "
                            placeholder="اسم المستخدم "
                            value={name}
                            onChange={onChangeName}
                        />
                        <input
                            type="email"
                            className="input-form font d-block mt-3 px-3 "
                            placeholder=" البريد الالكتروني "
                            value= {email}
                            onChange={onChangeEmail}
                        />
                        <input
                            type=""
                            className="input-form font d-block mt-3 px-3 "
                            placeholder="  الهاتف "
                            value={phonenumber}
                            onChange={onChangeNumber}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button variant="primary" onClick={handledit}>
                    حفظ التعديل 
                    </Button>
                    </Modal.Footer>
            </Modal>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">الاسم:</div>
                        <div className="p-1 item-delete-edit">{user.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div  className="d-flex mx-2" onClick={handleShow}>
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deletion}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> تعديل</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">رقم الهاتف: {user.phone}</div>
                        <div className="p-1 item-delete-edit"></div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">الايميل: {user.email}</div>
                        <div className="p-1 item-delete-edit"></div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">تغير كملة المرور</div>
                        <input
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="ادخل كلمة المرور القديمة"
                            value={oldpassword}
                            onChange={onChangeOldPass}
                        />
                        <input
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="ادخل كلمة المرور الجديده"
                            value={newpassword}
                            onChange={onChangeNewPass}
                        />
                        <input
                            
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="تاكيد كلمة المرور الجديدة"
                            value={confirmnewpassword}
                            onChange={onChangeConfirm}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button onClick={ChangePaswword} className="btn-save d-inline mt-2 ">حفظ كلمة السر</button>
                    </Col>
                </Row>
            </div>
        <ToastContainer/>
        </div>
    )
}

export default UserProfile
