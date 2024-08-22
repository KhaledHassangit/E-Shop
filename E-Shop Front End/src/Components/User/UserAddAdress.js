import React from 'react'
import { Col, Row } from 'react-bootstrap'
import UserAddAdressHook from '../CustomHooks/User/UserAddAdress-Hook'
import { ToastContainer } from 'react-toastify'

export const UserAddAdress = () => {
    const [onChangeName,onChangeDetails,onChangeNumber,alias,details,phonenumber,onSubmit] = UserAddAdressHook()
    return (
        <div>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-2">اضافة عنوان جديد</div>
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
                <button onClick={onSubmit} className="btn-save d-inline mt-2 ">اضافة عنوان</button>
            </Col>
        </Row>
        <ToastContainer/>
    </div>
    )
}
