import UseDeleteData from "../../Hooks/UseDeleteData"
import { UseInsertData } from "../../Hooks/UseInsertData"
import  { UseGetDataToken } from "../../Hooks/UseGetData"
import * as Actions from "../Type"

export const AddToWishList = (prodID) => async (dispatch) => {

    try{
        const response =  await UseInsertData(`/api/v1/wishlist`,prodID)
        dispatch (
            {
                type:Actions.ADD_TO_WISHLIST,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.ADD_TO_WISHLIST,
                payload: e.response ,
            }
        )
    }
}

export const RemoveToWishList = (prodID) => async (dispatch) => {

    try{
        const response =  await UseDeleteData(`/api/v1/wishlist/${prodID}`)
        dispatch (
            {
                type:Actions.REMOVE_FROM_WISHLIST,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.REMOVE_FROM_WISHLIST,
                payload: e.response ,
            }
        )
    }
}
export const getProductWishList = () => async (dispatch) => {

    try{
        const response =  await UseGetDataToken(`/api/v1/wishlist`)
        dispatch (
            {
                type:Actions.USER_WISHLIST,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.USER_WISHLIST,
                payload: e.response ,
            }
        )
    }
}
