import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandigPage from './Components/LandingPage';
import Menu from './Components/menu/Menu';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <LandigPage/>} />
      <Route path="/menu" element={  <Menu/>} />
    </Routes>
    </BrowserRouter>
    
     
    
 
  );
}

export default App;
