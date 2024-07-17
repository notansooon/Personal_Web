import React from 'react';
import { useEffect, useRef } from 'react';
import ProjectComp from '../Components/ProjectComp';
import IconButton from "../Components/IconButton";
import {FaLinkedin, FaWhatsapp, FaWeibo, FaFacebook, FaEnvelope} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

function Projects() {
  const widgetContainerRef = useRef(null);
   



  return (
    <>

      <div className='flex flex-col justify-center items-center'>
        <div className='mt-36 flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold'>Current Project</h1>

            <div className='mt-10'>
              <ProjectComp />

            </div>
    
        </div>


        <div className='mt-36 flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold'>Past Project</h1>

            <div className='mt-10'>
              <ProjectComp />

            </div>
    
        </div>

        


      </div>
      

    

    </>
  );
}

export default Projects;



