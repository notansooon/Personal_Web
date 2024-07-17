import React from 'react';
import ProjectComp from '../Components/ProjectComp';

function Projects() {
  return (
      <div className='flex flex-col justify-center items-center p-8'>
        <div className='w-full max-w-6xl'>
          <div className='mt-36'>
            <h1 className='text-4xl font-bold text-center mb-10'>Current Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <ProjectComp status="ongoing" title="Ongoing Project 1" description="Detailed description of ongoing project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." roles={["UI/UX Designer", "Software Engineer"]} />
              <ProjectComp status="ongoing" title="Ongoing Project 2" description="Detailed description of ongoing project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." roles={["Data Scientist", "Backend Developer"]} />
            </div>
          </div>

          <div className='mt-36'>
            <h1 className='text-4xl font-bold text-center mb-10'>Past Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <ProjectComp status="completed" title="Completed Project 1" description="Detailed description of completed project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." />
              <ProjectComp status="completed" title="Completed Project 2" description="Detailed description of completed project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac erat vitae libero condimentum vehicula." />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Projects;





