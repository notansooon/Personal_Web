import React from 'react';
import AboutHero from "../Components/About-Hero";
import ContactUs from './Contact';
import AboutContent from "../Components/about-content";
import Sector from "../Components/Sector";

const About = () => {
    return (
        <>
            <div className="py-10">
                <div className="mx-auto px-4 lg:px-20">
               
                    <AboutHero/>
                </div>

            </div>

            <AboutContent/></>

    );
};

export default About;





