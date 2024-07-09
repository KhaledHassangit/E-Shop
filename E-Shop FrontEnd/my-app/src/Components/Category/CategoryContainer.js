import React from 'react'
import {Container,Row, Spinner} from "react-bootstrap"
import SectionTitle from '../Utilities/SectionTitle'
import CategoryCard from './CategoryCard'

const CategoryContainer = ({data,loading}) => {

    const Colors = ["#FFD3E8","#F4DBA5","#55CDFD","#0034FF","#FF6262"]



    return (
        <Container style={{minHeight:"630px"}} > 
        <SectionTitle title={"كل التصـنـيفات"}  />
        <Row className='d-flex  my-2 justify-content-between'>
            {
                loading===false ? (
                    data ? 
                    data.map((item,index) => { 
                        return (
                        <CategoryCard key={index} id={item._id} title={item.name} background={Colors[Math.floor(Math.random() * 5 + 1)]} img={item.image}/> 
                        )
                    })
                    :<Spinner animation="border" variant="info" />

                ):<Spinner animation="border" variant="info" />
            }
            </Row>
        </Container>
    )
}

export default CategoryContainer
