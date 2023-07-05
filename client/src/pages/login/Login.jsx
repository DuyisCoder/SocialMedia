/* eslint-disable no-unused-vars */
import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext"
import {CircularProgress} from '@material-ui/core'
export default function Login() {
  const emailRef =useRef();
  const passwordRef =useRef();
  const {user,isFetching,error,dispatch} = useContext(AuthContext)


  const handleClick = (e) =>{
    e.preventDefault()
    console.log(emailRef.current.value);
    loginCall({
      email:emailRef.current.value,
      password:passwordRef.current.value
    },dispatch);
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input 
              placeholder="Email" 
              type="email" 
              className="loginInput" 
              ref={emailRef} 
              required
            />
            <input 
              placeholder="Password"
              type="password" 
              className="loginInput" 
              ref={passwordRef} 
              required 
              minLength="6"
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress  color="white" size="20px"/> :"Log In"}
              </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? <CircularProgress  color="white" size="20px" /> :"Create a New Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}