import UseDeleteData from "../../Hooks/UseDeleteData"
import { UseGetDataToken } from "../../Hooks/UseGetData"
import { UseInsertData } from "../../Hooks/UseInsertData"
import { UseUpdateData } from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"


export const AddCoupon = (body) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/api/v1/coupons`,body)
        dispatch (
            {
                type:Actions.ADD_COUPON,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.ADD_COUPON,
                payload: e.response ,
            }
        )
    }

}
export const getAllCoupons = () => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/api/v1/coupons`)
        dispatch (
            {
                type:Actions.GET_ALL_COUPONS,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ALL_COUPONS,
                payload: e.response ,
            }
        )
    }

}
export const DeleteCoupon = (id) => async (dispatch) => {
    try{
        const response =  await UseDeleteData(`/api/v1/coupons/${id}`)
        dispatch (
            {
                type:Actions.DELETE_COUPON,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.DELETE_COUPON,
                payload: e.response ,
            }
        )
    }

}

export const getOneCoupon = (id) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/api/v1/coupons/${id}`)
        dispatch (
            {
                type:Actions.GET_ONE_COUPON,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ONE_COUPON,
                payload: e.response ,
            }
        )
    }

}

export const EditCoupon = (Newdata) => async (dispatch) => {
    try{
        const response =  await UseUpdateData(`/api/v1/coupons/${id}`,Newdata)
        dispatch (
            {
                type:Actions.EDIT_COUPON,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.EDIT_COUPON,
                payload: e.response ,
            }
        )
    }

}