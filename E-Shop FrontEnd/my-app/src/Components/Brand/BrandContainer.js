import React from 'react'
import { Container ,Row, Spinner} from 'react-bootstrap'
import SectionTitle from '../Utilities/SectionTitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../CustomHooks/Brand/HomeBrand-Hook'

const BrandContainer = ({title,btntitle}) => {
    const [Brands,loading] = HomeBrandHook()
// Home Page Brands 
    return (
        <Container>
            <SectionTitle title={title} btntitle={btntitle} pathroute={"/allBrands"}/>
            <Row className='d-flex  my-1 justify-content-lg-between'>
                {
                    loading === false ? Brands.data ? Brands.data.slice(0,5).map((item,index)=>{
                        return (<BrandCard id={item._id} key={index} img={item.image} />)
                        
                    }): <Spinner animation="border" variant="info" />
                    : <Spinner animation="border" variant="info" />
                }
            </Row>
        </Container>
    )
}

export default BrandContainer
