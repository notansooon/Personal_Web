import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home.png';
import Example from "../UI/Newsletter";



const Home = () => {
    const [scrollTop, setScrollTop] = useState(1);
    const [imageOpacity, setImageOpacity] = useState(.85);

    const handleScroll = () => {
        const windowPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const newOpacity = Math.max(1 - windowPosition / (windowHeight / 4), 0);
        const newImageOpacity = Math.min(0.85 - windowPosition / (windowHeight / 2), 100);
        setScrollTop(newOpacity);
        setImageOpacity(newImageOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Welcome to the Dataism Laboratory for Quantitative Finance!
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Our lab is an interdisciplinary hub welcoming talent from all fields. Our passion lies in the fascinating crossroads of machine learning and big data econometrics. Specifically, we delve deep into high-dimensional nonlinear time-series analysis, leveraging its applications in macroeconomic and financial forecasting, as well as the estimation of intricate financial networks.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                        At our core, we're dedicated to propelling Quantitative Finance and Econometrics forward through the latest in cutting-edge technology. Our mission is to explore the realms of AI/Machine Learning, Big Data, and High-Performance Computing (HPC) to unlock transformative applications in the field of quantitative finance.
                    </p>
                </div>
                <Example />
                <div className="fixed-bottom text-center text-white bg-gray-800 py-4">
                    This is a fixed element at the bottom of the page.
                </div>
            </div>
        </>
    );
};

export default Home;


