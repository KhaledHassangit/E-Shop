import * as Actions from "../Type";

const initialState = {
    userorders:[],
    oneorder:[],
    updatepay:[],
    updatedeliver:[],
}

const OrdersReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case Actions.GET_USER_ORDERES:
            return{
                ...state,
                userorders:action.payload,
            }
        case Actions.GET_ONE_ORDER:
            return{
                ...state,
                oneorder:action.payload,
            }
        case Actions.UPDAE_ORDER_PAY:
            return{
                ...state,
                updatepay:action.payload,
            }
        case Actions.UPDAE_ORDER_DELIVER:
            return{
                ...state,
                updatedeliver:action.payload,
            }

            default: 
            return state;
    }
}

export default OrdersReducer;