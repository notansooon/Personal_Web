import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../utils/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <div className=' absolute top-0'>
                <nav className="navbar-container w-full z-50 shadow-md flex justify-between items-center p-4">
                    <div className="logo">MyApp</div>
                    <div className="hamburger" onClick={toggleNav}>&#9776;</div>
                    <div className={`nav-links isOpen ? 'open' : ''}`}>
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/People">People</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Research">Research</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/Apply"> Apply</Link>

                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;

