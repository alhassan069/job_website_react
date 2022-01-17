import {
  ADMIN_LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

const init = {
  isAuth: false,
  error: false,
  isAdmin: false,
};

export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, error: false };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, isAuth: true, isAdmin: true };
    case LOGIN_ERROR:
      return { ...state, error: true };
    case LOGOUT:
      return { ...state, isAuth: false, isAdmin: false };
    default:
      return state;
  }
};
