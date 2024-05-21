import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="">Submit</button>
        <p>This is a custon error</p>
        <span>
          Don't Have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
