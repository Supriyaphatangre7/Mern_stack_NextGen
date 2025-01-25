import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

const App =()=>{
  return <>
  
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
  </>
};

export default App;