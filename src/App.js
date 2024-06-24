import Navbar from './Components/Navbar';
import Projects from './Components/Pages/Projects';
import Home from './Components/Pages/Home';
import Apply from "./Components/Pages/Apply";
import About from './Components/Pages/About.tsx';
import Contact from './Components/Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import People from "./Components/Pages/People";
import TradingViewTicker from "./Components/UI/ticker-tape";
import HttpStatusCodes from "./Components/HttpStatusCodes/HttpStatusCode";
import React from "react";


function App() {
  return (
      <>

          <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
              <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                  style={{
                      clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
              />
          </div>

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

      </>
  );
}

export default App;


