import React from 'react';
import '../utils/home.css';

import Placement from '../Components/Placement';
import HomeHero from "../Components/Home-Hero";

import Sector from "../Components/Sector";
import {BlogPreview} from "../Components/BlogPreview";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Home | Dataism Laboratory for Quantitative Finance</title>
                <meta name="description" content="Quantitative finance lab at Virginia Tech that aims to foster interdiscipilnary collaboration in finance"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>
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








