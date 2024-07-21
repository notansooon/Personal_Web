import React from 'react';
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import AboutHero from "../Components/About-Hero";
import ContactUs from './Contact';
import AboutContent from "../Components/about-content";
import Sector from "../Components/Sector";

const About = () => {
    return (
        <>
            <div className="contain fadeInUp ">

                <AboutHero/>


            </div>

            <AboutContent/></>

    );
};

export default About;





