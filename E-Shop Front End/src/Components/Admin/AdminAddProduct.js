import React from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import add from "../../images/add.png"
import Multiselect from 'multiselect-react-dropdown';
import MultiImageInput from "react-multiple-image-input"
import {CompactPicker} from 'react-color'
import { ToastContainer } from "react-toastify"
import AddProductHook from '../CustomHooks/Products/AddProduct-Hook';
export const AdminAddProduct = () => {

    const [Loading,images,setImages,ProductName,setProductName,ProductDescribtion,setProductDescribtion,PriceBefore,setPriceBefore,PriceAfter,SetPriceAfter,Quantity,setQuantity,SubCategoryID,setSubCategoryID,onSelectCategory,OnSelect,OnRemove,Options,setOptions,setBrandID,Colors,setColors,saveColor,removeColor,category,subcategory,Brands,products,handelSubmit,ShowColor,setShowColor]
    = AddProductHook()



    return (
        <div>
            <Row className='justify-content-start'>
                <div className='admin-content-text pb-4'>أضف منتج جديد</div>
                <Col sm="8">
                    <div className='text-form pb-2'>صور المنتج</div>
                    <MultiImageInput images={images} setImages={setImages} 
                    theme={"light"} allowCrop={false} max={4} />
                    {/* <img alt='' src={avatar} style={{width:"120px",height:"120px",cursor:"pointer"}}/> */}
                    <input value={ProductName} onChange={(e)=> setProductName(e.target.value)} type='text' className='input-form mt-3 px-3 d-block ' placeholder="أسم المنتج"/>
                    <textarea 
                        value={ProductDescribtion} onChange={(e)=> setProductDescribtion(e.target.value)}className="input-form-area p-2 mt-3" rows="4"cols="50"placeholder="وصف المنتج"/>
                    <input value={PriceBefore} onChange={(e)=> setPriceBefore(e.target.value)} type='text' className='input-form mt-3 px-3 d-block ' placeholder="السعر قبل الخصم"/>
                    <input value={PriceAfter} onChange={(e)=> SetPriceAfter(e.target.value)} type='text' className='input-form mt-3 px-3 d-block ' placeholder=" سعر المنتج"/>
                    <input value={Quantity} onChange={(e)=> setQuantity(e.target.value)} type='text' className='input-form mt-3 px-3 d-block ' placeholder=" الكمية المتاحة "/>

                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3   px-2 w-100"
                        onChange={onSelectCategory}>
                        <option value="0"> التصنيف الرئيسي</option>
                        {
                            category.data ? category.data.map((item)=>{
                                return (<option key={item._id} value={item._id}>{item.name}</option>)
                            })
                            : <Spinner animation="border" variant="info" />
                        }
                    </select>
                    
                    <Multiselect options={Options}
                    onSelect={OnSelect}
                    onRemove={OnRemove}
                    className="mt-2 text-end" 
                    placeholder="التصنيف الفرعي"
                    displayValue="name"style={{ color: "red" }}/>
                        {/* {
                            subcategory.data ? subcategory.data.map((item)=>{
                                return (<option key={item._id} value={item.name}>{item.name}</option>)
                            })
                            : <Spinner animation="border" variant="info" />
                        } */}
                    
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-1   px-2 w-100"
                        onChange={(e)=> setBrandID(e.target.value)}>
                        <option value="0" > الماركة </option>
                        {
                            Brands.data ? Brands.data.map((item,index)=>{
                                return (<option key={index} value={item._id}>{item.name}</option>)
                            })
                            : <Spinner animation="border" variant="info" />
                        }
                        
                    </select>
                </Col>
                <Row className='d-flex flex-column mt-3'>
                    <div>الألوان المتاحة للمنتج</div>
                    <div className='d-flex mt-2'>
                        {
                            Colors.length >=1 ? 
                            Colors.map((color,index)=>{
                                return (<div onClick={()=> removeColor(color)} key={index} className='color ms-2 border mt-1'style={{backgroundColor:color}}></div>)
                            }) :null
                        }
                        <img onClick={()=> setShowColor(!ShowColor)} alt='' src={add} 
                        style={{width:"30px",height:"30px",cursor:"pointer"}}/>
                        {
                            ShowColor === true ? 
                            <CompactPicker onChangeComplete={saveColor}/> 
                            :null
                        }
                    
                    </div>
                </Row>
                
                <Col sm="8" className='d-flex justify-content-end'>
                    <button onClick={handelSubmit}  className='btn-save mt-2 d-inline'>حفظ التعديلات</button>
                </Col>
            </Row>
            {
                Loading ?
                null 
                :(<Spinner animation="border" variant="primary"/>)

                
            }
            <ToastContainer/>
        </div>
    )
}
