import React from 'react'
import AdminAllProductCard from './AdminAllProductCard'
import { Row, Spinner } from 'react-bootstrap'
const AdminAllProductContainer = ({products,loading}) => {
    return (

        <div> 
            <div className='admin-content-text my-2'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
            {
                loading === false ? products ? products.map((product,index)=>
                <AdminAllProductCard product={product} key={index}/>
                ) : <Spinner animation="border" variant="primary" />

                : <Spinner animation="border" variant="primary" />
            }
            
            </Row>
    </div>
    )
}

export default AdminAllProductContainer
