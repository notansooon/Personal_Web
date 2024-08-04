import React from 'react';
import '../utils/home.css';

import Placement from '../Components/Placement';
import HomeHero from "../Components/Home-Hero";

import Sector from "../Components/Sector";
import {BlogPreview} from "../Components/BlogPreview";

const Home = () => {
    return (
        <>
            <div className="contain fadeInUp">
                <HomeHero />
                <Sector />

                <BlogPreview />
                <Placement />
            </div>
        </>
    );
};

export default Home;








