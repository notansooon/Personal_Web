import React from 'react';
import data from '../assets/profile.json';

import '../Components/utils/styles.css';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Team = ({ user, pic }) => {

    const navigate = useNavigate();

    const profile = data.profile.find(profile => profile.name === user);
    //const title = data.profile.find(profile => profile.name === user);

    const clickHandler = (name) => {
       
        navigate(`/ProfilePage/${name}`);
        
        
    } 

 

    return (
        <>
            <div>
                <div className="relative flex justify-center" onClick={() => clickHandler(profile.name)}>
                    <div className="hexagon">

                        <img className="object-fill h-[100%] w-[100%] rotate-90" src={pic}/>
                        
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-1 text-black">
                        <h1
                            className="text-4xl justify-center font-bold">{user}</h1>
                        {profile && (
                            <h2 className="text-2xl font-semibold opacity-75">{profile.Title}</h2>)}
                </div>
                <div className="flex justify-center space-x-6 mt-3">
                            <FontAwesomeIcon icon={faLinkedin} size="2x"
                                                className="hover:z-50 hover:scale-150 duration-500" />
                            <FontAwesomeIcon icon={faEnvelope} size="2x"
                                                className="hover:z-50 hover:scale-150 duration-500" />
                </div>
            </div>
        </>
    );
}

export default Team;

export const Profile = ({ user, pic }) => {

    const profile = data.profile.find(profile => profile.name === user);
    //const title = data.profile.find(profile => profile.name === user);

 

    return (
        <>
           <div className="flex justify-between">
         
            <div className='mt-[-300px] relative'>
                <div className="flex justify-center">
                    <div className="hexagon">
                        <img className="object-fill h-[100%] w-[100%] rotate-90" src={pic} alt={`${user}'s profile pic`} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-1 space-y-5 text-black">
                    <h1 className="text-4xl justify-center font-bold">{user}</h1>
                    {profile && (
                        <h2 className="text-2xl font-semibold opacity-75">{profile.Title}</h2>
                    )}
                    <h1 className="text-2xl justify-center">College</h1>
                </div>
                <div className="flex justify-center space-x-6 mt-3">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:z-50 hover:scale-150 duration-500" />
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="hover:z-50 hover:scale-150 duration-500" />
                </div>
            </div>

           
            <div className='relative text-black w-full p-4 text-2xl break-words whitespace-normal'>
                <p>{profile.About}</p>

                <div className='text-3xl ml-[100px] flex space-x-80'>
                    <h1 className='font-bold mt-20'>Interests</h1>
                    <h1 className='font-bold mt-20'>Education</h1>
                </div>

                <div className='text-2xl ml-[100px] flex space-x-24'>
                    <div>
                        {profile.interest && profile.interest.map((interest, index) => (
                            <p key={index}>• {interest}</p>
                        ))}
                    </div>

                    <div className=''>
                        <div>
                            {profile.education && profile.education.map((education, index) => (
                                <p key={index}>• {education}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


