import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddCategory from '../../Components/Admin/AdminAddCategory'

const AdminAddCategoryPage = () => {
    return (
        <Container style={{minHeight:"630px"}}>
            <Row className='py-3'>
                <Col xs="3" sm="3" md="2">
                    <AdminSideBar/>
                </Col>
                <Col  xs="9" sm="9" md="10">
                    <AdminAddCategory/>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddCategoryPage
