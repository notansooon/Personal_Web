// Job.js
import React from 'react';

const Job = ({ title, description, status, pay }) => {
    return (
        <div className={`p-4 border rounded-lg shadow-md ${status === 'Active' ? 'bg-green-100' : 'bg-red-100'}`}>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2">{description}</p>
            <div className='space-x-5'>

            <span className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                {status === 'Active' ? 'Actively Hiring' : 'Not Hiring'}
            </span>

            <span className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${pay === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                {status === 'Paid' ? 'Paid' : 'Not Paid'}
            </span>

            </div>
           


        </div>
    );
};

export default Job;
