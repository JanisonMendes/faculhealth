import React, { useState } from "react";
import "../login.css";
const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div className="input">
            <img src={"/img/person.png"} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        ) : (
          <div className="input">
            <img src={"/img/email.png"} alt="" />
            <input type="email" placeholder="Email Id" />
          </div>
        )}
        <div className="input">
          <img src={"/img/password.png"} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      <div classname="posicaoLogin">
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot_password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
