import React from 'react';
import img from '../assets/Images/image.jpg'
import {IconButton, Typography} from "@material-tailwind/react";
const HomeHero = () => {
    return (
        <div className="relative min-h-screen w-full bg-[url('https://www.vt.edu/content/vt_edu/en/admissions/undergraduate/visit/campus-photo-tour/jcr:content/content/adaptiveimage_926934412.transform/xl-medium/image.jpg')] bg-bottom bg-cover bg-no-repeat">
            <div className="absolute inset-0 h-full w-full bg-black/70" />
            <div className="grid min-h-screen px-8">
                <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                    <Typography
                        variant="h1"
                        color="white"
                        className="text-4xl !leading-snug lg:text-5xl"
                    >
                        Work with an amazing
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mt-4 mb-6 w-full md:max-w-full lg:mb-12 lg:max-w-3xl"
                    >
                        We&apos;re constantly trying to express ourselves and actualize
                        our dreams. If you have the opportunity to play this game
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color="white"
                        className="mt-1 mb-7 font-normal uppercase"
                    >
                        Connect with us on:
                    </Typography>
                    <div className="flex !gap-4">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeHero

