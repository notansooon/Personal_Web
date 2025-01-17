import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {Button} from "@material-tailwind/react";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

const Job = ({ title, description, status, responsibilities, skills }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    

    return (
        <div className={`p-4 rounded-lg shadow-md bg-white border ${status === 'Active' ? 'border-green-400' : 'border-red-400'}`}>
            <div className="mb-2">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-700">{description}</p>
                
            </div>

            {expanded && (
                <div>
                    <h3 className="text-lg font-medium mt-5">Responsibilities</h3>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-gray-700">{responsibility}</li>
                        ))}
                    </ul>

                    

                    
                    
                    
                </div>
            )}

            <div className="flex justify-between items-center mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {status === 'Active' ? 'Active' : 'Finished'}
                </span>
                <span
                    className="text-gray-600 cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={toggleExpanded}
                >
                    {expanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                </span>
            </div>
        </div>
    );
};

export default Job;


