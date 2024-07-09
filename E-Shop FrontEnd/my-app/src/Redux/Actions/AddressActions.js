import { UseInsertData } from "../../Hooks/UseInsertData"
import { UseGetDataToken } from "../../Hooks/UseGetData"
import UseDeleteData  from "../../Hooks/UseDeleteData"
import {UseUpdateData}  from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"

export const AddAddress = (body) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/api/v1/addresses`,body)
        dispatch (
            {
                type:Actions.ADD_USER_ADDRESS,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.ADD_USER_ADDRESS,
                payload: e.response ,
            }
        )
    }
}
export const getAllAddresses = () => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/api/v1/addresses`)
        dispatch (
            {
                type:Actions.VIEW_ADDRESS,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.VIEW_ADDRESS,
                payload: e.response ,
            }
        )
    }
}

export const DeleteAddress = (id) => async (dispatch) => {
    try{
        const response =  await UseDeleteData(`/api/v1/addresses/${id}`)
        dispatch (
            {
                type:Actions.DELETE_ADDRESS,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.DELETE_ADDRESS,
                payload: e.response ,
            }
        )
    }
}

export const GetOneAdress = (id) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/api/v1/addresses/${id}`)
        dispatch (
            {
                type:Actions.GET_ONE_ADDRESS,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ONE_ADDRESS,
                payload: e.response ,
            }
        )
    }
}
 
export const EditAddress = (id, body) => async (dispatch) => {
    try{
        const response =  await UseUpdateData(`/api/v1/addresses/${id}`, body)
        dispatch (
            {
                type:Actions.UPDATE_ADDRESS,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.UPDATE_ADDRESS,
                payload: e.response ,
            }
        )
    }
}

