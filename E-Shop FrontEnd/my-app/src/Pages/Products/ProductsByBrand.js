import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductsContainer from '../../Components/Products/ProductsContainer';
import Pagenation from '../../Components/Utilities/Pagenation';
import { useParams } from 'react-router';
import ProductsByBrandHook from '../../Components/CustomHooks/Products/ProductsByBrand-Hook';


const ProductsByBrand = () => {
    const {id} = useParams()
    const [allitems,PagenationCount,onPress,loading] = ProductsByBrandHook(id)
    if(PagenationCount)
        var pageCount = PagenationCount
        else  pageCount = 0;
        
    return (
        <div style={{minHeight:"630px"}}>
            <Container>
            <Row className='d-flex flex-row'>
                <Col sm="12" >
                    <ProductsContainer   products={allitems} loading={loading} title="" btntitle=""/>
                    </Col>
            </Row>
                {
                    pageCount > 1 ? (<Pagenation pageCount={pageCount} onPress={onPress} />)
                    :null
                }
            </Container>
            
        </div>
    )
}

export default ProductsByBrand
