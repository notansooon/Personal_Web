import  Navbar from './Components/Navbar';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Apply from "./Pages/Apply";
import About from './Pages/About.jsx';
import Contact from './Pages/Contact';
import ProfilePage from './Pages/ProfilePage.jsx';
import SponsorPage from './Pages/SponsorPage.jsx';
import ResearchPage from './Pages/Research.jsx';
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
                  <Route path='/ProfilePage/:name' element={<ProfilePage />}/>
                  <Route path='/Sponsor' element={<SponsorPage />}/>
                  <Route path='/Research' element={<ResearchPage/>}/>
                  <Route path='/HttpsStatusCodes' element={<HttpStatusCodes/>}/>
                  <Route path='/*' element={<HttpStatusCodes/>}/>

              </Routes>
              <Footer>

              </Footer>
      </>
  );
}

export default App;


