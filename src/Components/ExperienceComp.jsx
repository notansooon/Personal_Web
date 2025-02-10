import React from "react";
import '../Components/utils/experience.css'

const ExperienceComp = ({ title, company, description, number, img, date }) => {

           return (
                      <>
                      <div className="timeline">
                                 <div className={`${ number === 0 ? "right-container contain": "left-container contain"}`}>
                                     <img src={img} className={`${number === 0 ? "image-right" : "image-left"}`}/>
                                     <div className="textbox">

                                     <h2 className="text-xl font-bold">{title}</h2>
                                     <small>{date}</small>
                                     <h1>{company}</h1>
                                     <p>{description}</p>
                                     </div>
                                            
                                 </div> 

                      </div>
                      </>
           )
}

export default ExperienceComp;