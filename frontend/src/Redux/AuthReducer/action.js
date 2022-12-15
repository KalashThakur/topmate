import axios from "axios";
import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./actionTypes";

export const getLoginRequest = () => ({
    type: GET_LOGIN_REQUEST
})

export const getLoginSuccess = (payload) => ({
    type: GET_LOGIN_SUCCESS,
    payload
})

export const getLoginError = () => ({
    type: GET_LOGIN_ERROR
});

export const userlogin = (payload) => dispatch => {
    dispatch(getLoginRequest());
   return axios.post("http://localhost:8080/user/login", payload)
    .then((res) => dispatch(getLoginSuccess(res.data)))
    .catch((e) => dispatch(getLoginError(e)))
  }
