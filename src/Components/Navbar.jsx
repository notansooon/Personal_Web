import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../utils/navbar.css'; // Make sure this path is correct

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-blue-600">Dataism Lab</Link>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                        <Link to="/projects" className="text-gray-700 hover:text-blue-600">Project</Link>
                        <Link to="/apply" className="text-gray-700 hover:text-blue-600">Apply</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                        <Link to="/people" className="text-gray-700 hover:text-blue-600">People</Link>
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
                        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                        <Link to="/jobs" className="text-gray-700 hover:text-blue-600">Job Postings</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;




