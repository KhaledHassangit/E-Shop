import { UseGetDataToken } from "../../Hooks/UseGetData"
import { UseUpdateData } from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"



export const GetAllUserOrders = (limit,pageN) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/api/v1/orders?limit=${limit}&page=${pageN}`)
        dispatch (
            {
                type:Actions.GET_USER_ORDERES,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_USER_ORDERES,
                payload: e.response ,
            }
        )
    }
}


export const GetOneOrder = (id) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/api/v1/orders/${id}`)
        dispatch (
            {
                type:Actions.GET_ONE_ORDER,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ONE_ORDER,
                payload: e.response ,
            }
        )
    }
}


export const UpdateOrderPay = (id) => async (dispatch) => {
    try{
        const response =  await UseUpdateData(`/api/v1/orders/${id}/pay`)
        dispatch (
            {
                type:Actions.UPDAE_ORDER_PAY,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.UPDAE_ORDER_PAY,
                payload: e.response ,
            }
        )
    }
}
export const UpdateOrderDeliver = (id) => async (dispatch) => {
    try{
        const response =  await UseUpdateData(`/api/v1/orders/${id}/deliver`)
        dispatch (
            {
                type:Actions.UPDAE_ORDER_DELIVER,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.UPDAE_ORDER_DELIVER,
                payload: e.response ,
            }
        )
    }
}