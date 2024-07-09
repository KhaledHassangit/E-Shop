import React from 'react'
import {Col} from "react-bootstrap"
import { Link } from 'react-router-dom'

const CategoryCard = ({background,img,title,id}) => {

    return (
        
        <Col  
        xs="6" 
        sm="6" 
        md="4" 
        lg="2" className='my-4 d-flex justify-content-around '>
            
        <div className='allCard '>
            <div className='categoty-card' style={{backgroundColor:`${background}`}}></div>
            <Link to={`/products/category/${id}`} style={{textDecoration:"none"}}>
                <img  className='categoty-card-img text-center' src={img} alt=""></img>
            </Link>
            <p className='categoty-card-text'>{title}</p>
        </div>
        </Col>
        
    )
}

export default CategoryCard
