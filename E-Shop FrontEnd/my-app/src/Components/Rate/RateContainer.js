import React from 'react'
import { Container,Row,Col, Spinner } from 'react-bootstrap'
import rate from "../../images/rate.png"
import RateItem from './RateItem'
import RatePost from './RatePost'
import Pagenation from '../Utilities/Pagenation'
import ViewAllReviewsHook from '../CustomHooks/Reviews/ViewAllReviews-Hook'
import { useParams } from 'react-router';

const RateContainer = ({RateAverage,RateQuantity}) => {
    const {id} = useParams()
    const [AllReviews,loading,onPress] = ViewAllReviewsHook(id)
    return (
        <Container className='rate-container mt-4'>
            <Row>
                <Col className='d-flex'>
                <div className='sub-title p-1'>التقيمات</div>
                <img className='mt-3' style={{width:"16px",height:"16px"}} alt='' src={rate}></img>
                <div className='cat-rate pt-2 p-1 mt-2'>{RateAverage}</div>
                <div className='rate-count pt-2 p-1 mt-2 '>({`${RateQuantity} تقييم`})</div>
                </Col>
            </Row>
            <RatePost/>
            {
                loading === false ? (
                AllReviews.data ? (AllReviews.data.map((review,index)=>{
                    return (<RateItem key={index} review={review}/>)
                }))
                :<h6>لا يوجد تقييمات </h6>
                ):<Spinner animation="border" variant="info" />
            }
            {
                AllReviews.paginationResult && AllReviews.paginationResult.numberOfPages >=2 ?(
                    <Pagenation pageCount={AllReviews.paginationResult ? AllReviews.paginationResult.numberOfPages :0}onPress={onPress}/>
                ):null
            }
            
        </Container>
    )
}

export default RateContainer
