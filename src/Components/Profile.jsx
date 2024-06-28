import React from 'react';
import data from '../assets/profile.json';
import '../Pages/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Profile = ({ user, pic }) => {

    const profile = data.profile.find(profile => profile.name === user);

    const truncateString = (str, length) => {
        return str.length > length ? str.slice(0, length) + "..." : str;
    }

    const truncatedDescription = truncateString(profile.description, 100);

    return (
        <>
          <div class="card">
          <div class="card-border-top">
          </div>
          <div class="img">
          <img
                    class='img'
                    src={pic} alt={`${user}'s profile`} />
          </div>
          <span> {user}</span>
          <p class="job">{profile.Title}</p>
          <div className=" space-x-10 mt-5 flex justify-center duration-500" >
          <FontAwesomeIcon icon={faLinkedin} size="3x"
            className="hover:z-50 hover:scale-150"/>
          <FontAwesomeIcon icon={faEnvelope} size="3x"
            className="hover:z-50 hover:scale-150"/>
            </div>
          
          </div>
        
        </>


        /*
        <div
            className="relative bg-gray-400 p-4 pb-10 max-w-md bg-gradient-to-t from-cyan-500 to-black shadow-lg mb-12 mx-auto mt-16 hover:z-50 hover:scale-105 cursor-pointer rounded-lg transition-transform duration-400">

            <div
                className="absolute -top-20 left-1/2 transform -translate-x-1/2">
                <img
                    className="m-auto object-cover w-40 h-40 rounded-full"
                    src={pic} alt={`${user}'s profile`} />
            </div>

            <div className="text-black text-center mt-24">
                <h1
                    className="text-4xl font-bold shadow p-2">{user}</h1>
                <h2 className="text-2xl font-semibold opacity-75">{profile.Title}</h2>
                <div className="flex justify-center space-x-6 mt-3">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"
                                     className="hover:z-50 hover:scale-150 duration-500" />
                    <FontAwesomeIcon icon={faEnvelope} size="2x"
                                     className="hover:z-50 hover:scale-150 duration-500" />
                </div>
            </div>

            <div
                className="mt-3 p-2">
                <p>{truncatedDescription}</p>
            </div>
        </div> 
        */
    );
}

export default Profile;

