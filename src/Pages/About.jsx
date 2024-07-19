import React from 'react';
import '../Components/utils/styles.css';
import { motion } from 'framer-motion';

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
                    <section
                        className="hero-section relative text-center mb-16 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}
                    >
                        <div className=" flex flex-col mx-auto w-full text-black p-10 ">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">About Our Research Lab</h1>
                            <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                                Innovating the future through groundbreaking research
                            </p>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <div
                        className="relative mb-16 flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat bg-transparent bg-opacity-75"
                        style={{ backgroundImage: 'url(/path/to/mission-image.jpg)' }}
                    >
                        <div className="p-6 md:p-14 lg:w-3/4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Who We Are</h2>
                            <div className="mt-4 text-lg md:text-xl lg:text-2xl">
                                <p>
                                    Founded in 2024, The Dataism Lab at Virginia Tech stands as an interdisciplinary
                                    powerhouse dedicated to pushing the boundaries of Quantitative Finance and Econometrics.
                                    At our core, we specialize in harnessing cutting-edge technologies such as AI/Machine Learning,
                                    Big Data Analytics, and High Performance Computing. Our mission revolves around leveraging these
                                    innovations to drive transformative applications and shape the future of financial sciences.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Research Focus Section */}
                    <section className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">Sectors</h2>
                        <p className="mt-4 text-lg text-gray-700">Explore our diverse areas of research</p>
                        <div className="grid gap-10 lg:grid-cols-3 mt-8">
                            <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-60 md:h-80"
                                 style={{ backgroundImage: 'url(/path/to/research-ai.jpg)' }}>
                                <div className="bg-black bg-opacity-50 p-4 w-full text-container">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">Algorithmic Development</h3>
                                    <p className="mt-2 text-sm md:text-base text-gray-200 hidden-text">
                                        Our team designs, implements, and refines AI and ML algorithms tailored for various
                                        financial applications, including trading strategies, risk management, and market analysis.
                                        Our mission is to revolutionize the financial industry by creating cutting-edge algorithmic
                                        solutions that enable more accurate predictions, smarter trading strategies, and enhanced
                                        financial decision-making processes. We aim to bridge the gap between theoretical research
                                        and practical applications, ensuring our algorithms are both scientifically robust and practically effective.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-60 md:h-80"
                                 style={{ backgroundImage: 'url(/path/to/research-biotech.jpg)' }}>
                                <div className="bg-black bg-opacity-50 p-4 w-full text-container">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">Client Services</h3>
                                    <p className="mt-2 text-sm md:text-base hidden-text">
                                        We create tailored trading algorithms and financial models that align with the specific
                                        needs and strategies of each investment bank, ensuring optimal performance and competitive
                                        advantage. Our Client Services Sector at DLQF is dedicated to providing innovative and
                                        tailored solutions for investment banks. We specialize in designing, developing, and
                                        implementing cutting-edge technologies that enhance the operational efficiency, strategic
                                        decision-making, and overall performance of our clients in the financial industry.
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-60 md:h-80"
                                 style={{ backgroundImage: 'url(/path/to/research-quantum.jpg)' }}>
                                <div className="bg-black bg-opacity-50 p-4 w-full text-container">
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">Academic Research</h3>
                                    <p className="mt-2 text-sm md:text-base hidden-text">
                                        Our team conducts pioneering research on a wide range of topics within quantitative finance,
                                        including asset pricing, risk management, market microstructure, financial econometrics,
                                        and algorithmic trading. Our Academic Research Sector at DLQF is a vibrant hub of innovation
                                        and intellectual rigor, dedicated to exploring a myriad of topics within the field of
                                        quantitative finance. Comprising a dedicated team of graduate students and faculty members,
                                        our sector is committed to advancing the frontiers of financial research through cutting-edge
                                        studies and interdisciplinary collaboration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Vision Section */}
                    <section
                        className="relative mb-16 flex flex-col lg:flex-row items-center bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url(/path/to/vision-image.jpg)' }}
                    >
                        <div className="bg-white bg-opacity-75 p-6 md:p-10 lg:w-1/2 lg:ml-auto">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Our Vision</h2>
                            <p className="mt-4">
                                Our vision is to be a global leader in research and development, contributing to societal
                                advancement through innovative solutions and knowledge dissemination.
                            </p>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">Contact Us</h2>
                        <p className="mt-4 text-lg text-gray-700">Get in touch with us for collaboration and inquiries</p>
                        <div className="mt-8">
                            <a
                                href="mailto:info@researchlab.com"
                                className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700"
                            >
                                info@researchlab.com
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default About;




