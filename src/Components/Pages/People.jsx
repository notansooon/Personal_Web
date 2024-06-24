import React from 'react'
import Ben from '../../ProfilePicture/ben.jpg'
import Ali from '../../ProfilePicture/ali.jpg'
import Roshan from '../../ProfilePicture/roshan.jpg'
import Ryan from '../../ProfilePicture/ryan.jpg'
import Raseen from '../../ProfilePicture/Raseen.jpg'
import Gaurav from '../../ProfilePicture/Gaurav.jpg'
import Alex from '../../ProfilePicture/alex.jpg'
import Paul from '../../ProfilePicture/paul.jpg'
import Unknown from '../../ProfilePicture/unknown.jpg'
import Ben_f from '../../ProfilePicture/ben_f.jpg'

import homeImage from '../assets/home.png';  
import { Profile } from '../UI/Profile';




const People = () => {
    return (
        <>
        <div className='text-white h-[350px] w-full relative'>
        <div className=' w-full h-full'>
      
        
        
        
        </div>
      </div>
      <div className=' text-center p-4 md:p-8'>
          <h1 className='text-3xl text-center md:text-5xl font-bold'>Meet The Team</h1>
      </div>
      
      <div className="content">
        <div className="flex flex-wrap justify-center mt-12">
          <Profile user="Ali Habibnia" pic={Ali} />
        </div>
        
        <div className="flex flex-wrap justify-center mt-12">
          <Profile user="Raseen Nirjhar" pic={Raseen} />
          <Profile user="Roshan Sanyal" pic={Roshan} />
          <Profile user="Gaurav Shah" pic={Gaurav} />
        </div>
        
        <div className="flex flex-wrap justify-center mt-12">
          <Profile user="Ryan Bradley" pic={Ryan} />
          <Profile user="Ben Cummings" pic={Ben} />
          <Profile user="Alex Jaimes" pic={Alex} />
        </div>
        
        <div className="flex flex-wrap justify-around mt-12">
          <Profile user="Paul Chau" pic={Paul} />
          <Profile user="William Etzler" pic={Unknown} />
          <Profile user="Ben Facciani" pic={Ben_f} />
        </div>
      </div>
    </>
    );
}

export default People