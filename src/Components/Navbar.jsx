import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
import '../utils/navbar.css';

import img from '../Components/Images/Anson.jpeg'




const imageComp = ({ src, alt }) => {

    return (
        <div className="py-3 sm:py-4">
            <img src={src} alt={alt} className="w-full rounded-2xl" />
        </div>
    );

}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-800 font-sans -mb-1.5 h-64 opacity-50 ">
            <div className="max-w-6xl mx-auto px-4 mt-24 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center h-full grid">
                        <p className="text-3xl font-black text-white "> Anson Jiang</p>
                        <p className="text-md text-white "> AI Enthusiast and Software Engineer</p>
                        <div className="flex items-center justify-between mt-4">
                            <a className='text-3xl' href=''> <FaGithub/> </a>
                            <a className='text-3xl' hre='' > <FaInstagram/> </a>
                            <a className='text-3xl' href=''> <FaLinkedin/> </a>
                        </div>
                        <div className=" mt-4 space-x-8 flex items-center justify-between">
                            
                            <Link to="/OpenSource" className="text-gray-100 hover:text-white font-semibold border-b-2 border-transparent hover:border-current">Open Source</Link>
                            <Link to="/Project" className="text-gray-100 hover:text-white font-semibold border-b-2 border-transparent hover:border-current">Project</Link>
                            <Link to="/" className="text-gray-100 hover:text-white font-semibold border-b-2 border-transparent hover:border-current">About</Link>
                        
                        </div>
                    </div>

                    <div className='w-full px-4 lg:w-1/4'> <imageComp src={img} alt={'my pfp'} /> </div>
                    
                    
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;






