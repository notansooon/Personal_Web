import React from 'react';
import img from '../assets/Images/1713572060948.jpeg';
import {IconButton, Typography} from "@material-tailwind/react";
import Typewriter from "typewriter-effect";
const HomeHero = () => {
    return (
        <div className="relative min-h-screen w-full bg-bottom bg-cover bg-no-repeat"
             style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute inset-0 h-full w-full bg-black/70" />
            <div className="grid min-h-screen px-8">
                <div className="container relative z-10 my-auto mx-auto grid text-left">
                    <Typography
                        variant="h1"
                        color="white"
                        className="text-4xl font-serif !leading-snug lg:text-5xl"
                    >
                     Welcome To Dataism
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mt-4 mb-6 w-full md:max-w-full lg:mb-12 lg:max-w-3xl"
                    >
                        Leveraging dataism, which emphasizes the importance of data in decision-making, to harness the
                        power of AI/Machine Learning, Big Data, and High Performance Computing (HPC) in finance. By
                        integrating these advanced technologies, we aim to revolutionize financial analysis,
                        prediction, and automation for more accurate and efficient outcomes
                    </Typography>

                    <div className="flex !gap-4">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeHero

