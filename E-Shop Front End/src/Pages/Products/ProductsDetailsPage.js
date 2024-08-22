import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductsDetails from '../../Components/Products/ProductsDetails'
import RateContainer from '../../Components/Rate/RateContainer'
import ProductsContainer from '../../Components/Products/ProductsContainer'
import { useParams } from 'react-router'
import ProductDetailsHook from '../../Components/CustomHooks/Products/ProductDetails-Hook'

const ProductsDetailsPage = () => {
    const {id} = useParams()
    const[item,images,cat,brand,prod]= ProductDetailsHook(id)
    try{
        if(prod)
            var items= prod.slice(0,4)
    
        if(item)
        {
            var RateAverage = item.ratingsAverage;
            var RateQuantity = item.ratingsQuantity;
        }
    }catch(e){}
    

    return (
        <div style={{minHeight:"630px"}}>
            <CategoryHeader/>
            <Container>
                <ProductsDetails id={id}/>
                <RateContainer RateAverage={RateAverage} RateQuantity={RateQuantity} />
                <ProductsContainer products={items} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductsDetailsPage;
