import React from 'react'
import { Link } from 'react-router-dom'
import { RegisterHook } from '../../Components/CustomHooks/Auth/Register-Hook'
import { ToastContainer } from 'react-toastify'

const Register = () => {
    const  [name,email,password,confirmpassword,phone,loading
        ,onChangeName,onChangeEmail,onChangePassword,
        onChangeconfirmPassword,onChangePhone,ValidationValues,onSubmit] = RegisterHook()

return (
    <div>
            <div style={{minHeight:"650px"}} className='d-flex justify-content-center  mt-5'>
                <div class="login-container ">
                <div class="login-header">
                    <div>تسجيل حساب جديد</div>
                </div>
                <input value={name} onChange={onChangeName} type="text" class="login-input" placeholder="اسم المستخدم" id="username1" />
                <input value={email} onChange={onChangeEmail} type="email" class="login-input" placeholder="الايميل" id="username"/>
                <input value={password} onChange={onChangePassword} type="password" class="login-input" placeholder="كلمه السر" id="password1" maxlength="15" minlength="8"/>
                <input value={confirmpassword} onChange={onChangeconfirmPassword} type="password" class="login-input" placeholder="تأكيد كلمه السر" id="password" maxlength="15" minlength="8"/>
                <input value={phone} onChange={onChangePhone} type="phone" class="login-input" placeholder="  رقم الهاتف" id="password2" maxlength="11" minlength="8"/>
                <button onClick={onSubmit} class="login-button" id="login-button">تسجيل الحساب</button>
                <h5 className='mt-3 text-center'>لديك حساب بالفعل ؟
                <Link to="/login" style={{textDecoration:"none"}}>
                <span className='text-danger' style={{cursor:"pointer"}}>أضعط هنا</span>
                </Link>
                </h5>
                </div>
            </div>
        <ToastContainer/>
    </div>
    )
}

export default Register
