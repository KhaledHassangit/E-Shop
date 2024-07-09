import React from 'react'
import { Col, Row } from 'react-bootstrap'
import deletion from "../../images/deletion.png"
import { Link } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import DeleteAddressHook from '../CustomHooks/User/DeleteAddress-Hook'

export const UserAddressCard = ({Address}) => {
    if (!Address) {
        return null; 
    }   
    const [handleClose,handleShow,handelDelete,show]= DeleteAddressHook(Address._id)
    return (
        <div className="user-address-card my-3 px-2">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                <Modal.Title>تأكيد الحذف </Modal.Title>
                </Modal.Header>
                <Modal.Body>هل أنت متأكد من عملية الحذف ؟</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    تراجع
                </Button>
                <Button variant="primary" onClick={handelDelete}>
                    حذف
                </Button>
                </Modal.Footer>
            </Modal>
            <Row className="d-flex justify-content-between  ">
                <Col xs="6">
                    <div className="p-2">{Address.alias}</div>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                            <Link to={`/User/EditAdress/${Address._id}` }style={{textDecoration:"none"}}>
                                <div className="d-flex mx-2">
                                    <img
                                        alt=""
                                        className="ms-1 mt-2"
                                        src={deletion}
                                        height="17px"
                                        width="15px"
                                    />
                                    <p className="item-delete-edit"> تعديل</p>
                                </div>
                            </Link>    
                        
                        <div  className="d-flex " onClick={handleShow}>
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deletion}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> حذف</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                            {Address.details}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف :{Address.phone}       
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}
