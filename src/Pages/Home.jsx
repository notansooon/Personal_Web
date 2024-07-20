import React, { useEffect, useState } from 'react';
import '../utils/home.css';




import Placement from '../Components/Placement';
import NewsWire from '../Components/NewsWire';
import data from '../assets/data/home.json';
import ContactUs from './Contact';
import useScrollAnimation from '../Components/UI/Custom-scroll-hook';
import HomeHero from "../Components/Home-Hero"; // Adjust the path according to your project structure

const Home = () => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch(data)
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.error('Error fetching content:', error));
    }, []);

    const [sectionRef1, controls1] = useScrollAnimation();
    const [sectionRef2, controls2] = useScrollAnimation();
    const [sectionRef3, controls3] = useScrollAnimation();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="contain fadeInUp">
                <HomeHero/>

                <section
                    ref={sectionRef1}
                    className="text-center mb-16 px-4 md:px-16 lg:px-24 fadeInUp"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Pioneering Excellence at Dataism Laboratory</h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-700">Explore our diverse areas of research</p>
                    <div className="grid lg:grid-cols-3 gap-10 mt-8">
                        <div
                            className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4 fadeInUp"
                            style={{ backgroundImage: 'url(/path/to/research-ai.jpg)' }}
                        >
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Innovative Financial Technologies</h3>
                                <p className="mt-2 text-gray-200">Harnessing the power of AI, Machine Learning, and Big Data Analytics, we develop state-of-the-art financial models and tools. Our focus is on creating innovative technologies that transform how financial data is analyzed and utilized, driving advancements in trading strategies, risk management, and market predictions.</p>
                            </div>
                        </div>
                        <div
                            className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4 fadeInUp"
                            style={{ backgroundImage: 'url(/path/to/research-biotech.jpg)' }}
                        >
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">High-Performance Computing</h3>
                                <p className="mt-2 text-gray-200">Leveraging powerful computational resources, we tackle complex financial problems with unprecedented speed and accuracy. Our high-performance computing capabilities enable us to run sophisticated simulations and analyze large datasets, providing deeper insights and more precise financial solutions.</p>
                            </div>
                        </div>
                        <div
                            className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4 fadeInUp"
                            style={{ backgroundImage: 'url(/path/to/research-quantum.jpg)' }}
                        >
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Transformative Research</h3>
                                <p className="mt-2 text-gray-200">Our interdisciplinary team conducts pioneering
                                    research that bridges theoretical concepts with practical applications. By continuously pushing the boundaries of financial science, we aim to set new standards in quantitative finance and econometrics, contributing to the evolution of the financial industry.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    ref={sectionRef3}
                    className="relative mb-16 flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat fadeInUp"

                >
                    <div className="contain px-4 md:px-16 lg:px-24 py-14">
                        <div className="content-container">
                            <div className="text-container">
                                <h1 className="landing-page-header text-3xl md:text-4xl font-bold">{data.NewsPageHeader}</h1>
                                <div className="text-lg md:text-xl mt-10 items-center justify-center flex flex-col border-b-4 pb-10">
                                    {data.NewsParagraphs.map((paragraph, index) => (
                                        <p className="text-gray-700 mb-4" key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-14 space-y-10">
                                <NewsWire />

                            </div>
                        </div>

                        <Placement/>

                        <div className="text-container text-lg md:text-xl mt-10 items-center justify-center flex flex-col">
                            {data.footerParagraphs.map((paragraph, index) => (
                                <p className="text-gray-700 mb-4" key={index}>{paragraph}</p>
                            ))}
                        </div>
                        
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;







