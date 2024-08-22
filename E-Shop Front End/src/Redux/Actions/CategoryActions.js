import * as Actions from "../Type"
import UseGetData from "../../Hooks/UseGetData";
import { UseInsertData, UseInsertDataWithImage } from "../../Hooks/UseInsertData";

const getAllCategory = (limit) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Limit is Number Of Categories Showed in One Page 
        const response =  await UseGetData(`/api/v1/categories?limit=${limit}`)
        // console.log(response)
        dispatch (
            {
                type:Actions.GET_ALL_CATEGORY,
                payload:response,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.GET_ERROR,
            payload:"Error" + e ,
        })
    }
}

export const getAllCategoryPage = (pageN) => async (dispatch) => {
    try{
        const response =  await UseGetData(`/api/v1/categories?limit=18&page=${pageN}`)
        dispatch (
            {
                type:Actions.GET_ALL_CATEGORY,
                payload:response,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.GET_ERROR,
            payload:"Error" + e ,
        })
    }

}
export const CreateCategory = (formData) => async (dispatch) => {
    try{
        const response =  await UseInsertDataWithImage(`/api/v1/categories`,formData)
        dispatch (
            {
                type:Actions.CREATE_CATEGORY,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch({
            type:Actions.GET_ERROR,
            payload:"Error" + e ,
        })
    }

}


export const getOneCategory = (id) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Limit is Number Of Categories Showed in One Page 
        const response =  await UseGetData(`/api/v1/categories/${id}`)
        // console.log(response)
        dispatch (
            {
                type:Actions.GET_ONE_CATEGORY,
                payload:response,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.GET_ERROR,
            payload:"Error" + e ,
        })
    }
}

export default getAllCategory;