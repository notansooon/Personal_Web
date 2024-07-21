import React from 'react';
import '../utils/home.css';




import Placement from '../Components/Placement';


import HomeHero from "../Components/Home-Hero";
import NewsWireCarousel from "../Components/NewsWireCarousel";
import Sector from "../Components/Sector";
import {Typography} from "@material-tailwind/react";

const Home = () => {

    return (
        <>
            <div className="contain fadeInUp">
                <HomeHero/>


                <section className='mt-32'>
                    <Typography variant='h3' className='text-center'>
                        The sectors that we work on
                    </Typography>
                    <Sector/>
                </section>

                <section
                    className="relative mb-16 flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat fadeInUp">
                    <div className="contain px-4 md:px-16 lg:px-24 py-14">
                        <div className="space-y-10">
                            <NewsWireCarousel />
                        </div>
                        <Placement/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;







