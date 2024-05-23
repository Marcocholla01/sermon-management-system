import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../configs/serverUrl";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  // console.log(inputs)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post(`${api}/auth/login`, inputs);
      // console.log(res);

      await login(inputs);
      navigate("/");
    } catch (error) {
      // console.log(error);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
        <span>
          Don't Have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
