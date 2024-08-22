import * as Actions from "../Type";

const initialState = {
    post:[],
    reviews:[],
    deletereview:[],
    editreview:[],
    loading:true,
}

const ReviewsReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case Actions.CREATE_REVIEW:
            return{
                ...state,
                post:action.payload,
                loading:false,
            }
        case Actions.GET_ALL_REVIEWS:
            return{
                ...state,
                reviews:action.payload,
                loading:false,
            }
        case Actions.DELETE_REVIEW:
            return{
                ...state,
                deletereview:action.payload,
            }
        case Actions.EDIT_REVIEW:
            return{
                ...state,
                editreview:action.payload,
            }
            default: 
            return state;
    }
}

export default ReviewsReducer;