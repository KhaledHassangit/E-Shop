import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AddSubCategoryHook from '../CustomHooks/SubCategory/AddSubCategory-Hook'
export const AdminSubCategory = () => {

        const [id,name,setName,IsPress,Loading,category,handelChange,handelSave]= AddSubCategoryHook()


    return (
        <div>
        <Row className='justify-content-start'>
            <div className='admin-content-text pb-4'>أضف تصنيف فرعي جديد</div>
            <Col sm="8">
                <input onChange={(e)=> setName(e.target.value)} value={name} type='text' className='input-form mt-3 px-3 d-block text-center' placeholder=" أسم التصنيف الفرعي"/>
            </Col>
            
            <Col sm="8">
                <select 
                        onChange={handelChange}
                        name="category"
                        id="cat"
                        className="select input-form-area mt-1  text-center px-2 w-100">
                        <option  value={id}> أختر التصنيف  الرئيسي</option>
                        {
                            category.data ? category.data.map((item)=>{
                                return (<option key={item._id} value={item._id}>{item.name}</option>)
                            })
                            : <Spinner animation="border" variant="info" />
                        }
                </select>
            </Col>
            <Col sm="8" className='d-flex justify-content-end'>
                <button onClick={handelSave} className='btn-save mt-2 d-inline'>حفظ التعديلات</button>
            </Col>
        </Row>
        {
        IsPress ? Loading ?(<Spinner animation="border" variant="primary" />)
                :null 
                :null}
        <ToastContainer/>
    </div>
    )
}
