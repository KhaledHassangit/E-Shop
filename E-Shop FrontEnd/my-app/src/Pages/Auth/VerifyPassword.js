import React from 'react'
import {Spinner} from "react-bootstrap"
import { ToastContainer } from 'react-toastify'
import VerifyPasswordHook from '../../Components/CustomHooks/Auth/VerifyPassword-Hook'


const VerifyPassword = () => {

    const [onChangeCode,onSubmit,code,loading]  = VerifyPasswordHook()

return (
    <div style={{minHeight:"650px"}} className='d-flex justify-content-center mt-5'>
        <div class="login-container ">
        <div class="login-header">
            <div>أدخل الكود المردسل </div>
        </div> 
        <input value={code} onChange={onChangeCode} type="text" class="login-input" placeholder="" id="username"/>
        <button onClick={onSubmit} class="login-button" id="login-button">تأكيد</button>
        
        {
            loading === false ?  (<Spinner animation="border" variant="info" /> )
            :null
        }
        </div>
        <ToastContainer/>

    </div>
    
    )
}

export default VerifyPassword
