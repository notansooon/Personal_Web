import React from 'react'
import data from '../profile.json';

export const Profile = ({user}) => {

  const profile = data.profile.find(profile => profile.name === user);

  const truncateString = (str, length) => {

    if(str.length > length) {
        return str.slice(0, length) + "..."
    }
    else {
      return str
    }
  }

  const truncatedDescription = truncateString(profile.description, 200);


  return (
    <div className="relative bg-white p-2 pb-[200px] w-[500px] shadow-lg mb-12 ml-10 mt-[250px] ">

      <div className='absolute top-[-150px] left-[30%] transform '>
        <img className='m-auto object-fill w-[200px] h-[200px]' style={{ borderRadius: '50%' }} src='https://dataismlab.com/author/ben-cummings/avatar_hu546a42ec33fce78256da8ecdd017fc89_13394_270x270_fill_q75_lanczos_center.jpeg'/>
      </div>



      <div className='text-black'>

      <p className='text-4xl text-center mt-20'>Ben Cumming</p>
      </div>
      <div>
      <p className='mt-3 p-2'>{truncatedDescription} </p>
      </div>
    </div>
  )
}
