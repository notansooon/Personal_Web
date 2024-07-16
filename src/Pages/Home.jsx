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
                <div className="contain">
                    <div className='content-container'>
                        <div className="text-container">
                            <h1 className="landing-page-header">{data.landingPageHeader}</h1>
                            <div className='text-2xl mt-10 items-center justify-center flex flex-col border-b-4 pb-10'>
                                {data.introParagraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
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





