import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectComp from '../Components/ProjectComp';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { animate } from 'framer-motion';

function Projects() {
  const {ref: myRef, inView: visible} = useInView({triggerOnce: true, threshold: 1})
  const {ref: cRef, inView: Avisible} = useInView({triggerOnce: true, threshold: 1})
  const {ref: ARef, inView: Cvisible} = useInView({triggerOnce: true, threshold: 1})
  

  


  return (
    <>

     
      

      
      <div className='relative flex flex-col justify-center items-center p-8'>

        <header className='relative h-[400px]  w-full overflow-hidden '>

          <div className='absolute top-[5%] p-4 md:p-8 text-black'>
            <h1 className='text-3xl md:text-5xl'>Project Blogs</h1>
            <p className='text-5xl mt-6 ml-12'>Where Ambition Begins...</p>
          </div>


        </header>


        <div className='w-screen h-28 bg-gray-600 text-3xl text-white'>
          <ul className='flex flex-row justify-around align-middle items-center'>
            <li>Algo</li>
            <li>Client</li>
            <li>Academic</li>
          </ul>

        </div>


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
              <ProjectComp status="ongoing" title="Ongoing Project 1" description="Detailed description of ongoing project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." roles={["UI/UX Designer", "Software Engineer"]} />
              <ProjectComp status="ongoing" title="Ongoing Project 2" description="Detailed description of ongoing project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." roles={["Data Scientist", "Backend Developer"]} />
            </div>
          </div>


          

          
        </div>
      </div>
    </>
  );
}

export default Projects;





