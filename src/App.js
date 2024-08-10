import  Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Apply from "./Pages/Apply";
import About from './Pages/About.jsx';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import People from "./Pages/People";
import HttpStatusCodes from "./HttpStatusCodes/HttpStatusCode";
import React from "react";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/UI/ScrollToTop";




function App() {
  return (
      <>
          <div className= 'app-container'>
              <Navbar className="p-16"/>
              <ScrollToTop/>

              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/people" element={<People/>}/>
                  <Route path="/apply" element={<Apply/>}/>

                  <Route path="/about" element={<About/>}/>
                  <Route path='/contact' element={<Contact/>}/>


                  <Route path='/HttpsStatusCodes' element={<HttpStatusCodes/>}/>
                  <Route path='/*' element={<HttpStatusCodes/>}/>

              </Routes>
              <Footer>

              </Footer>
          </div>

      </>
  );
}

export default App;


