import React from 'react';
import '../utils/home.css';
import useScrollAnimation from '../Components/UI/Custom-scroll-hook';

import Placement from '../Components/Placement';
import HomeHero from "../Components/Home-Hero";
import NewsWireCarousel from "../Components/NewsWireCarousel";
import Sector from "../Components/Sector";
import { Typography } from "@material-tailwind/react";
import Newsletter from '../Components/Newsletter';

const Home = () => {
    return (
        <>
            <div className="contain fadeInUp">
                <HomeHero />

                <section className=' mx-auto'>
                    <Typography variant='h3' className='text-center mb-20'>
                        Our Focused Sector
                    </Typography>
                    <Sector />
                </section>

                <NewsWireCarousel />
                <Newsletter />

                <section className="text-center mb-16 px-4 md:px-16 lg:px-24 bg-gray-200">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Our Dynamic Work Environment at Dataism Laboratory</h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-700">Discover our collaborative culture and member placements</p>
                    <div className="grid lg:grid-cols-3 gap-10 mt-8">
                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4"
                             style={{ backgroundImage: 'url(/path/to/work-environment-1.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Collaborative Workspace</h3>
                                <p className="mt-2 text-gray-200">Our workspace is designed to foster collaboration and innovation. With open-plan offices and state-of-the-art facilities, we create an environment where team members can thrive, share ideas, and work together seamlessly.</p>
                            </div>
                        </div>
                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4"
                             style={{ backgroundImage: 'url(/path/to/work-environment-2.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Diverse Teams</h3>
                                <p className="mt-2 text-gray-200">Our teams are composed of individuals from diverse backgrounds, each bringing unique perspectives and skills. This diversity enhances our ability to tackle challenges creatively and effectively, driving our success and growth.</p>
                            </div>
                        </div>
                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-[450px] p-4"
                             style={{ backgroundImage: 'url(/path/to/work-environment-3.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Global Placements</h3>
                                <p className="mt-2 text-gray-200">We offer our members opportunities for global placements, allowing them to gain international experience and contribute to projects around the world. This global exposure helps our team grow professionally and personally, broadening their horizons.</p>
                            </div>
                        </div>
                    </div>

                    <Placement />
                </section>
            </div>
        </>
    );
};

export default Home;








