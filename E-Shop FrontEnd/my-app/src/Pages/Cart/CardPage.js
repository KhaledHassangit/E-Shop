import React, { useState } from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import CartItem from '../../Components/Cart/CartItem'
import CartCheckout from '../../Components/Cart/CartCheckout'
import GetAllProductsCartHook from '../../Components/CustomHooks/Cart/GetAllProductsCart-Hook'

const CardPage = () => {

    const [itemsNum,cartItems,cartTotalPrice,couponNameRes,cartTotalPriceAfterDis] = GetAllProductsCartHook()

    return(
    <Container style={{ minHeight: "630px" }}>
        <Row>
            <div className='cart-title mt-4'>عربة التسوق</div>
        </Row>
        <Row className='d-flex justify-content-center'>
        
            <Col xs="12" md="9">
            {
                cartItems.length >= 1 ? cartItems.map((cartitem,index)=>{
                    return (<CartItem key={index} cartitem={cartitem}  />) 
                }) :<h6>لا يوجد منتجات  في العربة</h6>
                
            }
            </Col>
            <Col xs="6" md="3">
                <CartCheckout cartTotalPrice={cartTotalPrice} couponNameRes={couponNameRes}
                cartTotalPriceAfterDis={cartTotalPriceAfterDis} cartItems={cartItems}/>
            </Col>
        </Row>
    </Container>
    )
}

export default CardPage
