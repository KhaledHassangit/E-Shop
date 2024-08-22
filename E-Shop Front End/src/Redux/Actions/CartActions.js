import UseDeleteData from "../../Hooks/UseDeleteData"
import  { UseGetDataToken } from "../../Hooks/UseGetData"
import { UseInsertData } from "../../Hooks/UseInsertData"
import { UseUpdateData } from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"


export const AddToCart = (body) => async (dispatch) => {

    try{
        const response =  await UseInsertData(`/api/v1/cart`,body)
        dispatch (
            {
                type:Actions.ADD_TO_CART,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.ADD_TO_CART,
                payload: e.response ,
            }
        )
    }

}


export const GetAllProductsCart = () => async (dispatch) => {

    try{
        const response =  await UseGetDataToken(`/api/v1/cart`)
        dispatch (
            {
                type:Actions.GET_ALL_PRODUCTS_CART,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ALL_PRODUCTS_CART,
                payload: e.response ,
            }
        )
    }

}

export const ClearCart = () => async (dispatch) => {

    try{
        const response =  await UseDeleteData(`/api/v1/cart`)
        dispatch (
            {
                type:Actions.DELETE_ALL_PRODUCTS_CART,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.DELETE_ALL_PRODUCTS_CART,
                payload: e.response ,
            }
        )
    }

}

export const DeleteOneItem = (id) => async (dispatch) => {

    try{
        const response =  await UseDeleteData(`/api/v1/cart/${id}`)
        dispatch (
            {
                type:Actions.DELETE_ONE_PRODUCT_CART,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.DELETE_ONE_PRODUCT_CART,
                payload: e.response ,
            }
        )
    }

}
export const UpdateCartItem = (id,count) => async (dispatch) => {

    try{
        const response =  await UseUpdateData(`/api/v1/cart/${id}`,count)
        dispatch (
            {
                type:Actions.UPDATE_ONE_PRODUCT_CART,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.UPDATE_ONE_PRODUCT_CART,
                payload: e.response ,
            }
        )
    }

}

export const ApplyCoupon = (body) => async (dispatch) => {

    try{
        const response =  await UseUpdateData(`/api/v1/cart/applyCoupon`,body)
        dispatch (
            {
                type:Actions.APPLY_COUPON_TO_CART,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.APPLY_COUPON_TO_CART,
                payload: e.response ,
            }
        )
    }

}