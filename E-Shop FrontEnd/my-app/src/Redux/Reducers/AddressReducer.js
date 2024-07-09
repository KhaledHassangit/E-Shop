import * as Actions from "../Type";

const initialState = {
    address:[],
    viewaddress:[],
    deleteaddress:[],
    oneaddress:[],
    updateaddress:[],
}

const AddressReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case Actions.ADD_USER_ADDRESS:
            return{
                ...state,
                address:action.payload,
            }
        case Actions.VIEW_ADDRESS:
            return{
                ...state,
                viewaddress:action.payload,
            }
        case Actions.DELETE_ADDRESS:
            return{
                ...state,
                deleteaddress:action.payload,
            }
        case Actions.GET_ONE_ADDRESS:
            return{
                ...state,
                oneaddress:action.payload,
            }
        case Actions.UPDATE_ADDRESS:
            return{
                ...state,
                updateaddress:action.payload,
            }
        default: 
        return state;
    }
}

export default AddressReducer;