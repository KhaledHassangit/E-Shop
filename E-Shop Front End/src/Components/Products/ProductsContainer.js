import React from 'react'
import { Container ,Row, Spinner} from 'react-bootstrap'
import SectionTitle from '../Utilities/SectionTitle'
import ProductCard from './ProductCard'
import ProductContainerHook from '../CustomHooks/Products/ProductContainer-Hook'

const ProductsContainer = ({title,btntitle,pathroute,products,loading}) => {
    const [favproduct] = ProductContainerHook()
    return (
        <Container>
            <SectionTitle title={title} btntitle={btntitle} pathroute={pathroute}/>
            <Row className='d-flex justify-content-lg-start my-2'>
            {
                loading===false ? (
                    products ? 
                    products.map((item,index) => { 
                        return (
                            <ProductCard favproduct={favproduct} key={index} item={item}/>
                        )
                    })
                    :<Spinner animation="border" variant="info" />

                ):<Spinner animation="border" variant="info" />
            }
                
            </Row>
        </Container>
    )
}

export default ProductsContainer
