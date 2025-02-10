import React from "react";
import ExperienceComp from "../Components/ExperienceComp";
import { number } from "prop-types";
import NAVAGANT from "../Components/Images/NAVAGANT.png"
import VT from "../Components/Images/VT.jpeg"
import dataism from "../Components/Images/dataism.jpeg"


const jobs = [
           { title: 'Developer',
               job: 'Barrett Capitol',
               description: '',
                number: 1,
                img: {},
                date:"02/2025 - Present"

   
           },
           { title: 'Data Scientist',
               job: 'NAVAGANT',
               description: '',
                number: 0,
                img: NAVAGANT,
                date:'09/2024 - 01/2025'
           ,
           },
           { title: 'Quant Researcher',
               job: 'Dataism At Quantitive Finance',
               description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented and motivated Data Scie',
                number: 1,
                img: dataism,
                date:'07/2024 - Present'
           
           },

           { title: 'Software Developer',
               job: 'SMART @IDPRO VT',
               description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented UI/UX Designer to join our Client Services Sector.' + 
                   'This role involves designing intuitive and engaging user interfaces for advanced financial applications used by leading investment banks.' + 
                   'If you have a passion for creating seamless user experiences and a keen eye for design, we would love to have you on our team.',
                number: 0,
                img: VT,
                date:'01/2024 - Present'
           
           },
           
       ];


const Experience = () => {

           return (

                      <> 
                      {jobs.map((index) => (
                        <ExperienceComp 
                            title={index.title}
                            company={index.job}
                            description={index.description}
                            number={index.number}
                            img={index.img}
                            date={index.date}

                        />
                      ))}
                      
                      </>
           ) 

}

export default Experience;


