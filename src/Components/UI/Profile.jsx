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

  const truncatedDescription = truncateString(profile.description, 300);


  return (
    <div className="relative bg-gray-400 p-2 pb-[100px] w-[500px] shadow mb-12 ml-10 mt-[250px] " style={{ borderRadius: '10%' }}>

      <div className='absolute top-[-150px] left-[30%] transform '>
        <img className='m-auto object-fill w-[200px] h-[200px]' style={{ borderRadius: '50%' }} src='https://dataismlab.com/author/ben-cummings/avatar_hu546a42ec33fce78256da8ecdd017fc89_13394_270x270_fill_q75_lanczos_center.jpeg'/>
      </div>



      <div className='text-black'>

      <h1 className='text-4xl text-center bold mt-10 shadow p-2'>Ben Cumming</h1>
      <h2 className=' text-center bold opacity-50' > Derivatives Researcher</h2>
      </div>
      <div>
      <p className='mt-3 p-2'>{truncatedDescription} </p>
      </div>
    </div>
  )
}
