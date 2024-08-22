import * as Actions from "../Type"
import { UseInsertData } from "../../Hooks/UseInsertData"
import { UseGetDataToken } from "../../Hooks/UseGetData"


export const CreateOrderCash = (id,body) => async (dispatch) => {
    
    try{
        const response =  await UseInsertData(`/api/v1/orders/${id}`,body)
        dispatch (
            {
                type:Actions.CREATE_CASH_ORDER,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.CREATE_CASH_ORDER,
                payload: e.response ,
            }
        )
    }
}

export const CreateOrderCard = (id,body) => async (dispatch) => {
    
    try{
        const response =  await UseGetDataToken(`/api/v1/orders/checkout-session/${id}`,body)
        dispatch (
            {
                type:Actions.CREATE_CARD_ORDER,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.CREATE_CARD_ORDER,
                payload: e.response ,
            }
        )
    }
}