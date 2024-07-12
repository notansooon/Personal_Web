import React from 'react'
import { useParams } from 'react-router-dom'
import { Profile, Info } from '../Components/Profile';

import data from '../assets/profile.json';
import '../Components/utils/styles.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const ProfilePage = () => {

  const {name} = useParams();  

  return (
    <>
      <div className='mb-[300px]'>
        <div className=' ml-[-70%]  '>
          <Profile user={name} />
          

        </div>
        <div className='mt-[-30%] ml-[30%]'>
          <Info user={name} />
        </div>

      </div>
      
      

    </>
  )
}

export default ProfilePage