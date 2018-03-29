import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
// import OpenLoginBox from './reducer_loginbox';
import TripsReducer from './reducer_trip';
import LoginReducer from './reducer_login';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    // state: (state = {}) => state
    // OpenLoginBox,
    trips: TripsReducer,
    login: LoginReducer,
    auth: AuthReducer,
    form: formReducer
});

export default rootReducer;
