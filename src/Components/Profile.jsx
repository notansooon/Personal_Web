import React from 'react';
import data from '../assets/data/profile.json';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Ben from '../ProfilePicture/ben.jpg';
import '../Components/utils/styles.css';

export const HeroTextTeam = () => (
    <div className="mt-5 lg:mt-0">
        <div className="w-full text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet Our Team
            </h2>
        </div>
    </div>
);

export const Profile = ({ user, pic }) => {
    const profile = data.profile.find(profile => profile.name === user);
    const profilePic = pic || Ben; // Default to Ben's picture if pic is not provided

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center space-y-6 lg:space-y-0 lg:space-x-10 p-4 bg-gray-100 rounded-lg shadow-lg max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
                <div className="w-32 h-32 lg:w-48 lg:h-48">
                    <img className="object-cover rounded-full w-full h-full" src={profilePic} alt={`${user}'s profile pic`} />
                </div>
                <div className="text-center mt-4">
                    <h1 className="text-xl font-bold">{user}</h1>
                    {profile && (
                        <h2 className="text-lg font-semibold text-gray-600">{profile.Title}</h2>
                    )}
                </div>
                <div className="flex justify-center space-x-4 mt-3 text-gray-600">
                    <a href={profile?.linkedin} aria-label="LinkedIn" className="hover:text-blue-600">
                        <FaLinkedin size={20} />
                    </a>
                    <a href={`mailto:${profile?.email}`} aria-label="Email" className="hover:text-red-600">
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-2/3">
                <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                    {profile?.About}
                </p>
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800">Interests</h3>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        {profile?.interest?.map((interest, index) => (
                            <li key={index} className="text-gray-700">{interest}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-800">Education</h3>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        {profile?.education?.map((education, index) => (
                            <li key={index} className="text-gray-700">{education}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

