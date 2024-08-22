import * as Actions from "../Type";

const initialState = {
    Brand:[],
    AddCoupons:[],
    AllCoupons:[], 
    onecoupon:[], 
    editcoupon:[], 
    loading:true,
}

const CouponsReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case Actions.ADD_COUPON:
            return{
                ...state,
                AddCoupons:action.payload,
            }
        case Actions.GET_ALL_COUPONS:
            return{
                ...state,
                AllCoupons:action.payload,
            }
        case Actions.GET_ONE_COUPON:
            return{
                ...state,
                onecoupon:action.payload,
            }
        case Actions.EDIT_COUPON:
            return{
                ...state,
                editcoupon:action.payload,
            }
            default: 
            return state;
    }
}

export default CouponsReducer;