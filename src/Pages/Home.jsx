import React from 'react';
import '../utils/home.css';

import Placement from '../Components/Placement';
import HomeHero from "../Components/Home-Hero";

import Sector from "../Components/Sector";
import { Typography } from "@material-tailwind/react";
import Newsletter from '../Components/Newsletter';
import {BlogPreview} from "../Components/BlogPreview";

const Home = () => {
    return (
        <>
            <div className="contain fadeInUp">
                <HomeHero />

                <section className=' mx-auto mt-40'>

                    <Typography variant='h3'
                                className=' mx-auto max-w-xl text-center mb-20'>
                        Sectors
                    </Typography>
                    <Sector />
                </section>
                <BlogPreview />
                <Placement />
            </div>
        </>
    );
};

export default Home;








