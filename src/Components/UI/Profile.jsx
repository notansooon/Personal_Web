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
    <div className=" bg-white p-2 pb-[200px] w-[300px] shadow-lg mb-12 ml-10 mt-10">
      <img className='m-auto' src='https://dataismlab.com/author/ben-cummings/avatar_hu546a42ec33fce78256da8ecdd017fc89_13394_270x270_fill_q75_lanczos_center.jpeg'/>
      <p className='mt-3 p-2'>{truncatedDescription} </p>
    </div>
  )
}
