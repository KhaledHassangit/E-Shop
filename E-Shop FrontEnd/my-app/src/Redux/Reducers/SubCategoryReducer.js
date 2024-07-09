import {  GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from "../Type";

const initialState = {
    subcategory:[],
    loading:true,
}

const SubCategoryReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case CREATE_SUB_CATEGORY:
            return {
                loading:true,
                subcategory:action.payload
            }

        case GET_SUB_CATEGORY :
            return {
                loading:true,
                subcategory:action.payload
            }
            
            case GET_ERROR :
            return{
                subcategory:action.payload,
                loading:false,
            }
        
            default: 
            return state;
    }
}

export default SubCategoryReducer;