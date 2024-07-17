import React from 'react';
import { FaLinkedin, FaWhatsapp, FaWeibo, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ProjectComp = ({ status, title, description, roles }) => {
    return (
        <div className='border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white'>
            <h2 className='text-2xl font-semibold mb-4'>{title}</h2>
            <p className='text-gray-700 mb-4'>{description}</p>
            <p className={`text-sm ${status === 'ongoing' ? 'text-green-500' : 'text-gray-500'}`}>
                {status === 'ongoing' ? 'Ongoing Project' : 'Completed Project'}
            </p>
            {status === 'ongoing' && roles && (
                <div className='mt-4'>
                    <p className='text-gray-700 mb-2'>Roles Needed:</p>
                    <ul className='list-disc list-inside mb-4'>
                        {roles.map((role, index) => (
                            <li key={index} className='text-gray-700'>{role}</li>
                        ))}
                    </ul>
                    <p className='text-gray-700 mb-2'>Contact for more information:</p>
                    <div className='flex space-x-2'>
                        <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200'>
                            <FaLinkedin />
                        </button>
                        <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200'>
                            <FaWhatsapp />
                        </button>
                        <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200'>
                            <FaWeibo />
                        </button>
                        <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200'>
                            <FaFacebook />
                        </button>
                        <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200'>
                            <FaEnvelope />
                        </button>
                        <button className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200'>
                            <FaXTwitter />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectComp;


