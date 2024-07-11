import React from 'react'
import Ben from '../ProfilePicture/ben.jpg'
import Ali from '../ProfilePicture/ali.jpg'
import Roshan from '../ProfilePicture/roshan.jpg'
import Ryan from '../ProfilePicture/ryan.jpg'
import Raseen from '../ProfilePicture/Raseen.jpg'
import Gaurav from '../ProfilePicture/Gaurav.jpg'
import Alex from '../ProfilePicture/alex.jpg'
import Paul from '../ProfilePicture/paul.jpg'
import Unknown from '../ProfilePicture/unknown.jpg'
import Ben_f from '../ProfilePicture/ben_f.jpg'
import Team from '../Components/Profile'







const People = () => {
    return (
        <>
            <Team user="Ali Habibnia" pic={Ali} />
            <div className='flex justify-center space-x-[10%]'>
            <Team user="Ben Cummings" pic={Ben}/>
            <Team />
            <Team />
            </div>
            
          


        </>
    );
}

export default People