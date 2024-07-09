import {  GET_ERROR, CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_ONE_PRODUCT, GET_SMILAR_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, PRODUCTS_BY_CATEGORY, PRODUCTS_BY_BRAND } from "../Type";

const initialState = {
    product:[],
    allproducts:[],
    oneproduct:[],
    smilarProduct:[],
    DeleteProduct:[],
    UpdatedProduct:[],
    productsbycat:[],
    productsbybrand:[],
    loading:true,
}

const ProductReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case CREATE_PRODUCT:
            return {
                loading:true,
                product:action.payload
            }
            case GET_ALL_PRODUCTS:
                return{
                    ...state,
                    allproducts:action.payload,
                    loading:false,
                }
            case GET_ONE_PRODUCT:
                return{
                    oneproduct:action.payload,
                    loading:false,
                }
            case GET_SMILAR_PRODUCT:
                return{
                    ...state,
                    smilarProduct:action.payload,
                    loading:false,
                }
            case DELETE_PRODUCT:
                return{
                    ...state,
                    DeleteProduct:action.payload,
                    loading:false,
                }
            case UPDATE_PRODUCT:
                return{
                    ...state,
                    UpdatedProduct:action.payload,
                    loading:false,
                }
            case PRODUCTS_BY_CATEGORY:
                return{
                    ...state,
                    productsbycat:action.payload,
                    loading:false,
                }
            case PRODUCTS_BY_BRAND:
                return{
                    ...state,
                    productsbybrand:action.payload,
                    loading:false,
                }
            case GET_ERROR :
            return{
                product:action.payload,
                loading:false,
            }
        
            default: 
            return state;
    }
}

export default ProductReducer;