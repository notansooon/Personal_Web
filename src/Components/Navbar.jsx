import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md font-sans">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <p className="text-2xl font-extrabold text-blue-900">Anson Jiang</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-blue-700 font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-blue-700"
                        >
                            Home
                        </Link>

                        <Link
                            to="/experience"
                            className="text-gray-700 hover:text-blue-700 font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-blue-700"
                        >
                            Experience
                        </Link>
                        

                        <Link 
                            
                            to="/Project"
                            className="text-gray-700 hover:text-blue-700 font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-blue-700"
                        >
                            Project
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="focus:outline-none flex items-center justify-center w-10 h-10 border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-300"
                        >
                            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                                <span className="block w-6 h-0.5 bg-gray-800 transition-transform duration-300 mb-1"></span>
                                <span className="block w-6 h-0.5 bg-gray-800 transition-transform duration-300 mb-1"></span>
                                <span className="block w-6 h-0.5 bg-gray-800 transition-transform duration-300"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-100 shadow-md py-4">
                    <div className="flex flex-col space-y-2 px-4">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-blue-700 font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-blue-700"
                        >
                            Home
                        </Link>

                        <Link
                            to="/experience"
                            className="text-gray-700 hover:text-blue-700 font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-blue-700"
                        >
                            Experience
                        </Link>

                        <Link
                            to="/Project"
                            className="text-gray-700 hover:text-blue-700 font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-blue-700"
                        >
                            Project
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
