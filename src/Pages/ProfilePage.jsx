import React from 'react'
import { useParams } from 'react-router-dom'
import { Profile, Info } from '../Components/Profile';

import data from '../assets/data/profile.json';
import '../Components/utils/styles.css';
import {motion} from 'framer-motion'

const ProfilePage = () => {

  const {name} = useParams();  

  return (
    <>
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="contain"
        >
            <div className='mb-[300px] mt-36'>

                <Profile user={name}/>


            </div>

        </motion.div>


    </>
  )
}

export default ProfilePage