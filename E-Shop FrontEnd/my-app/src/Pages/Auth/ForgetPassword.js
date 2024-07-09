import React from 'react'
import {Spinner} from "react-bootstrap"
import { ToastContainer } from 'react-toastify'
import ForgetPasswordHook from '../../Components/CustomHooks/Auth/ForgetPassword-Hook'


const ForgetPassword = () => {

    const [onChangeEmail,onSubmit,email,loading,isPress] = ForgetPasswordHook()

return (
    <div style={{minHeight:"650px"}} className='d-flex justify-content-center mt-5'>
        <div class="login-container ">
        <div class="login-header">
            <div> نسيت كلمة السر</div>
        </div> 
        <input value={email} onChange={onChangeEmail} type="text" class="login-input" placeholder="البريد الالكتروني" id="username"/>
        <button onClick={onSubmit} class="login-button" id="login-button">ارسال الكود</button>
        
        {
            isPress === true ? (loading === true ?  (<Spinner animation="border" variant="info" /> ):null):null
        }
        </div>
        <ToastContainer/>

    </div>
    
    )
}

export default ForgetPassword
