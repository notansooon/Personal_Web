import React from 'react'
import Ben from '../../ProfilePicture/ben.jpg'
import Ali from '../../ProfilePicture/ali.jpg'
import Roshan from '../../ProfilePicture/roshan.jpg'
import Ryan from '../../ProfilePicture/ryan.jpg'
import Raseen from '../../ProfilePicture/Raseen.jpg'
import Gaurav from '../../ProfilePicture/Gaurav.jpg'
import Home from '../profile.json'
import { Profile } from '../UI/Profile';




const People = () => {

  

  

  return (
    <>

    
    <div className="flex  overflow-x-auto ml-[6%]">
      <Profile user={"Ali Habibnia"} pic={Ali} />
      <Profile user={"Roshan Sanyal"} pic={Roshan}/>
      <Profile user={"Ben Cummings"} pic={Ben}/>
      
      
    </div>
    <div className="flex  overflow-x-auto ml-[6%]">
      <Profile user={"Gaurav Shah"} pic={Gaurav}/>
      <Profile user={"Raseen Nirjhar"} pic={Raseen}/>
      <Profile user={"Ryan Bradley"} pic={Ryan}/>
      
      
    </div>
    </>
    
  )
}

export default People