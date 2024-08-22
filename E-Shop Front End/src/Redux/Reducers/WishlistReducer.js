import * as Actions from "../Type";

const initialState = {
    wishlist:[],
    removewishlist:[],
    userwishlist:[],
}

const WishListReducer = (state= initialState,action) => {

    switch(action.type)
    {
        case Actions.ADD_TO_WISHLIST:
            return{
                ...state,
                wishlist:action.payload,
            }
        case Actions.REMOVE_FROM_WISHLIST:
            return{
                ...state,
                removewishlist:action.payload,
            }
        case Actions.USER_WISHLIST:
            return{
                ...state,
                userwishlist:action.payload,
            }
            default: 
            return state;
    }
}

export default WishListReducer;