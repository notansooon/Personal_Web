import React from 'react';
import JobList from '../Components/Jobs-List';
import { Typography } from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
import '../Components/utils/styles.css'

const Apply = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
            <header className='relative h-[250px]  w-full overflow-hidden '>

                <div className="container relative z-10 my-auto mx-auto grid text-left ml-[10%]">
                    <Typography
                        variant="h1"
                        color="black"
                        className="text-4xl font-extralight font-serif !leading-snug lg:text-5xl"
                    >
                        Discover Opportunities
                    </Typography>
                </div>
            </header>
                <JobList />
            </div>
        </div>
    );
};

export default Apply;



