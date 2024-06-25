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

            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className=' text-center p-4 md:p-8'>
                <h1 className='text-white text-3xl text-center md:text-5xl font-bold'>Meet The Team</h1>
            </div>

            <div className="content">
                <div className="flex flex-wrap justify-center mt-12">
                    <Profile user="Ali Habibnia" pic={Ali}/>
                </div>

                <div className="flex flex-wrap justify-center mt-12">
                    <Profile user="Raseen Nirjhar" pic={Raseen}/>
                    <Profile user="Roshan Sanyal" pic={Roshan}/>
                    <Profile user="Gaurav Shah" pic={Gaurav}/>
                </div>

                <div className="flex flex-wrap justify-center mt-12">
                    <Profile user="Ryan Bradley" pic={Ryan}/>
                    <Profile user="Ben Cummings" pic={Ben}/>
                    <Profile user="Alex Jaimes" pic={Alex}/>
                </div>

                <div className="flex flex-wrap justify-around mt-12">
                    <Profile user="Paul Chau" pic={Paul}/>
                    <Profile user="William Etzler" pic={Unknown}/>
                    <Profile user="Ben Facciani" pic={Ben_f}/>
                </div>
            </div>
        </>
    );
}

export default People