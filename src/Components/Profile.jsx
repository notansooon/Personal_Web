import React from 'react';
import data from '../assets/data/profile.json';

import '../Components/utils/styles.css';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Ben from '../ProfilePicture/ben.jpg'
import Ali from '../ProfilePicture/ali.jpg'
import Roshan from '../ProfilePicture/roshan.jpg'
import Ryan from '../ProfilePicture/ryan.jpg'
import Raseen from '../ProfilePicture/Raseen.jpg'
import Gaurav from '../ProfilePicture/Gaurav.jpg'
import Alex from '../ProfilePicture/alex.jpg'
import Paul from '../ProfilePicture/paul.jpg'
import Unknown from '../ProfilePicture/unknown.jpg'



export const HeroTextTeam = () => {
    return (
        <div className="mt-5 lg:mt-0">
            <div className='w-full'>
            <h2 className="about mb-5 leading-tight -tracking-tighter text-3xl font-bold text-dark sm:text-[40px]/[48px]">
               Meet Our Team
            </h2>

            </div>
            
            
        </div>
    );
};

export const Profile = ({ user, pic }) => {
    const profile = data.profile.find(profile => profile.name === user);

    return (
        <div className="flex flex-col lg:flex-row justify-center space-x-10">
            <div className='mt-[-150px] relative'>
                <div className="flex justify-center">
                    <div className="aspect-square ">
                        <img className="object-cover rounded-lg h-[100%] w-[100%] size-[70%] mt-[50%]" src={Ben} alt={`${user}'s profile pic`} />
                    </div>
                </div>
                <div className="flex tracking-tighter flex-col items-center justify-center mt-1 space-y-5 text-black">
                    <h1 className="text-3xl lg:text-4xl font-bold">{user}</h1>
                    {profile && (
                        <h2 className="text-xl lg:text-xl tracking-tight  font-semibold opacity-75">{profile.Title}</h2>
                    )}
                    
                </div>
                <div className="flex justify-center space-x-6 mt-3">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:z-50 hover:scale-150 duration-500" />
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="hover:z-50 hover:scale-150 duration-500" />
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8 h-[100%] bg-opacity-70">
                <div className='max-w-3xl mx-auto min-h-96 '>
                    <p className="text-base lg:text-lg tracking-wider leading-relaxed">{profile.About}</p>

                    <div className='flex justify-around h-[100%] mt-10'>
                        <div>
                            <h1 className='font-bold text-2xl lg:text-3xl'>Interests</h1>
                            {profile.interest && profile.interest.map((interest, index) => (
                                <div key={index} className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0L7.293 10.414a1 1 0 011.414-1.414L12 12.586l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 8.707 7.293a1 1 0 00-1.414 1.414L12.293 12l6-6-6-6a1 1 0 010-1.414z" />
                                    </svg>
                                    <p className="text-base lg:text-lg">{interest}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h1 className='font-bold text-2xl lg:text-3xl'>Education</h1>
                            {profile.education && profile.education.map((education, index) => (
                                <div key={index} className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0L7.293 10.414a1 1 0 011.414-1.414L12 12.586l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 8.707 7.293a1 1 0 00-1.414 1.414L12.293 12l6-6-6-6a1 1 0 010-1.414z" />
                                    </svg>
                                    <p className="text-base lg:text-lg">{education}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


