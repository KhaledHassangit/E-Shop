import React from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import { AddCategoryHook } from '../CustomHooks/Category/AddCategory-Hook'

const AdminAddCategory = () => {

    const [img,name,Loading,IsPress,handleSave,onImageChange,onChangeName] = AddCategoryHook()

    return (
        <div>
            <Row className='justify-content-start'>
                <div className='admin-content-text pb-4'>أضف تصنيف جديد</div>
                <Col sm="8">
                    <div className='text-form pb-2'>صورة الصنف</div>
                    <div>
                        <label for="upload-photo">
                        <img alt='' src={img} style={{width:"140px",height:"120px",cursor:"pointer"}}/>
                        </label>
                        <input type='file' id='upload-photo' name='photo' onChange={onImageChange}/>
                    </div>
                    <input onChange={onChangeName} value={name} type='text' className='input-form mt-3 px-3 d-block text-center' placeholder="أسم التصنيف"/>

                </Col>
                <Col sm="8" className='d-flex justify-content-end'>
                    <button onClick={handleSave} className='btn-save mt-2 d-inline'>حفظ التعديلات</button>
                </Col>
            </Row>
            {
                IsPress ? Loading ?(<Spinner animation="border" variant="primary" />)
                :null 
                :null
            }
        <ToastContainer  />

        </div>
    )
}

export default AdminAddCategory
