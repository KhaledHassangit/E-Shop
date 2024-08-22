import * as Actions from "../Type"
import UseGetData from "../../Hooks/UseGetData";
import { UseInsertDataWithImage } from "../../Hooks/UseInsertData";

const getAllBrand = (limit) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Limit is Number Of Brands Showed in One Page 
        const response =  await UseGetData(`/api/v1/brands?limit=${limit}`)
        // console.log(response)
        dispatch (
            {
                type:Actions.GET_ALL_BRAND,
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

export const getAllBrandPage = (pageN) => async (dispatch) => {
    try{
        const response =  await UseGetData(`/api/v1/brands?limit=5&page=${pageN}`)
        dispatch (
            {
                type:Actions.GET_ALL_BRAND,
                // payload:response.data,
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

export const CreateBrand = (formData) => async (dispatch) => {
    try{
        const response =  await UseInsertDataWithImage(`/api/v1/brands`,formData)
        dispatch (
            {
                type:Actions.CREATE_BRAND,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ERROR,
                payload:"Error" + e ,
            }
        )
    }

}


export const getOneBrand = (id) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Limit is Number Of Brands Showed in One Page 
        const response =  await UseGetData(`/api/v1/brands/${id}`)
        // console.log(response)
        dispatch (
            {
                type:Actions.GET_ONE_BRAND,
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
export default getAllBrand;