import { UseInsertData } from "../../Hooks/UseInsertData"
import { UseUpdateData } from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"


export const CreateNewUser = (data) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/api/v1/auth/signup`,data)
        dispatch (
            {
                type:Actions.CREATE_NEW_USER,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.CREATE_NEW_USER,
                payload: e.response ,
            }
        )
    }

}
export const LoginUser = (data) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/api/v1/auth/login`,data)
        dispatch (
            {
                type:Actions.LOGIN_USER,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.LOGIN_USER,
                payload: e.response ,
            }
        )
    }

}

export const ForgetPassword = (data) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/api/v1/auth/forgotPasswords`,data)
        dispatch (
            {
                type:Actions.FORGET_PASSWORD,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.FORGET_PASSWORD,
                payload: e.response ,
            }
        )
    }
}

export const VerifyPassword = (code) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/api/v1/auth/verifyResetCode`,code)
        dispatch (
            {
                type:Actions.VERIFY_PASSWORD,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.VERIFY_PASSWORD,
                payload: e.response ,
            }
        )
    }

}
export const ResetPassword = (data) => async (dispatch) => {
    try{
        const response =  await UseUpdateData(`/api/v1/auth/resetPassword`,data)
        dispatch (
            {
                type:Actions.RESET_PASSWORD,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.RESET_PASSWORD,
                payload: e.response ,
            }
        )
    }


}
export const UpdateUserData = (data) => async (dispatch) => {
    try{
        const response =  await UseUpdateData(`/api/v1/users/updateMe`,data)
        dispatch (
            {
                type:Actions.UPDATE_USER_DATA,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.UPDATE_USER_DATA,
                payload: e.response ,
            }
        )
    }


}
export const UpdateUserPassword= (data) => async (dispatch) => {
    try{
        const response =  await UseUpdateData(`/api/v1/users/updateMe`,data)
        dispatch (
            {
                type:Actions.UPDATE_USER_PASSWORD,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.UPDATE_USER_PASSWORD,
                payload: e.response ,
            }
        )
    }

}
