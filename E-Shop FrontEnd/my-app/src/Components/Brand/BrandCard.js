import React from 'react'
import {Card, Col} from "react-bootstrap"
import { Link } from 'react-router-dom'
const BrandCard = ({img,id}) => {
    return (
        <Col xs="6" sm="6" md="4" lg="2" className='d-flex justify-content-center my-2'>
            <Card style={{ width: '100%',height:"150px",borderRadius:"8px" ,border:"none",backgroundColor:"#e9a9c8",boxShadow:"0 2px 0 rgba(151,151,151,0.5)" }} className='my-1'>
                <Link to={`/products/brand/${id}`} style={{textDecoration:"none"}}>
                    <Card.Img style={{ width: '100%',height:"150px"}} src={img}></Card.Img>
                </Link>
            </Card>
        </Col>
    )
}

export default BrandCard
