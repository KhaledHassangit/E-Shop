import React from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import { AddBrandHook } from '../CustomHooks/Brand/AddBrand-Hook'
import { ToastContainer } from 'react-toastify'

const AdminAddBrand = () => {

    const [img,name,Loading,IsPress,handleSave,onImageChange,onChangeName] = AddBrandHook()
    
    return (
        <div>
            <Row className='justify-content-start'>
                <div className='admin-content-text pb-4'>أضف ماركة جديدة</div>
                <Col sm="8">
                    <div className='text-form pb-2'>صورة الماركه</div>
                    <div>
                        <label for="upload-photo">
                        <img alt='' src={img} style={{width:"140px",height:"120px",cursor:"pointer"}}/>
                        </label>
                        <input type='file' id='upload-photo' name='photo' onChange={onImageChange}/>
                    </div>
                    <input onChange={onChangeName} value={name} type='text' className='input-form mt-3 px-3 d-block text-center' placeholder="أسم الماركة"/>
                </Col>
                <Col sm="8" className='d-flex justify-content-end'>
                    <button onClick={handleSave}  className='btn-save mt-2 d-inline'>حفظ التعديلات</button>
                </Col>
            </Row>
            {
                IsPress ? Loading ?
                (<Spinner animation="border" variant="primary" />)
                :null 
                :null
            }
        <ToastContainer/>
        </div>
    )
}

export default AdminAddBrand
