import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {BsTwitterX} from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-8 border-t border-gray-200">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">DLQF</h1>
                <address className="not-italic mb-4 text-center">
                    Pamplin Hall | 880 West Campus Drive | Blacksburg | VA 24060
                </address>
                <div className="flex space-x-4">
                   
                    
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl text-gray-800 hover:text-blue-700" />
                    </a>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;




