import Card from 'react-bootstrap/Card';
import {Col, ToastContainer} from "react-bootstrap"
import rate from "../../images/rate.png"
import { Link } from 'react-router-dom';
import WishListHook from '../CustomHooks/WishList/WishList-Hook';
import React from "react"

function ProductCard({item,favproduct}) {
    const [faveicon,handlfav,AddToWithList,RemoveFromWithList] = WishListHook(item,favproduct)
    
    return (
        <Col xs="6" sm="6" md="4" lg="3" className='d-flex'>

            <Card style={{ width: '100%',minHeight:"350px",borderRadius:"10px" ,border:"none",backgroundColor:"#FFFFFF",boxShadow:"0 2px 0 rgba(151,151,151,0.5)" }} className='my-2'>
                <Link to={`/AllProducts/${item._id}`} style={{textDecoration:"none"}}>
                <Card.Img  src={item.imageCover} style={{width:"100%",height:"230px",cursor:"pointer"}} />
                </Link>
                <Card.Body>
                    <div className='d-flex justify-content-end'  >
                        <img src={faveicon} onClick={handlfav}
                        style={{width:"23px",height:"21px",cursor:"pointer"} }alt=""></img>
                    </div>
                    <div className='card-title'>
                    <Card.Title>{item.title}</Card.Title>
                    </div>
                    <div className='d-flex justify-content-lg-between align-items-center'>
                        <span className='card-rate '>{item.ratingsQuantity} <img src={rate} style={{width:"16px",height:"16px"}}alt=""></img></span>
                        <span className='card-price'>
                            {item.priceAfterDiscount >= 1 ? 
                            (<div > {item.priceAfterDiscount}<span style={{textDecoration:"line-through"}}>
                                {item.price}</span></div>): item.price}
                        <span className='card-currency '>جنية</span></span>
                    </div>
                    
                </Card.Body>
                <ToastContainer/>
            </Card>
            
        </Col>
    );
}

export default ProductCard;