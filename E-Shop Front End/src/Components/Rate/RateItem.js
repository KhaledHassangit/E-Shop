import React from 'react'
import {Row, Col, ToastContainer} from "react-bootstrap"
import rate from "../../images/rate.png"
import deleteicon from "../../images/delete.png"
import editicon from "../../images/editicon.png"
import { Button, Modal } from 'react-bootstrap'
import DeleteReviewHook from '../CustomHooks/Reviews/DeleteReview-Hook'
import EditReviewHook from '../CustomHooks/Reviews/EditReview-Hook'
import ReactStars from "react-rating-stars-component";

const RateItem = ({review}) => {
    const [isUser,showDelete,handleClose,handelDelete,handleShow] = DeleteReviewHook(review)

    const [showEdit,handleCloseEdit,handelEdit,
            onChangeRateText,onChangeRateValue,
            Editedtext,EditedRate,handleShowedit] = EditReviewHook(review)

        const RatingStars = {
            size: 20, 
            count: 5,
            color: "#979797",
            activeColor: "#ffc107",
            value: EditedRate,
            a11y: true,
            isHalf: true,
            emptyIcon: <i className="far fa-star" />,
            halfIcon: <i className="fa fa-star-half-alt" />,
            filledIcon: <i className="fa fa-star" />,
            onChange: newValue => {
                onChangeRateValue(newValue);
    
            }
        };
        
    return (
    <div>

        <Modal show={showDelete} onHide={handleClose}>
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

        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header >
                <Modal.Title>  تعديل </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ReactStars {...RatingStars} />
                <input value={Editedtext} onChange={onChangeRateText} type='text' className='font w-100 login-input ' style={{border:"none"}}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
                تراجع
            </Button>
            <Button variant="primary" onClick={handelEdit}>
                تعديل
            </Button>
            </Modal.Footer>
        </Modal>
        <Row className='mt-3'>
            <Col className='d-flex me-5'>
                <div className='rate-name p-1 ms-2'>{review.user.name}</div>
                <img className='mt-2' style={{width:"16px",height:"16px"}} alt='' src={rate}></img>
                <div className='cat-rate pt-2 p-1 mt-0'>{review.rating}</div>
            </Col>
        </Row>
        <Row className='border-bottom mx-2 '>
            <Col className='d-flex  me-4 pb-2 '>
                <div className='rate-description d-inline ms-2'>
                    {review.review}
                </div>
            </Col>
            {
                isUser === true ?
                (
                <Col>
                    <div className='d-inline d-flex justify-content-end'>
                        <img  onClick={handleShow} className='ms-1' style={{cursor:"pointer"}} alt='delete' src={deleteicon} width="20px" height="20px"/>
                        <img onClick={handleShowedit} style={{cursor:"pointer"}} alt='delete' src={editicon} width="20px" height="20px"/>
                    </div>
                </Col>
                )
                :null
            }
        </Row>
    <ToastContainer/>
    </div>
    )
}

export default RateItem;
