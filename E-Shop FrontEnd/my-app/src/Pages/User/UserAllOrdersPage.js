import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import { UserAllOrders } from '../../Components/User/UserAllOrders'

export const UserAllOrdersPage = () => {
    return (
    <Container style={{minHeight:"630px"}}>
        <Row className='py-3'>
            <Col xs="3" sm="3" md="2">
                <UserSideBar/>
            </Col>
            <Col  xs="9" sm="9" md="10">
                <UserAllOrders/>
            </Col>
        </Row>
    </Container>
    )
}
