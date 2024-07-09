import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Row,Col } from 'react-bootstrap'
import AddRatingHook from '../CustomHooks/Reviews/AddRating-Hook';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router';

const RatePost = () => {
    const {id} = useParams()
    
    const [RatePost,Ratevalue,loading,onChangeRatetext,onChangeRateValue,user,onSubmit] = AddRatingHook(id)
    var name= ""
    if(user)
        name= user.name

    const RatingStars = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 7.5,
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
            <Row className="mt-3">
                <Col sm="12" className='me-5 d-flex'>
                <div className='rate-name p-1 ms-2'>{name}</div>
                <ReactStars {...RatingStars} />
                </Col>
            </Row>

            <Row className="border-bottom mx-2">
                <Col className='d-flex flex-column me-4 pb-2'>
                    <textarea  value={RatePost} onChange={onChangeRatetext} className='input-form-area p-2 mt-3 mb-2' rows= "2" cols="20" placeholder ="أكتب تقييمك ...."/>
                    <div className='d-flex justify-content-end'>
                        <div onClick={onSubmit} className='product-cart-add py-2 px-2  text-center '>أضف تعليق</div>
                    </div>
                </Col>
            </Row>
            
        <ToastContainer/>
        </div>
    )
}

export default RatePost
