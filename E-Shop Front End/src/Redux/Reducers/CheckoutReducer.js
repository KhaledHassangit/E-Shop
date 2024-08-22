import * as Actions from "../Type";

const initialState = {
    cashorder:[],
    visaorder:[],
}

const ChecoutReducer = (state = initialState , action) => {
    switch(action.type)
    {
        case Actions.CREATE_CASH_ORDER:
            return{
                ...state,
                cashorder:action.payload,
            }
        case Actions.CREATE_CARD_ORDER:
            return{
                ...state,
                visaorder:action.payload,
            }
            
            default: 
            return state;
    }
}

export default ChecoutReducer;