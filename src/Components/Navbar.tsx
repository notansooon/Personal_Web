import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../utils/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar-container">
            <div className="logo">MyApp</div>
            <div className="hamburger" onClick={toggleNav}>&#9776;</div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/services">People</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;

