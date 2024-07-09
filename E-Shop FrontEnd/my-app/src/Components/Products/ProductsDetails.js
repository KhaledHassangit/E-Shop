import React from 'react'
import {Row,Col} from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductDescribtion from './ProductDescribtion'
const ProductsDetails = ({id}) => {
    return (
        <div>
            <Row className='py-3 '>

                <Col lg="4">
                    <ProductGallery id={id}/>
                </Col>


                <Col lg="8" >
                    <ProductDescribtion id={id}/>
                </Col>

            </Row>
        </div>
    )
}

export default ProductsDetails
