import React from 'react'
import { Button, Col,  Modal,  Row } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import deletion from "../../images/deletion.png"
import ClearCartHook from '../CustomHooks/Cart/ClearCart-Hook'
import { ToastContainer } from 'react-toastify'

const CartItem = ({cartitem}) => {
    // console.log(cartitem)
    const [ClearCarthandel,show,handleClose,handleShow
            ,handelDeleteItem,onChangeCount,itemCount,handelUpdateCart]  = ClearCartHook(cartitem)
    return (
        <Col xs="12" className="cart-item-body my-2 d-flex px-2">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                <Modal.Title>تأكيد الحذف </Modal.Title>
                </Modal.Header>
                <Modal.Body>هل أنت متأكد من عملية الحذف ؟</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    تراجع
                </Button>
                <Button variant="primary" onClick={handelDeleteItem}>
                    حذف
                </Button>
                </Modal.Footer>
            </Modal>
        <img width="300px" height="250px" src={`http://127.0.0.1:8000/products/${cartitem.product ? cartitem.product.imageCover : mobile }`} alt="Product Cover" />
        <div className="w-100">
            <Row className="justify-content-between"> 
            <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 cat-text">{cartitem.product.category.name}</div>
                <div onClick={handleShow}  className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deletion} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline ">ازاله</div>
                </div>
            </Col> 
            </Row>

            <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
                <div className="d-inline pt-2 cat-title">
                {cartitem.product.title || ""}
                </div>
                <div className="d-inline pt-2 cat-rate me-2">{cartitem.product.ratingsAverage || 0}</div>
            </Col>
            </Row>
            <Row>
            <Col sm="12" className="mt-1">
                <div className="cat-text d-inline">الماركة :</div>
                <div className="barnd-text d-inline mx-1">{cartitem.product.brand.name || ""}  </div>
            </Col>
            </Row>
            <Row>
            <Col sm="12" className="mt-1 d-flex">
                {
                    cartitem.product.color === "" ? null : (
                        <div className="color ms-2 border" 
                        style={{backgroundColor:`${cartitem.color}`}}></div>

                    )
                }
        
            </Col>
            </Row>

            <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 d-flex">
                <div className="cat-text mt-2  d-inline">الكمية</div>
                <input className="mx-2 text-center"type="number"
                    value={itemCount || ""} onChange={onChangeCount}
                    style={{ width: "60px", height: "40px" }}/>
                <Button onClick={handelUpdateCart} className='btn btn-dark' >تطبيق</Button>
                </div>
                <div className="d-inline pt-2 barnd-text mt-3 ms-3"> {cartitem.price || ""}جنية</div>
            </Col>
            </Row>
        </div>
        <ToastContainer/>
        </Col>
    )
}

export default CartItem