// Job.js
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Job = ({ title, description, status, pay, responsibilities }) => {

    const [Expanded, setExpanded] = useState(false);

    const clickHandler = (event) => {
        const exp = event.target.getAttribute('expand');
        if (exp === 'data-expand') {
            setExpanded(true);
        } 
        else if (exp === 'data-collapse') {
            setExpanded(false);
        }
        
    };

    return (
        <div className={`p-4  rounded-lg shadow-md bg-white border-solid border-2 ${status === 'Active' ? 'border-green-400' : 'border-red-400'}`} >
            {Expanded ? (
                <>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-2">{description}</p>
                    <h1 className='text-sm font-bold mt-5'>Responsibilities</h1>
                    <ul className="list-disc list-inside">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                    

                    <div className='space-x-5'>
                        <span className={`inline-block mt-4 px-3 py-1 rounded-full text-sm  ${status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {status === 'Active' ? 'Actively Hiring' : 'Not Hiring'}
                        </span>
                        <span className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${pay === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {pay === 'Paid' ? 'Paid' : 'Not Paid'}
                        </span>
                    </div>

                    <span className='flex justify-center mt-4 px-3 py-1 rounded-full text-sm bg-gray-300 text-green-800 items-center' expand='data-collapse' onClick={clickHandler} >
                            <FontAwesomeIcon icon={faChevronUp} />

                    </span>
                
                </>
            ) : (
                <>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-2">{description}</p>
                    <div className='space-x-5'>
                        <span className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {status === 'Active' ? 'Actively Hiring' : 'Not Hiring'}
                        </span>
                        <span className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${pay === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                            {pay === 'Paid' ? 'Paid' : 'Not Paid'}
                        </span>
                    </div>
                    <span className='flex justify-center mt-4 px-3 py-1 rounded-full text-sm bg-gray-300 text-green-800 items-center' expand='data-expand' onClick={clickHandler} >
                            <FontAwesomeIcon icon={faChevronDown} />

                    </span>
                </>
            )}

                        
        </div>
    );
};

export default Job;