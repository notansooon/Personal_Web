import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import '../utils/navbar.css';

   
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-800 font-sans -mb-1.5 h-64 opacity-50 ">
            <div className="max-w-6xl mx-auto px-4 mt-24 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center h-full grid  ">
                        <p className="text-3xl font-black text-white"> Anson Jiang</p>
                        <div className="flex items-center justify-around gap mt-4">
                            <a className='text-3xl' href=''> <FaGithub/> </a>
                            <a className='text-3xl' hre='' > <FaInstagram/> </a>
                            <a className='text-3xl' href=''> <FaLinkedin/> </a>
                        </div>
                        <div className=" mt-4 space-x-8 flex items-center">
                            <Link to="/" className="text-gray-100 hover:text-white font-semibold border-b-2 border-transparent hover:border-current">Home</Link>

                            <Link to="/Project" className="text-gray-100 hover:text-white font-semibold border-b-2 border-transparent hover:border-current">Project</Link>
                        
                        </div>
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






