import { Link } from "react-router-dom";
import React from 'react';
import logo from "../Components/Pages/dataismLogo.png";
import './utils/navbar.css'; // Import the custom CSS

const Navbar = () => {
    return (
        <div className="font-sans flex font-medium items-center justify-between mt-5 p-4 z-[100] w-full absolute bg-transparent pt-12 h-[90px]">
            <Link to="/" className="flex items-center pl-5">
                
            </Link>
            <div className="m-5">
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <Link to="/" className="navbar-link">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-li">
                        <Link to="/about" className="navbar-link">
                            About
                        </Link>
                    </li>
                    <li className="navbar-li">
                        <Link to="/people" className="navbar-link">
                            People
                        </Link>
                    </li>
                    <li className="navbar-li">
                        <Link to="/projects" className="navbar-link">
                            Projects
                        </Link>
                    </li>
                    <li className="navbar-li">
                        <Link to="/contact" className="navbar-link">
                            Contact
                        </Link>
                    </li>
                    <li className="navbar-li">
                        <Link to="/apply" className="navbar-link">
                            Apply
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
