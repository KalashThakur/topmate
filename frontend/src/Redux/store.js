import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({
    auth: authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))