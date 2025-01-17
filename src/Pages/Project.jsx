import React from 'react';
import JobList from '../Components/Jobs-List';
import { Helmet } from "react-helmet";
import '../Components/utils/styles.css';

const project = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Job Listings | Dataism Laboratory for Quantitative Finance</title>
                <meta name="description" content="Student Employment Opportunities"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>

            <div className="min-h-screen bg-gray-100 py-8 mt-20 ">
                <div className="container mx-auto px-4">
                    <JobList />
                </div>
            </div>
        </>
    );
};

export default project;





