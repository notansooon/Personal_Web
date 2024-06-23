import { Link } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import logo from "../Components/Pages/dataismLogo.png";

const Navbar = () => {


    return (
        <>

            <div className="font-serif flex items-center justify-between mt-5 p-4 z-[100] w-full absolute bg-black-800 h-[90px]">
                <Link to="/" className="flex items-center pl-5">
                    <img src={logo} alt="DLQF Logo" className="h-72 mt-28 w-auto pt-12 mr-2" />  {/* Adjust height and width as needed */}
                </Link>
                <div className="m-5">
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/"
                                className="bg-transparent text-white font hover:text-gray-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="bg-transparent text-white hover:text-gray-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/people"
                                className="bg-transparent text-white font cursor-pointer hover:text-gray-300"
                            >
                                People
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className="bg-transparent text-white font cursor-pointer hover:text-gray-300"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="bg-transparent text-white font cursor-pointer hover:text-gray-300"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/apply"
                                className="bg-transparent text-white font cursor-pointer hover:text-gray-300"
                            >
                                Apply
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;