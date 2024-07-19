import React from 'react';
import { FaLinkedin, FaWhatsapp, FaWeibo, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import IconButton from "./IconButton";

const ProjectComp = ({ status, title, description, roles }) => {
    return (
        <div className='border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadowduration-300 bg-white' style={{border: status ==='ongoing' ? '1px solid green' : '1px solid red'}}>
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
                        <IconButton
                            color='bg-blue-500'
                            text='LinkedIn'
                            className='bg-blue'
                        >
                            <FaLinkedin className='text-white w-6 h-6' />
                        </IconButton>

                        <IconButton
                            color='bg-green-600'
                            text='Whatsapp'

                        >
                            <FaWhatsapp className='text-white w-6 h-6' />
                        </IconButton>

                        <IconButton
                            color='bg-blue-800'
                            text='Facebook'
                        >
                            <FaFacebook className='text-white w-6 h-6' />
                        </IconButton>

                        <IconButton
                            color='bg-black'
                            text='Twiiter'

                        >
                            <FaXTwitter className='text-white w-6 h-6' />
                        </IconButton>

                        <IconButton
                            color='bg-red-600'
                            text='Weibo'
                        >
                            <FaWeibo className='text-white w-6 h-6' />
                        </IconButton>

                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectComp;


