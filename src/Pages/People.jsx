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
import {motion} from 'framer-motion'







const People = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="contain"
            >
                <div className="container mx-auto p-4">
                    <h1 className='flex justify-center font-bold text-4xl mt-20'>Meet The Team</h1>
                    <div className="flex justify-center mb-4">
                        <Team user="Ali Habibnia" pic={Ali}/>
                    </div>
                    <div className="flex justify-center mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-40 justify-items-center">
                            <Team user="Raseen Nirjhar" pic={Raseen}/>
                            <Team user="Roshan Sanyal" pic={Roshan}/>
                            <Team user="Gaurav Shah" pic={Gaurav}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                        <Team user="Ben Cummings" pic={Ben}/>
                        <Team user="Ryan Bradley" pic={Ryan}/>
                        <Team user="Alex Jaimes" pic={Alex}/>
                        <Team/>
                    </div>
                </div>

            </motion.div>


        </>
    );
}

export default People