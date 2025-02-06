import React from "react";
import '../Components/utils/experience.css'

const ExperienceComp = ({ title, company, description }) => {

           return (
                      <>
                      <div className="timeline">
                                 <div className="contain">
                                            <div className="textbox">
                                            <h2>{title}</h2>
                                            <h1>{company}</h1>
                                            <p>{description}</p>
                                            </div>
                                            
                                 </div> 

                      </div>
                      </>
           )
}

export default ExperienceComp;