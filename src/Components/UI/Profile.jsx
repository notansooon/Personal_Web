import React from 'react'
import data from '../profile.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Profile = ({user, pic}) => {

  const profile = data.profile.find(profile => profile.name === user);

  const truncateString = (str, length) => {

    if(str.length > length) {
        return str.slice(0, length) + "..."
    }
    else {
      return str
    }
  }

  const truncatedDescription = truncateString(profile.description, 100);


  return (
    <div className="relative bg-gray-400 p-2 pb-[10px] w-[500px] bg-gradient-to-t from-cyan-500 to-black shadow mb-12 ml-10 mt-[250px] hover:z-50 hover:scale-125  cursor-pointer " style={{ borderRadius: '8px', transition: "400ms" }}>
      
      <div className='absolute top-[-150px] left-[30%] transform '>
        
        <img className='m-auto object-fill w-[200px] h-[200px]' style={{ borderRadius: '50%' }} src={pic}/>
      </div>



      <div className='text-black'>

      <h1 className='text-4xl text-center bold mt-10 shadow p-2'>{user}</h1>
      <h2 className=' text-2xl text-center bold opacity-50' > {profile.Title}</h2>
      <div className="flex justify-center space-x-[20%] mt-3">
      <FontAwesomeIcon icon={faLinkedin} size="2x" className='hover:z-50 hover:scale-150 duration-500'/>
      <FontAwesomeIcon icon={faEnvelope} size="2x" className='hover:z-50 hover:scale-150 duration-500'/>
      </div>
      
      </div>
      <div>
      <p className='mt-3 p-2'>{truncatedDescription} </p>
      </div>
    </div>
  )
}
