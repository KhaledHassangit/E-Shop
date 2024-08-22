import * as Actions from "../Type";

const initialState = {
    createUser:[],
    loginUser:[],
    forgetPassword:[],
    verifyPassword:[],
    resetPassword:[],
    usernewdata:[],
    usernewpassword:[],
    loading:true,
}

const AuthenticationReducer = (state= initialState,action) => {
    switch(action.type)
    {
        case Actions.CREATE_NEW_USER:
            return{
                ...state,
                createUser:action.payload,
                loading:false,
            }
        case Actions.LOGIN_USER:
            return{
                ...state,
                loginUser:action.payload,
                loading:false,
            }
        case Actions.FORGET_PASSWORD:
            return{
                ...state,
                forgetPassword:action.payload,
            }
        case Actions.VERIFY_PASSWORD:
            return{
                ...state,
                verifyPassword:action.payload,
            }
        case Actions.RESET_PASSWORD:
            return{
                ...state,
                resetPassword:action.payload,
            }
        case Actions.UPDATE_USER_DATA:
            return{
                ...state,
                usernewdata:action.payload,
            }
        case Actions.UPDATE_USER_PASSWORD:
            return{
                ...state,
                usernewpassword:action.payload,
            }
            default: 
            return state;
    }
}

export default AuthenticationReducer;