import React from 'react'
import { Col, Row } from 'react-bootstrap'
import EditAddressHook from '../CustomHooks/User/EditAddress-Hook'
import { useParams } from 'react-router'
import { ToastContainer } from 'react-toastify'

export const UserEditAdress = () => {
    const {id}  = useParams()
    const   [handelEdit, alias, details, phonenumber, onChangeName, onChangeDetails, onChangeNumber,resAddress]
    = EditAddressHook(id)
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">تعديل العنوان </div>
                <Col sm="8">
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                        value={alias}
                        onChange={onChangeName}
                    />
                    <textarea
                        
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                        value={details}
                        onChange={onChangeDetails}
                    />
                    <input 
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                        value={phonenumber}
                        onChange={onChangeNumber}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelEdit}  className="btn-save d-inline mt-2 ">حفظ تعديل العنوان</button>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}
