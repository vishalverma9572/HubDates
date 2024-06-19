import React from 'react';
import './App.css';

import Home from './pages/Home';
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Political from './pages/Political';
import Sports from './pages/Sports';
import Business from './pages/Business';
import International from './pages/International';
import Technology from './pages/Technology';
import Science from './pages/Science';
import Health from './pages/Health';
import Entertainment from './pages/Entertainment';
import Lifestyle from './pages/Lifestyle';




function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Political" element={<Political/>}></Route>
        <Route path="/Sports" element={<Sports/>}></Route>
        <Route path="/Business" element={<Business/>}></Route>
        <Route path="/International" element={<International/>}></Route>
        <Route path="/Technology" element={<Technology/>}></Route>
        <Route path="/Science" element={<Science/>}></Route>
        <Route path="/Health" element={<Health/>}></Route>
        <Route path="/Entertainment" element={<Entertainment/>}></Route>
        <Route path="/Lifestyle" element={<Lifestyle/>}></Route>
        
      </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
