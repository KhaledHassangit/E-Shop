import * as Actions from "../Type";

const initialState = {
    Brand:[],
    OneBrand:[],
    loading:true,
}

const BrandReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case Actions.GET_ALL_BRAND:
            return{
                ...state,
                Brand:action.payload,
                loading:false,
            }
        case Actions.GET_ERROR :
            return{
                Brand:action.payload,
                loading:false,
            }
        case Actions.CREATE_BRAND:
            return {
                loading:true ,
                Brand:action.payload
            }
        case Actions.GET_ONE_BRAND:
            return {
                loading:true ,
                OneBrand:action.payload
            }
            default: 
            return state;
    }
}

export default BrandReducer;