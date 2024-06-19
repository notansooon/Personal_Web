import Navbar from'./Components/Navbar';
import Projects from './Components/Pages/Projects';
import Home from './Components/Pages/Home';
import Apply from "./Components/Pages/Apply";
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import People from "./Components/Pages/People";


function App() {
  return (
    <>
        <Navbar />

        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/People" element = {<People />} />
            <Route path="/Apply" element = {<Apply />} />
            <Route path="/Projects"  element = {<Projects />} />
            <Route path="/About"  element = {<About />} />
            <Route path='/Contact' element = {<Contact />} />

        </Routes>
    </>
  );
}

export default App;


