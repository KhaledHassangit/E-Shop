import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import labtops from "../../images/laptops.png"

const DicountSection = () => {
    return (
        <Container>
            <Row className='discount-backcolor my-3 mx-2 d-flex text-center align-items-center'>
                <Col sm="6">
                    <div className='discount-title'>
                        خـصم يصل حتي 30% علي أجهزة اللاب توب
                    </div>
                </Col>

                <Col sm="6">
                    <img className='dicount-img ' src={labtops} alt='' />
                </Col>
            </Row>
        </Container>
    )
}

export default DicountSection
