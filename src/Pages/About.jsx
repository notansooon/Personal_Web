import React from 'react';
import AboutHero from "../Components/About-Hero";
import AboutContent from "../Components/about-content";
import IconButton from '../Components/iconbutton';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <div className="bg-gray-100 py-10">
                <div className="mx-auto px-4 lg:px-20">
               
                    <AboutHero/>
                </div>

                

            </div>
            <div className='mx-auto'>
                    <IconButton text={"Resume"}/>
            </div>
            <h1 className='mx-auto mt-10 text-2xl'> Check Me Out On</h1>
            <div className='mx-auto flex mt-10 space-x-12'>

                    <a href='https://github.com/notansooon'> <FaGithub size={50} /> </a> 
                    <a href='https://www.instagram.com/17soon___/'> <FaInstagram size={50} /> </a>
                    <a href='https://www.linkedin.com/in/ansonjiang17/'> <FaLinkedinIn size={50} /> </a>
            </div>

        </>

    );
};

export default About;





