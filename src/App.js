import  Navbar from './Components/Navbar';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Apply from "./Pages/Apply";
import About from './Pages/About.tsx';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import People from "./Pages/People";

import HttpStatusCodes from "./HttpStatusCodes/HttpStatusCode";
import React from "react";
import Footer from "./Components/Footer";



function App() {
  return (
      <>

          <Navbar className="p-16"/>

          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/People" element={<People/>}/>
              <Route path="/Apply" element={<Apply/>}/>
              <Route path="/Projects" element={<Projects/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/HttpsStatusCodes' element={<HttpStatusCodes/>}/>

          </Routes>
          <Footer />

      </>
  );
}

export default App;


