import { GET_ALL_CATEGORY, GET_ERROR,CREATE_CATEGORY, GET_ONE_CATEGORY } from "../Type";

const initialState = {
    category:[],
    oneCategory:[],
    loading:true,
}

const CategoryReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case GET_ALL_CATEGORY:
            return{
                ...state,
                category:action.payload,
                loading:false,
            }
        case GET_ERROR :
            return{
                category:action.payload,
                loading:false,
            }
        case CREATE_CATEGORY:
            return {
                loading:true    ,
                category:action.payload
            }
        case GET_ONE_CATEGORY:
                return{
                    oneCategory:action.payload,
                    loading:false,
                }
            default: 
            return state;
    }
}

export default CategoryReducer;