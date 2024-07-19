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
import { HeroTextTeam } from '../Components/Profile'
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
                <div className="w-full">
                    

                    <div className=" top-0 overflow-hidden pt-10 pb-12 lg:pt-[50px] lg:pb-[90px] bg-transparent dark:bg-dark">
                        <div className='flex justify-end '>
                            <HeroTextTeam />

                        </div>
                    </div>

                    <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">our team</h1>

        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Each member brings unique skills and perspectives, working collaboratively to achieve excellence. Get to know the people behind our success and discover the stories that inspire our journey.
        </p>

        <div class="flex items-center justify-center">
            <div class="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
                <button class="px-4 py-2 text-sm font-medium text-white capitalize bg-blue-600 md:py-3 rounded-xl md:px-12">design</button>
                <button class="px-4 py-2 mx-4 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12">development</button>
                <button class="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12">marketing</button>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center size-5/12">
                <img className="object-cover w-full rounded-xl aspect-square" src={Ali} />

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Name</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">Yes</p>

                
            </div>

            <div class="flex flex-col items-center size-5/12">
                <img class="object-cover w-full rounded-xl aspect-square" src={Ben} />

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Name</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300">Yes</p>

                
            </div>

            <div class="flex flex-col items-center size-5/12">
                <img class="object-cover w-full rounded-xl aspect-square" src={Raseen} />

                <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Bob Rob</h1>

                <p class="mt-2 text-gray-500 capitalize dark:text-gray-300"></p>

                
            </div>
        </div>
    </div>
</section>

    

                </div>

            </motion.div>


        </>
    );
}

export default People