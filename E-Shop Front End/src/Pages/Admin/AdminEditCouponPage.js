import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminEditCoupon from '../../Components/Admin/AdminEditCoupon'

export const AdminEditCouponPage = () => {
    return (
        <Container style={{minHeight:"630px"}}>
        <Row className='py-3'>
            <Col xs="3" sm="3" md="2">
                <AdminSideBar/>
            </Col>
            <Col  xs="9" sm="9" md="10">
                <AdminEditCoupon/>
            </Col>
        </Row>
    </Container>
    )
}
