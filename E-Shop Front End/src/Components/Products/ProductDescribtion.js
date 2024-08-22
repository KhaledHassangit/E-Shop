import React, { useState } from 'react'
import {Col,Row} from "react-bootstrap"
import { useParams } from 'react-router'
import ProductDetailsHook from '../CustomHooks/Products/ProductDetails-Hook'
import AddtoCartHook from '../CustomHooks/Cart/AddtoCart-Hook'
import { ToastContainer } from 'react-toastify'

const ProductDescribtion = () => {

    const {id} = useParams()

    const [item,images,cat,brand]= ProductDetailsHook(id)

    const [indexColor,SelectColor,AddtoCarthandel] = AddtoCartHook(id,item)

    return (
        <div className='mediascreen'>
        <Row className="mt-2">
            <div className="cat-text">{cat.name}:</div>
        </Row>
        <Row>
            <Col md="8">
            <div className="cat-title d-inline">
                {item.title}
                <div className="cat-rate  mt-2">{item.ratingsAverage}</div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-4">
            <div className="cat-text d-inline">الماركة :</div>
            <div className="barnd-text d-inline mx-1">{brand.name}</div>
            </Col>
        </Row>
        <Row>
            <Col md="8" className="mt-1 d-flex">
                {
                    item.availableColors ? (item.availableColors.map((color,index)=>{
                        return (<div onClick={()=> SelectColor(index,color)} key={index} className='color ms-2 ' 
                        style={{backgroundColor:color ,border: indexColor === index  ? "2px solid #FF9B1B": "none"}}></div>)
                    })
                    ): null
                        
                }
            </Col>
            <div className="cat-text d-inline mt-4">الكمية :{item.quantity}</div>
        </Row>

        <Row className="mt-4">
            <div className="cat-text">المواصفات :</div>
        </Row>
        <Row className="mt-2">
            <Col md="10">
            <div className="product-description d-inline">{item.description}</div>
            </Col>
        </Row>
        <Row className="mt-4">
            <Col md="12">
            {item.priceAfterDiscount >= 1 ? (
                <div className="product-price d-inline px-3 py-3 border"> 
                {item.priceAfterDiscount}<span style={{textDecoration:"line-through"}}>
                {item.price}</span>جنية</div>
            ) :<div className='product-price d-inline px-3 py-3 '><span>{item.price} </span>جنية</div> }
            <div onClick={AddtoCarthandel}  className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
            </Col>
        </Row>
        <ToastContainer/>
        </div>
    )
}

export default ProductDescribtion

