import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { adminLoginSuccess, loginError } from "../store/auth/actions";

export const AdminLogin = () => {
  const loginData = useRef({ email: "", password: "" });
  const dispatch = useDispatch();

  const { isAuth, error } = useSelector((state) => ({
    isAuth: state.authReducer.isAuth,
    error: state.authReducer.error,
  }));

  console.log(isAuth);

  if (isAuth) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="inputDiv">
      <h3 className="head3">Admin Login</h3>
      <p className="inputTitle1">Enter Email :</p>
      <input
        placeholder="Enter Email"
        onChange={(e) => (loginData.current.email = e.target.value)}
      ></input>
      <p className="inputTitle1"> Enter Password :</p>
      <input
        placeholder="Enter Password"
        onChange={(e) => (loginData.current.password = e.target.value)}
      ></input>
      <br></br>
      <button
        onClick={() => {
          if (
            loginData.current.email === "admin@gmail.com" &&
            loginData.current.password === "admin@123"
          ) {
            dispatch(adminLoginSuccess(true));
          } else {
            dispatch(loginError(false));
          }
        }}
      >
        Login
      </button>

      {error ? <p>Invalid Login Credentials</p> : null}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      <p>
        <Link to="/login">User Login</Link>
      </p>
    </div>
  );
};
