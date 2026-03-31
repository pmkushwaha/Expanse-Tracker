import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
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
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

    console.log("Stored token:", localStorage.getItem("access")); // 👈 check
      alert("Login successful ✅");
      navigate('/Home');
     
    } catch (error) {
      console.error(error);
      alert("Login failed ❌");
    }
  };

   return (
    <div>
       <Navbar></Navbar>
      <h2 className='mt-5'>Login</h2>
      <br />
      <form onSubmit={handleLogin} >
         
         <div class="form-group">
    
    <input    class="form-control" 
     type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
    />
     </div>
     <br />
  <div class="form-group">
  
    <input   class="form-control"   
    
    type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <br></br>
  <button type="submit" class="btn btn-primary">Submit</button>
               </form>
    </div>
  );
}

export default Login;