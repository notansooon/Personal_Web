import React from 'react';
import '../utils/home.css';
import useScrollAnimation from '../Components/UI/Custom-scroll-hook';




import Placement from '../Components/Placement';


import HomeHero from "../Components/Home-Hero";
import NewsWireCarousel from "../Components/NewsWireCarousel";
import Sector from "../Components/Sector";
import {Typography} from "@material-tailwind/react";
import { motion } from 'framer-motion';

const Home = () => {

    const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const [sectionRef1, controls1] = useScrollAnimation();
    const [sectionRef2, controls2] = useScrollAnimation();
    const [sectionRef3, controls3] = useScrollAnimation();

    return (
        <>
            <div className="contain fadeInUp">
                <HomeHero/>


                <section className='mt-32'>
                    <Typography variant='h3' className='text-center mb-20'>
                        Our Focused Sector
                    </Typography>
                    <Sector clas></Sector>
                </section>

                <section
                    className="relative mb-16 flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat fadeInUp bg-gray-200">
                    <div className="contain px-4 md:px-16 lg:px-24 py-14">
                        <div className="space-y-10">
                            
                        </div>
                        
                    </div>
                </section>




                <motion.section
                    ref={sectionRef1}
                    initial="hidden"
                    animate={controls1}
                    variants={animationVariants}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 px-4 md:px-16 lg:px-24"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Pioneering Excellence at Dataism Laboratory</h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-700">Explore our diverse areas of research</p>
                    <div className="grid lg:grid-cols-3 gap-10 mt-8">
                        <motion.div
                            className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4"
                            style={{ backgroundImage: 'url(/path/to/research-ai.jpg)' }}
                            variants={animationVariants}
                        >
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Innovative Financial Technologies</h3>
                                <p className="mt-2 text-gray-200">Harnessing the power of AI, Machine Learning, and Big Data Analytics, we develop state-of-the-art financial models and tools. Our focus is on creating innovative technologies that transform how financial data is analyzed and utilized, driving advancements in trading strategies, risk management, and market predictions.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4"
                            style={{ backgroundImage: 'url(/path/to/research-biotech.jpg)' }}
                            variants={animationVariants}
                        >
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">High-Performance Computing</h3>
                                <p className="mt-2 text-gray-200">Leveraging powerful computational resources, we tackle complex financial problems with unprecedented speed and accuracy. Our high-performance computing capabilities enable us to run sophisticated simulations and analyze large datasets, providing deeper insights and more precise financial solutions.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4"
                            style={{ backgroundImage: 'url(/path/to/research-quantum.jpg)' }}
                            variants={animationVariants}
                        >
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Transformative Research</h3>
                                <p className="mt-2 text-gray-200">Our interdisciplinary team conducts pioneering research that bridges theoretical concepts with practical applications. By continuously pushing the boundaries of financial science, we aim to set new standards in quantitative finance and econometrics, contributing to the evolution of the financial industry.</p>
                            </div>
                        </motion.div>
                    </div>
                    
                    <Placement/>
                
                </motion.section>


                

                
            </div>
        </>
    );
};

export default Home;







