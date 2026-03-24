import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import API from "../services/api";

function Login() {
 
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
 const navigate=useNavigate();
 const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("login/", {
        username,
        password,
      });
      console.log(response.data);

      // Save tokens
      localStorage.setItem("access", response.data.refresh.access_token);
      localStorage.setItem("refresh", response.data.refresh);

      alert("Login successful ✅");
      navigate('/Home');
    } catch (error) {
      console.error(error);
      alert("Login failed ❌");
    }
  };

   return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;