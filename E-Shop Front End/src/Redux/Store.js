import { legacy_createStore ,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import RootReducer from "./Reducers/RootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState= {}
const Middleware= [thunk]

const MyStore = legacy_createStore
(RootReducer,initialState,composeWithDevTools(applyMiddleware(...Middleware)))

export default MyStore 