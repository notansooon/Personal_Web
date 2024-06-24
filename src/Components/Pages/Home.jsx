import React, { useState, useEffect, useRef } from 'react';
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
            <div>
                <Example>
                    
                </Example>
            </div>
        </>

    );
};

export default Home;

