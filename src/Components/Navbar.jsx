import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../utils/navbar.css';
import logo from '../assets/logos/dataismLogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent font-sans -mb-1.5">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center h-full">
                        <Link to="/">
                            <img src={logo} alt="Dataism Logo" className="h-10 bg-blue-950 w-auto" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">About</Link>
                        <Link to="/apply" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">Apply</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">Contact</Link>
                        <Link to="/people" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">People</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-1 px-4 py-2">
                        <Link to="/" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">About</Link>
                        <Link to="/apply" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">Apply</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">Contact</Link>
                        <Link to="/people" className="text-gray-700 hover:text-blue-950 font-semibold border-b-2 border-transparent hover:border-current">People</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;






