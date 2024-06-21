import React from 'react'

import { Profile } from '../UI/Profile';




const People = () => {

  

  return (
    <>

    
<div className="flex flex-nowrap overflow-x-auto ml-[6%]">
      <Profile user={"Ben Cummings"} />
      <Profile user={"Ben Cummings"} />
      <Profile user={"Ben Cummings"} />
      
    </div>
    </>
    
  )
}

export default People