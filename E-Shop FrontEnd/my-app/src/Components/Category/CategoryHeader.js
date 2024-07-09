import React, { useEffect, useState } from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import { AllCategoryPageHook } from '../CustomHooks/Category/AllCategoryPage-Hook'
import { Link } from 'react-router-dom'

const CategoryHeader = () => {
    const [category,loading,pageCount,getPageNumber] =AllCategoryPageHook()
    const [items, setitems] = useState([])
    useEffect(() => {
        if(category)
            setitems(category.data)
    }, [category])
    return (
        <div className="cat-header">
        <Container>
            <Row>
            <Col className="d-flex justify-content-start py-2 flex-wrap align-items-center ">
                {
                    items ? (items.map((item,index)=>{
                        return  (
                        <Link to={`/products/category/${item._id}`} style={{textDecoration:"none"}}>
                            <div className="cat-text-header" key={index}>{item.name}</div>
                        </Link>)
                    })) :null
                }
                <Link to='/allcategory' style={{textDecoration:"none"}}>
                <div className="cat-text-header">المزيد</div>
                </Link>
            </Col>
            </Row>
        </Container>
        </div>
        )
}

export default CategoryHeader