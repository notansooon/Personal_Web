import React from 'react';
import JobList from '../Components/Jobs-List';

const Apply = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
            <header className='relative h-[400px]  w-full overflow-hidden '>

                <div className='absolute top-[5%] p-4 md:p-8 text-black'>
                    <h1 className='text-3xl md:text-5xl'>Discover Opportunities</h1>
                    <p className='text-5xl mt-6 ml-12'>Find, Apply, Innovate</p>
                </div>


            </header>
                <JobList />
            </div>
        </div>
    );
};

export default Apply;



