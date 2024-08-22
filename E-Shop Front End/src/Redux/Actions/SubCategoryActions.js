import UseGetData from "../../Hooks/UseGetData"
import { UseInsertData } from "../../Hooks/UseInsertData"
import * as Actions from "../Type"




export const CreateSubCategory = (data) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/api/v1/subcategories`,data)
        dispatch (
            {
                type:Actions.CREATE_SUB_CATEGORY,
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



// Get All SubCategoris Based on ID
export const getOneSubCategory = (id) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Limit is Number Of Categories Showed in One Page 
        const response =  await UseGetData(`/api/v1/categories/${id}/subcategories`)

        // console.log(response.data)
        dispatch (
            {
                type:Actions.GET_SUB_CATEGORY,
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