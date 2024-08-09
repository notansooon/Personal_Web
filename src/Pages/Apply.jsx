import React from 'react';
import JobList from '../Components/Jobs-List';
import { Helmet } from "react-helmet";
import '../Components/utils/styles.css';

const Apply = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Job Listings | Dataism Laboratory for Quantitative Finance</title>
                <meta name="description" content="Student Employment Opportunities"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>

            <div className="min-h-screen bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <header className='relative h-[200px] sm:h-[250px] w-full overflow-hidden'>
                        <div className="relative z-10 my-auto mx-auto text-left ml-6 sm:ml-10 lg:ml-[10%]">
                            <h1 className="text-3xl sm:text-4xl leading-snug lg:text-5xl text-black">
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





