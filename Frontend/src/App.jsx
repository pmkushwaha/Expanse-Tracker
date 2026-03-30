import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
import Navbar from "./components/Navbar"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home'element={<Home/>}/>
        <Route path='/navbar'element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;