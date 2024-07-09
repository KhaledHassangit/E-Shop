import React from 'react'
import { Link } from 'react-router-dom'
import LoginHook from '../../Components/CustomHooks/Auth/Login-Hook'
import {Spinner} from "react-bootstrap"
import { ToastContainer } from 'react-toastify'

const LoginPage = () => {

    const [email,password,loading,onChangeEmail,onChangePassword,onSubmit,isPress] = LoginHook()
    return (
    <div style={{minHeight:"650px"}} className='d-flex justify-content-center mt-5'>
        <div class="login-container ">
        <div class="login-header">
            <div>تسجيل الدخول</div>
        </div> 
        <input value={email} onChange={onChangeEmail} type="text" class="login-input" placeholder="الايميل" id="username"/>
        <input value={password} onChange={onChangePassword} type="password" class="login-input" placeholder="كلمه السر" id="password" maxlength="15" minlength="8"/>
        <button onClick={onSubmit} class="login-button" id="login-button">تسجيل الدخول</button>
        <h5 className='mt-3 text-center'>ليس لديك حساب ؟  
        <Link to="/register" style={{textDecoration:"none"}}>
        <span className='text-danger' style={{cursor:"pointer"}}>أضعط هنا </span>
        </Link>
        </h5>

        <Link to="/User/forget-password" style={{textDecoration:"none"}}>
        <h5 className='mt-5 text-center' style={{cursor:"pointer",color:"#DC3545"}}>هل نسيت كلمة السر   ؟  
        </h5>
        </Link>
        {
            isPress === true ? (loading === true ?  (<Spinner animation="border" variant="info" /> ):null):null
        }
        </div>

        <ToastContainer/>

    </div>
    
    )
}

export default LoginPage
