import * as Actions from "../Type";

const initialState = {
    addtocart:[],
    getallproductscart:[],
    clearcart:[],
    deleteitem:[],
    updateitem:[],
    applycoupon:[],
}

const CartReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case Actions.ADD_TO_CART:
            return{
                ...state,
                addtocart:action.payload,
            }
        case Actions.GET_ALL_PRODUCTS_CART:
            return{
                ...state,
                getallproductscart:action.payload,
            }
        case Actions.DELETE_ALL_PRODUCTS_CART:
            return{
                ...state,
                clearcart:action.payload,
            }
        case Actions.DELETE_ONE_PRODUCT_CART:
            return{
                ...state,
                deleteitem:action.payload,
            }
        case Actions.UPDATE_ONE_PRODUCT_CART:
            return{
                ...state,
                updateitem:action.payload,
            }
        case Actions.APPLY_COUPON_TO_CART:
            return{
                ...state,
                applycoupon:action.payload,
            }
        
            default: 
            return state;
    }
}

export default CartReducer;