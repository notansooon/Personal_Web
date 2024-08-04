import React from 'react';
import AboutHero from "../Components/About-Hero";
import AboutContent from "../Components/about-content";

const About = () => {
    return (
        <>
            <div className="bg-gray-100 py-10">
                <div className="mx-auto px-4 lg:px-20">
               
                    <AboutHero/>
                </div>

            </div>

            <AboutContent/></>

    );
};

export default About;





