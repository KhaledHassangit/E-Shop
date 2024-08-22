import React from 'react'
import {Spinner} from "react-bootstrap"
import { ToastContainer } from 'react-toastify'
import ResetPasswordHook from '../../Components/CustomHooks/Auth/ResetPassword-Hook'


const ResetPassword = () => {

    const [password,confirmpassword,
            onChangePassword,onChangeconfirmPassword,
            onSubmit,loading] = ResetPasswordHook()

return (
    <div style={{minHeight:"650px"}} className='d-flex justify-content-center mt-5'>
        <div class="login-container ">
        <div class="login-header">
            <div>أدخل كلمة السر الجديدة  </div>
        </div> 
        <input value={password} onChange={onChangePassword} type="password" class="login-input" placeholder="كلمة السر الجديدة" />
        <input value={confirmpassword} onChange={onChangeconfirmPassword} type="password" class="login-input" placeholder="تأكيد كلمة السر الجديدة" />
        <button onClick={onSubmit} class="login-button" id="login-button">حفظ</button>
        
        {
            loading === false ?  (<Spinner animation="border" variant="info" /> )
            :null
        }
        </div>
        <ToastContainer/>

    </div>
    
    )
}

export default ResetPassword
