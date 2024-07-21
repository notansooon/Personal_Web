import React from 'react';
import '../utils/home.css';
import useScrollAnimation from '../Components/UI/Custom-scroll-hook';




import Placement from '../Components/Placement';


import HomeHero from "../Components/Home-Hero";
import NewsWireCarousel from "../Components/NewsWireCarousel";
import Sector from "../Components/Sector";
import {Typography} from "@material-tailwind/react";

const Home = () => {

    const animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const [sectionRef1, controls1] = useScrollAnimation();
    const [sectionRef2, controls2] = useScrollAnimation();
    const [sectionRef3, controls3] = useScrollAnimation();

    return (
        <>
            <div className="contain fadeInUp">
                <HomeHero/>


                <section className='mt-32'>
                    <Typography variant='h3' className='text-center'>
                        The sectors that we work on
                    </Typography>
                    <Sector clas></Sector>
                </section>

                <section
                    className="relative mb-16 flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat fadeInUp bg-gray-200">
                    <div className="contain px-4 md:px-16 lg:px-24 py-14">
                        <div className="space-y-10">
                            <NewsWireCarousel />
                        </div>
                        
                    </div>
                </section>


                

                <div>
                    <Placement/>
                </div>
            </div>
        </>
    );
};

export default Home;







