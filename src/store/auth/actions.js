import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  ADMIN_LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const logout = (payload) => ({
  type: LOGOUT,
  payload,
});

export const adminLoginSuccess = (payload) => ({
  type: ADMIN_LOGIN_SUCCESS,
  payload,
});
