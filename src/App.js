import  Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Project from "./Pages/Project";
import { Route, Routes } from 'react-router-dom';
import React from "react";
import ScrollToTop from "./Components/UI/ScrollToTop";




function App() {
  return (
      <>
          <div className= 'app-container'>
              <Navbar className="p-16"/>
              <ScrollToTop/>

              <Routes>
                  <Route path="/" element={<Home/>}/>
                  
                  <Route path="/Project" element={<Project/>}/>

              </Routes>
              
          </div>

      </>
  );
}

export default App;


