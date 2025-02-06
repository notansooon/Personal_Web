import React from "react";
import ExperienceComp from "../Components/ExperienceComp";


const jobs = [
           { title: 'Developer',
               job: 'Barrett Capitol',
               description: 'Are you passionate about developing cutting-edge trading algorithms and driving innovation ' +
                   'in the field of quantitative finance. Join our dynamic team at the Dataism Laboratory for Quantitative ' +
                   'Finance at Virginia Tech as the Head of Algorithmic Development. This role is open to both graduate and ' +
                   'undergraduate students pursuing degrees in Computational Modeling and Data Analytics (CMDA), ' +
                   'Computer Science, Finance, Financial Technology, and related majors.\n',
   
           },
           { title: 'Data Scientist',
               job: 'NAVAGANT',
               description: 'Are you enthusiastic about developing sophisticated trading algorithms and contributing to advancements in quantitative finance?' + 
                   'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented and motivated Algorithmic Developer to assist the Head of Algorithmic Development.' + 
                   'This role is open to both graduate and undergraduate students pursuing degrees in Computational Modeling and Data Analytics (CMDA), Computer Science, Finance, Financial Technology, and related majors.'
           ,
           },
           { title: 'Quant Researcher',
               job: 'Dataism At Quantitive Finance',
               description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented and motivated Data Scientist to join our Client Services Sector.' + 
                   'In this role, you will work directly with investment banks to design, develop, and implement advanced data-driven solutions that enhance their strategic decision-making and operational efficiency.' +
                   'If you are passionate about applying data science techniques to solve complex financial challenges, we want to hear from you.'
           ,
           },

           { title: 'Software Developer',
               job: 'SMART @IDPRO VT',
               description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented UI/UX Designer to join our Client Services Sector.' + 
                   'This role involves designing intuitive and engaging user interfaces for advanced financial applications used by leading investment banks.' + 
                   'If you have a passion for creating seamless user experiences and a keen eye for design, we would love to have you on our team.'
           ,
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

                        />
                      ))}
                      
                      </>
           ) 

}

export default Experience;


