import { loadData, saveData } from "../../utils/localStorage";
import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    isAuth: loadData("token") ? true : false,
    isError: false,
    token: loadData("token") || "",
};

export const authReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_LOGIN_REQUEST: {
           return {
            ...state,
            isLoading: true,
            isAuth: false,
           }
        }
           case GET_LOGIN_SUCCESS: {
           return {
            ...state,
            isLoading: false,
            isError: false,
            isAuth: true,
            token: saveData("token", action.payload),
           }
        }

           case GET_LOGIN_ERROR:{ 
           return {
            ...state,
            isLoading: false,
            isAuth: false,
            isError: true,
           }
        }
           default:
            return state;
    }
}