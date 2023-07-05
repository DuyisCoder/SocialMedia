import { useRef } from "react";
import "./register.css";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const usernameRef=useRef();
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordAgainRef=useRef();
  const navigate = useNavigate();

  const handleClick = async (e) =>{
      e.preventDefault();
      if(passwordAgainRef.current.value !== passwordRef.current.value){
        passwordAgainRef.current.setCustomValidity("Mật khẩu không khớp")
      }else{
        const user = {
          username:usernameRef.current.value,
          email:emailRef.current.value,
          password:passwordRef.current.value
        }
        try{
          await axios.post("/auth/register",user)
          navigate("/login")
        }catch(err){
          console.log(err);
        }
      }
  }
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
            placeholder="Username" 
            className="loginInput" 
            ref={usernameRef}
            required
            />
            <input 
            placeholder="Email" 
            className="loginInput" 
            ref={emailRef}
            required
            type="email"
            />
            <input 
            placeholder="Password" 
            className="loginInput" 
            ref={passwordRef}
            required
            type="password"
            minLength="6"
            />
            <input 
            placeholder="Password Again" 
            className="loginInput" 
            ref={passwordAgainRef}
            required
            type="password"
            minLength="6"


            />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}