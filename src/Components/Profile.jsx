import React from 'react';
import data from '../assets/profile.json';
import '../Components/utils/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Team = ({ user, pic }) => {

    //const profile = data.profile.find(profile => profile.name === user);
    const title = data.profile.find(profile => profile.name === user);

 

    return (
        <>
            <div>
                <div className="relative flex justify-center ">
                    <div className="hexagon">

                        <img className="object-fill h-[100%] w-[100%] rotate-90" src={pic}/>
                        
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-1 text-black">
                        <h1
                            className="text-4xl justify-center font-bold">{user}</h1>
                        {title && (
                            <h2 className="text-2xl font-semibold opacity-75">{title.Title}</h2>)}
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

    //const profile = data.profile.find(profile => profile.name === user);
    const title = data.profile.find(profile => profile.name === user);

 

    return (
        <>
            <div>

                <div className="relative flex justify-center ">
                    <div className="hexagon">

                        <img className="object-fill h-[100%] w-[100%] rotate-90" src={pic}/>
                        
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-1 text-black">
                        <h1
                            className="text-4xl justify-center font-bold">{user}</h1>
                        {title && (
                            <h2 className="text-2xl font-semibold opacity-75">{title.Title}</h2>)}
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



