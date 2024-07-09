import React from 'react'
import {Container,Row, Spinner} from "react-bootstrap"
import SectionTitle from '../Utilities/SectionTitle'
import CategoryCard from '../Category/CategoryCard'
import { HomeCategoryHook } from '../CustomHooks/Category/HomeCategory-Hook'

const HomeCategory = () => {
    const [category,loading,CategoryColors] = HomeCategoryHook()
    let data=[]
    if(category)
        data= category.data
    else
        data = []
    
    return (
        <Container > 
        <SectionTitle title={"التصـنـيفات"} btntitle={"المزيد"} pathroute={"/allcategory"}/>
        <Row className='my-2 d-flex justify-content-lg-between  '>

            {
                loading===false ? (
                    data ? 
                    data.slice(0,5).map((item,index) => { 
                        return (
                        <CategoryCard  key={index} id={item._id}  title={item.name} background={CategoryColors[index]} img={item.image}/> 
                        )
                    })
                    :<Spinner animation="border" variant="info" />
                ):<Spinner animation="border" variant="info" />
            
            }
        </Row>
        </Container>
    )
}

export default HomeCategory
