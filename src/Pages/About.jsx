import React from 'react';
import '../Components/utils/styles.css';
import { motion } from 'framer-motion';
import AboutHero from "../Components/About-Hero";
import ContactUs from './Contact';
import AboutContent from "../Components/about-content";
import Sector from "../Components/Sector";




const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="py-10">
                <div className="mx-auto px-4 lg:px-20">
                    {/* Hero Section */}
                    <AboutHero/>

                    <AboutContent/>
                    <Sector/>


                    
                </div>
            </div>
        </motion.div>
    );
};

export default About;




