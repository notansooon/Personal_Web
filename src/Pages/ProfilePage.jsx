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
      <div className='mb-[300px] mt-36'>
       
          <Profile user={name} />


      </div>
      
      

    </>
  )
}

export default ProfilePage