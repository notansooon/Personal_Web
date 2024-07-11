
import React from 'react'
import data from '../assets/placement'
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const Placement = () => {

  
   
  return (
    <>
    
    <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative flex justify-center">
  {data.placement.map((image, index) => (
    <div key={index} className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-[160px] p-2 relative inline-block cursor-pointer transform ">
      <img className="w-full h-full " src={image.image} alt={`Image ${index}`} />
    </div>
  ))}
  </div>


  </>
  )
}
