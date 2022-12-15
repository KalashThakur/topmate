import { reducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({
    // app: reducer,
    auth: authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))