import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectComp from '../Components/ProjectComp';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { animate } from 'framer-motion';
import {Typography} from "@material-tailwind/react";

function Projects() {
  const {ref: myRef, inView: visible} = useInView({triggerOnce: true, threshold: 1})
  const {ref: cRef, inView: Avisible} = useInView({triggerOnce: true, threshold: 1})
  const {ref: ARef, inView: Cvisible} = useInView({triggerOnce: true, threshold: 1})
  

  


  return (
    <>

      <div className='relative flex flex-col justify-center items-center p-8'>

        <header className="bg-white p-8">
          <div className="w-w-full container mx-auto pt-12 lg:pb-16 pb-8 text-center">
            <Typography
                variant="h1"
                color="blue-gray"
                className="mx-auto w-full text-3xl !leading-tight lg:max-w-3xl lg:text-5xl"
            >
              Our company mission is to lead the web development.
            </Typography>
            <Typography
                variant="lead"
                className="mx-auto lg:mt-8 mt-4 lg:mb-12 mb-6 !text-gray-500 lg:w-8/12"
            >
              The time is now for it to be okay to be great. People in this world
              shun people for being great. For being a bright color.
            </Typography>
          </div>
          <div className="container mx-auto">
          </div>
        </header>

        <div className='w-screen max-w-6xl mt-10  '>


          <div className='text-3xl  '>
            <h1 ref={cRef}>
              <span className={`${Avisible ? 'render' : ''}`} data-text='Algorithmic Development'>
                Algorithmic Development
              </span>
            </h1>
          </div>
          <div className='w-full h-5 border-b-4 border-black '></div>
          <div className='mt-2'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <ProjectComp status="ongoing" title="Ongoing Project 1"
                           description="Detailed description of ongoing project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula."
                           roles={["UI/UX Designer", "Software Engineer"]}/>
              <ProjectComp status="ongoing" title="Ongoing Project 2"
                           description="Detailed description of ongoing project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula."
                           roles={["Data Scientist", "Backend Developer"]}/>
            </div>
          </div>


          <div className='text-3xl mt-10 '>
          <h1 ref={ARef}> 
              <span className={`${Cvisible ? 'render' : ''}`} data-text='Client Service'>
                Client Service
              </span>
            </h1>
          </div>
          <div className='w-full h-5 border-b-4 border-black '></div>
          <div className='mt-2'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <ProjectComp status="ongoing" title="Ongoing Project 1"
                           description="Detailed description of ongoing project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." roles={["UI/UX Designer", "Software Engineer"]} />
              <ProjectComp status="ongoing" title="Ongoing Project 2" description="Detailed description of ongoing project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." roles={["Data Scientist", "Backend Developer"]} />
            </div>
          </div>


          
          <div className='text-3xl mt-10 '>
            <h1 ref={myRef}> 
              <span className={`${visible ? 'render' : ''}`} data-text='Academic Research'>
                Academic Research
              </span>
            </h1>
          </div>
          <div className='w-full h-5 border-b-4 border-black'></div>
          <div className='mt-2'>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <ProjectComp status="ongoing" title="Ongoing Project 1" description="Detailed description of ongoing
              project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." roles={["UI/UX Designer", "Software Engineer"]} />
              <ProjectComp status="ongoing" title="Ongoing Project 2" description="Detailed description of ongoing
               project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." roles={["Data Scientist", "Backend Developer"]} />
            </div>
          </div>


          

          
        </div>
      </div>
    </>
  );
}

export default Projects;





