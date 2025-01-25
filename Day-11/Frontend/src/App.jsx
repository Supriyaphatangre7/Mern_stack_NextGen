import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Register } from "./components/Register";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import Getmovie from "./components/Getmovie";


const App=()=>{

  return <>
   
   <BrowserRouter>
     <Home/>
   <Routes>

   <Route path="/getmovie" element={<Getmovie/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  </>

}

export default App;