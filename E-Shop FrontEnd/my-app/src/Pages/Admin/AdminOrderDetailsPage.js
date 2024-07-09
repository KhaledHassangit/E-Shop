import React from 'react'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import { Col, Container, Row } from 'react-bootstrap'
import AdminOrderDetails from '../../Components/Admin/AdminOrderDetails'

const AdminOrderDetailsPage = () => {
    return (
        <Container style={{minHeight:"630px"}}>
        <Row className='py-3'>
            <Col xs="3" sm="3" md="2">
                <AdminSideBar/>
            </Col>
            <Col  xs="9" sm="9" md="10">
                <AdminOrderDetails/>
            </Col>
        </Row>
    </Container>
    )
}

export default AdminOrderDetailsPage
