import UseDeleteData from "../../Hooks/UseDeleteData"
import { UseGetDataToken } from "../../Hooks/UseGetData"
import { UseInsertData } from "../../Hooks/UseInsertData"
import { UseUpdateData } from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"

export const CreateReview = (prodID,body) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/api/v1/products/${prodID}/reviews`,body)
        dispatch (
            {
                type:Actions.CREATE_REVIEW,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.CREATE_REVIEW,
                payload: e.response ,
            }
        )
    }
}

export const getAllReviews = (prodID,pageN,limit) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/api/v1/products/${prodID}/reviews?page=${pageN}&limit=${limit}`)
        dispatch (
            {
                type:Actions.GET_ALL_REVIEWS,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ALL_REVIEWS,
                payload: e.response ,
            }
        )
    }
}
export const DelteReview = (prodID) => async (dispatch) => {
    try{
        const response =  await UseDeleteData(`/api/v1/reviews/${prodID}`)
        dispatch (
            {
                type:Actions.DELETE_REVIEW,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.DELETE_REVIEW,
                payload: e.response ,
            }
        )
    }
}
export const EditReview = (prodID,body) => async (dispatch) => {

    try{
        const response =  await UseUpdateData(`/api/v1/reviews/${prodID}`,body)
        dispatch (
            {
                type:Actions.EDIT_REVIEW,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.EDIT_REVIEW,
                payload: e.response ,
            }
        )
    }
}