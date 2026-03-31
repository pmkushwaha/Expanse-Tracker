import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Navbar from "./components/Navbar"
import Welcome from "./page/Welcome"
import Register from "./page/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path='/home'element={<Home/>}/>
        <Route path='/navbar'element={<Navbar/>}/>
        <Route path='/' element={<Welcome/>}/>   
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;