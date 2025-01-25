import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Register from './components/Register.jsx'
import Navbar from './components/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home/>
    {/* <About/>
    <Register/> 
     <App /> */}
    
  </StrictMode>,
)
