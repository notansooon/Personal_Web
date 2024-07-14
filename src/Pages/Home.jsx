import React from 'react';
import '../utils/home.css';
import Sponsor from "../Components/Sponsor";
import Example from "../Components/subscribe";
import NewsSection from "../Components/news-section";
import {FileUpload} from "../Components/forms";
import subscribe from "../Components/subscribe";
import Subscribe from "../Components/subscribe";
import { Placement } from '../Components/Placement';


const Home = () => {
    return (


        <>
            <div className="contain">
                <div className='content-container' >
                    <div className="text-container">
                        <h1 className="landing-page-header">Dataism Laboratory for Quantitative Finance</h1>
                        <div className=' text-2xl mt-10 items-center justify-center flex flex-col'>
                            <p>The Dataism Lab at Virginia Tech is an interdisciplinary hub focused on advancing</p>
                            <p>Quantitative Finance and Econometrics through cutting-edge technologies. Our </p>
                            <p> mission centers on exploring AI/Machine Learning, Big Data Analytics, and High Performance</p>
                            <p>Computing for transformative applications in this field.</p>


                        </div>
                        

                    </div>

                </div>
                <div>
                    <h1>Stay Updated </h1>
                    <NewsSection />


                </div>
                

                


            </div>
           


            <Placement />

          

            
        </>







    );
};


export default Home;




