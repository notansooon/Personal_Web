import React from 'react';
import JobList from '../Components/Jobs-List';
import Typewriter from "typewriter-effect";
import '../Components/utils/styles.css';
import { Helmet } from "react-helmet";

const Apply = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Job Listings - DLQF</title>
                <meta name="description" content="Student Employment Opportunities"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>

            <div className="min-h-screen bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <header className='relative h-[250px] w-full overflow-hidden'>
                        <div className="container relative z-10 my-auto mx-auto grid text-left ml-[10%]">
                            <h1 className="text-4xl -ml-32 leading-snug lg:text-5xl text-black">
                                Discover Opportunities
                            </h1>
                        </div>
                    </header>
                    <JobList />
                </div>
            </div>
        </>
    );
};

export default Apply;




