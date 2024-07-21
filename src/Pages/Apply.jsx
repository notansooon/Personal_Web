import React from 'react';
import JobList from '../Components/Jobs-List';

const Apply = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Employment Opportunities</h1>
                <JobList />
            </div>
        </div>
    );
};

export default Apply;



