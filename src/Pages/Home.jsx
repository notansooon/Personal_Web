import React, { useEffect, useState } from 'react';
import '../utils/home.css';
import Sponsor from "../Components/Sponsor";
import { FileUpload } from "../Components/forms";
import Subscribe from "../Components/Newsletter";
import { Placement } from '../Components/Placement';
import NewsWire from '../Components/NewsWire';
import data from '../assets/data/home.json';
import {motion} from 'framer-motion'

const Home = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch(data)
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.error('Error fetching content:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="contain"
            >
                <div className="text-white h-screen w-screen relative">
                    <div className="w-full h-full">
                        <img
                            className="absolute top-0 left-0 h-full w-full object-cover"
                            src="https://dataismlab.com/media/ALGO_image.png"
                            alt="movie"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                        <div className="absolute top-[20%] p-4 md:p-8">
                            <h1 className="text-3xl md:text-5xl font-bold">Welcome To Dataism</h1>
                            <p className="text-gray-300 mt-10 text-2xl">Established in 2024, The Dataism Lab at Virginia Tech is an interdisciplinary hub focused on advancing Quantitative Finance and Econometrics through cutting-edge technologies.</p>
                            
                            
                        </div>
                    </div>
                </div>
                


                <section className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900">Pioneering Excellence at Dataism Laboratory</h2>
                    <p className="mt-4 text-lg text-gray-700">Explore our diverse areas of research</p>
                    
                    <div className="grid lg:grid-cols-3 gap-10 ">
                        
                       
                       
                       
                       
                       
                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px]" style={{ backgroundImage: 'url(/path/to/research-ai.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full ">
                                <h3 className="text-2xl font-semibold text-white">Innovative Financial Technologies </h3>
                                <p className="mt-2 text-gray-200">Harnessing the power of AI, Machine Learning, and Big Data Analytics, we develop state-of-the-art financial models and tools. Our focus is on creating innovative technologies that transform how financial data is analyzed and utilized, driving advancements in trading strategies, risk management, and market predictions.

                                </p>
                            </div>
                        </div>


                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-[360px]" style={{ backgroundImage: 'url(/path/to/research-biotech.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full ">
                                <h3 className="text-2xl font-semibold text-white">High-Performance Computing</h3>
                                <p className="mt-2 text-gray-200 ">Leveraging powerful computational resources, we tackle complex financial problems with unprecedented speed and accuracy. Our high-performance computing capabilities enable us to run sophisticated simulations and analyze large datasets, providing deeper insights and more precise financial solutions.
                                </p>
                            </div>
                        </div>
                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-[280px]" style={{ backgroundImage: 'url(/path/to/research-quantum.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full ">
                                <h3 className="text-2xl font-semibold text-white">Transformative Research</h3>
                                <p className="mt-2 text-gray-200 ">Our interdisciplinary team conducts pioneering research that bridges theoretical concepts with practical applications. By continuously pushing the boundaries of financial science, we aim to set new standards in quantitative finance and econometrics, contributing to the evolution of the financial industry.</p>
                            </div>
                        </div>




                    </div>
                </section>

                {/* Mission Section */}
                <div className="relative mb-16 flex  flex-col lg:flex-row  bg-cover bg-center bg-no-repeat bg-gray-300 bg-opacity-75" style={{ backgroundImage: 'url(/path/to/mission-image.jpg)' }}>
                    <div className=" p-14 lg:w-3/4">
                        <h2 className="text-4xl font-semibold p-5   text-gray-600">Our Mission</h2>
                        <div className="mt-4 text-2xl text-gray-600">
                        <p >Our mission is to conduct pioneering research that advances scientific understanding and technological innovation. We strive to create a collaborative environment that fosters creativity and excellence.</p>

                        </div>
                    </div>


                    
                </div>
                
                


                <div className="contain ">
                    <div className='content-container'>
                        <div className="text-container">
                            <h1 className="landing-page-header">{data.NewsPageHeader}</h1>
                            <div className='text-2xl mt-10 items-center justify-center flex flex-col border-b-4 pb-10'>
                                {data.NewsParagraphs.map((paragraph, index) => (
                                    <p className='text-gray-300'key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className='mt-52 space-y-10'>
                            <NewsWire/>
                            <Subscribe/>
                        </div>
                    </div>

                    <Placement/>

                    <div className='text-container text-2xl mt-10 items-center justify-center flex flex-col'>
                        {data.footerParagraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>

            </motion.div>

        </>
    );
};

export default Home;





