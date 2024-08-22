import { UseInsertDataWithImage } from "../../Hooks/UseInsertData"
import UseGetData from "../../Hooks/UseGetData"
import * as Actions from "../Type"
import UseDeleteData from "../../Hooks/UseDeleteData"
import {UseUpdateData, UseUpdateDataWithImage} from "../../Hooks/UseUpdateData"



export const CreateProduct= (formData) => async (dispatch) => {
    try{
        const response =  await UseInsertDataWithImage(`/api/v1/products`,formData)
        dispatch (
            {
                type:Actions.CREATE_PRODUCT,
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

export const getAllProducts = (limit) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Limit is Number Of Products Showed in One Page 
        const response =  await UseGetData(`/api/v1/products?limit=${limit}`)
        // console.log(response)
        dispatch (
            {
                type:Actions.GET_ALL_PRODUCTS,
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

// Get One Product By ID 

export const getOneProducts = (id) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Limit is Number Of Products Showed in One Page 
        const response =  await UseGetData(`/api/v1/products/${id}`)
        // console.log(response)
        dispatch (
            {
                type:Actions.GET_ONE_PRODUCT,
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
export const getSmiliarProducts = (id) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // getSmiliarProducts
        const response =  await UseGetData(`/api/v1/products?category=${id}`)
        // console.log(response)
        dispatch (
            {
                type:Actions.GET_SMILAR_PRODUCT,
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
export const DeleteProduct = (id) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Delete Product With ID
        const response =  await UseDeleteData(`/api/v1/products/${id}`)
        // console.log(response)
        dispatch (
            {
                type:Actions.DELETE_PRODUCT,
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

export const getAllProductsPage = (limit,pageN) => async (dispatch) => {
    try{
        const response =  await UseGetData(`/api/v1/products?limit=${limit}&page=${pageN}`)
        dispatch (
            {
                type:Actions.GET_ALL_PRODUCTS,
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

export const UpdateProduct = (id,formData) => async (dispatch) => {
    // UseGetData Hook Takes Url,Params
    try {
        // Update Product With ID
        const response =  await UseUpdateDataWithImage(`/api/v1/products/${id}`,formData)
        // console.log(response)
        dispatch (
            {
                type:Actions.UPDATE_PRODUCT,
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


// Get All Products With Query String
export const getAllProductsSearch = (queryString) => async (dispatch) => {
    try{
        const response =  await UseGetData(`/api/v1/products?${queryString}`)
        dispatch (
            {
                type:Actions.GET_ALL_PRODUCTS,
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

export const getProductsByCategory = (limit,pageN,catID) => async (dispatch) => {
    try{
        const response =  await  UseGetData(`/api/v1/products?limit=${limit}&page=${pageN}&category=${catID}`)
        dispatch (
            {
                type:Actions.PRODUCTS_BY_CATEGORY,
                payload:response,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.PRODUCTS_BY_CATEGORY,
            payload: e.response ,
        })
    }

}

export const getProductsByBrand = (limit,pageN,brandID) => async (dispatch) => {
    try{
        const response =  await  UseGetData(`/api/v1/products?limit=${limit}&page=${pageN}&brand=${brandID}`)
        dispatch (
            {
                type:Actions.PRODUCTS_BY_BRAND,
                payload:response,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.PRODUCTS_BY_BRAND,
            payload: e.response ,
        })
    }

}

