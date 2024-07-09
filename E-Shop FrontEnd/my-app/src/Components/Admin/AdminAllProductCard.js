import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import item from "../../images/item.png"
import favoff from "../../images/favoff.png"
import rate from "../../images/rate.png"
import { useDispatch } from 'react-redux'
import { DeleteProduct } from '../../Redux/Actions/ProductActions'
const AdminAllProductCard = ({product}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  const handelDelete = async ()=>{
    await dispatch(DeleteProduct(product._id))
    setShow(false)
    window.location.reload()
  }
  return (

    <Col xs="12" sm="6" md="5" lg="4" className='d-flex'>
      
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
            <Card style={{ width: '100%',minHeight:"370px",borderRadius:"10px" ,border:"none",backgroundColor:"#FFFFFF",boxShadow:"0 2px 0 rgba(151,151,151,0.5)" }} className='my-2'>
              <Row className='d-flex justify-content-center px-2'>
                <Col className='d-flex justify-content-between '>
                <div onClick={handleShow} className='item-delete-edit d-inline'>ازاله</div>
                <Link to={`/admin/editproduct/${product._id}`} style={{textDecoration:"none"}}>
                <div className='item-delete-edit d-inline'>تعديل</div>
                </Link>
                </Col>
              </Row>
                <Link to={`/AllProducts/${product._id}`} style={{textDecoration:"none"}}>
                <Card.Img  src={product.imageCover} style={{width:"100%",height:"230px",cursor:"pointer"}} />
                </Link>
                <Card.Body>
                    <div className='d-flex justify-content-end' >
                        <img src={favoff} style={{width:"25px",height:"25px",cursor:"pointer"} }alt=""></img>
                    </div>
                    <div className='card-title'>
                    <Card.Title>{product.title}</Card.Title>
                    </div>
                    <div className='d-flex justify-content-lg-between align-items-center'>
                        <span className='card-rate '>{product.ratingsQuantity}<img src={rate} style={{width:"16px",height:"16px"}}alt=""></img></span>
                        {product.priceAfterDiscount >= 1 ? (
                <div className="product-price d-inline px-3 py-3 "> 
                {product.priceAfterDiscount}<span style={{textDecoration:"line-through"}}>
                {product.price}</span>جنية</div>
            ) :<div className='product-price d-inline px-3 py-3  '><span>{product.price} </span>جنية</div> }
                    </div>
                    
                </Card.Body>
            </Card>
        </Col>
  )
}

export default AdminAllProductCard
