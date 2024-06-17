import Navbar from'./Components/Navbar';
import Projects from './Components/Pages/Projects';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
       
      <Routes >
        <Route path="/" element={<Home />} />
      
        <Route path="/Projects"  element = {<Projects />} />
        <Route path="/About"  element = {<About />} />
        <Route path='/Contact' element = {<Contact />} />
    
      </Routes>
    </>
  );
}

export default App;


