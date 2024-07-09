import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchResult from '../../Components/Utilities/SearchResult'
import { Container,Row,Col } from 'react-bootstrap'
import SideFilter from '../../Components/Utilities/SideFilter'
import Pagenation from "../../Components/Utilities/Pagenation"
import ProductsContainer from "../../Components/Products/ProductsContainer"
import AllProductsHook from '../../Components/CustomHooks/Products/AllProducts-Hook'

const AllProductsPage = () => {
    const[allitems,loading,PagenationCount,onPress,getProduct,results] = AllProductsHook()
    if(PagenationCount)
        var pageCount =PagenationCount

    return (
        <div style={{minHeight:"630px"}}>
            <CategoryHeader/>
            <Container>
            <SearchResult onClick={getProduct}  title={`${results} نتيجة بحث`}/>
            <Row className='d-flex flex-row'>
                <Col sm="2" xs="2" md="2"><SideFilter/></Col>
                <Col sm="10" xs="10" md="10">
                    <ProductsContainer  products={allitems} loading={loading} title="" btntitle=""/>
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

export default AllProductsPage
