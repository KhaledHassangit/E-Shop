import React from 'react'
import { Container ,Row, Spinner} from 'react-bootstrap'
import BrandCard from '../../Components/Brand/BrandCard'
import SectionTitle from '../../Components/Utilities/SectionTitle'
import AllBrandsHook from '../../Components/CustomHooks/Brand/AllBrands-Hook'
import Pagenation from '../../Components/Utilities/Pagenation'
const AllBrands = () => {
    
    const [Brands,loading,pageCount,getPageNumber] = AllBrandsHook()
    return (
        <div>
            <Container style={{minHeight:"630px"}} className='mb-2 mt-2'>
            <SectionTitle  title={"كل الماركات"}  pathroute={"/allBrands"}/>
            <Row className='d-flex  my-1 justify-content-between'>
            {
                    loading === false ? Brands.data ? Brands.data.map((item,index)=>{
                        return (<BrandCard key={index} img={item.image} />)
                        
                    }): <Spinner animation="border" variant="info" />
                    : <Spinner animation="border" variant="info" />
                }
            </Row>
        </Container>
        <Pagenation pageCount={pageCount} onPress={getPageNumber}/>

        </div>
        
    )
}

export default AllBrands
