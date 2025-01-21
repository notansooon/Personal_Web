import  Navbar from './Components/Navbar';

import Project from "./Pages/Project";
import { Route, Routes } from 'react-router-dom';
import React from "react";
import About from './Pages/About';

import ScrollToTop from "./Components/UI/ScrollToTop";
import OpenSource from './Pages/OpenSource';




function App() {
  return (
      <>
          <div className= 'app-container'>
              <Navbar className="p-16"/>
              <ScrollToTop/>

              <Routes>
                  <Route path="/" element={<About/>}/>
                  <Route path="/OpenSoure" element={<OpenSource />} />
                  <Route path="/Project" element={<Project/>}/>

              </Routes>
              
          </div>
d
      </>
  );
}

export default App;


