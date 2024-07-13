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
            <div className="container mx-auto p-4">
                <div className="flex justify-center mb-4">
                <Team user="Ali Habibnia" pic={Ali} />
                </div>
                <div className="flex justify-center mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                        <Team user="Ben Cummings" pic={Ben} />
                        <Team user="Gaurav Shah" pic={Gaurav} />
                        <Team user="Gaurav Shah" pic={Gaurav} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                <Team user="Ben Cummings" pic={Ben} />
                <Team />
                <Team />
                <Team />
                </div>
            </div>
            
          


        </>
    );
}

export default People