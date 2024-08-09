import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {Button} from "@material-tailwind/react";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

const Job = ({ title, description, status, responsibilities, skills, qual, formLink, jobCode }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const HandleForms = () => {
        window.open(formLink, "_blank");
    };

    return (
        <div className={`p-4 rounded-lg shadow-md bg-white border ${status === 'Active' ? 'border-green-400' : 'border-red-400'}`}>
            <div className="mb-2">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-700">{description}</p>
                <p className="mt-1 text-sm text-black font-black">Job Code: {jobCode}</p>
            </div>

            {expanded && (
                <div>
                    <h3 className="text-lg font-medium mt-5">Responsibilities</h3>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-gray-700">{responsibility}</li>
                        ))}
                    </ul>

                    <h3 className="text-lg font-medium mt-5">Required Skills and Qualifications</h3>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        {skills.map((skill, index) => (
                            <li key={index} className="text-gray-700">{skill}</li>
                        ))}
                    </ul>

                    <h3 className="text-lg font-medium mt-5">Preferred Qualifications</h3>
                    <ul className="list-disc list-inside ml-4 mt-1">
                        {qual.map((qualification, index) => (
                            <li key={index} className="text-gray-700">{qualification}</li>
                        ))}
                    </ul>
                    <Button
                        color="gray"
                        variant="text"
                        size="sm"
                        className="flex items-center"
                        style={{ fontSize: 16 }}
                        onClick={HandleForms} // Handle redirection
                    >
                        Apply Here
                        <ArrowRightIcon
                            className="size-3.5 text-gray-900"
                            strokeWidth={3}
                        />
                    </Button>
                </div>
            )}

            <div className="flex justify-between items-center mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {status === 'Active' ? 'Actively Hiring' : 'Not Hiring'}
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


