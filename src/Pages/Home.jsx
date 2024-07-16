import React from 'react';
import '../utils/home.css';
import Sponsor from "../Components/Sponsor";
import {FileUpload} from "../Components/forms";
import Subscribe from "../Components/Newsletter";
import { Placement } from '../Components/Placement';
import NewsWire from '../Components/NewsWire'


const Home = () => {
    return (


        <>
            
            <div className="contain">
                <div className='content-container' >
                    <div className="text-container">
                        <h1 className="landing-page-header">Dataism Laboratory for Quantitative Finance</h1>
                        <div className=' text-2xl mt-10 items-center justify-center flex flex-col border-b-4 pb-10'>
                            <p>The Dataism Lab at Virginia Tech is an interdisciplinary hub focused on advancing</p>
                            <p>Quantitative Finance and Econometrics through cutting-edge technologies. Our </p>
                            <p> mission centers on exploring AI/Machine Learning, Big Data Analytics, and High Performance</p>
                            <p>Computing for transformative applications in this field.</p>


                        </div>
                        

                    </div>

                    <div className='mt-52 space-y-10' >
                    
                    <NewsWire/>
                    <Subscribe />


                    </div>

                </div>

                <Placement />

                <div className='text-container text-2xl mt-10 items-center justify-center flex flex-col'>
                <p>At The Dataism Lab, we are dedicated to fostering and training our members to gain the </p>
                <p>knowledge and skills necessary to excel in real-world corporate environments. By engaging with</p> 
                <p>industry experts and participating in collaborative projects, our members are well-equipped to</p>
                <p>translate their academic insights into practical solutions that drive innovation and growth in the</p>
                <p>financial and econometric sectors.</p>
                </div>
            </div>
        </>
    );
};


export default Home;




