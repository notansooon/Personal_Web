import React from 'react';
import '../utils/home.css';
import useScrollAnimation from '../Components/UI/Custom-scroll-hook';




import Placement from '../Components/Placement';


import HomeHero from "../Components/Home-Hero";
import NewsWireCarousel from "../Components/NewsWireCarousel";
import Sector from "../Components/Sector";
import {Typography} from "@material-tailwind/react";

const Home = () => {
    return (
        <>
            <div className="contain fadeInUp">
                <HomeHero />

                <section className='mt-32'>
                    <Typography variant='h3' className='text-center'>
                        The sectors that we work on
                    </Typography>
                    <Sector/>
                </section>

                
            </div>
        </>
    );
};

export default Home;







