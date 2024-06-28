import React from 'react';
import '../utils/home.css';
import Sponsor from "../Components/Sponsor";
import Example from "../Components/subscribe";
import NewsSection from "../Components/news-section";
import {FileUpload} from "../Components/forms";
import NewsletterForm from "../Components/subscribe";

const Home = () => {
    return (


        <>
            <div className="container">
                <div className="content-container">
                    <div className="text-container">
                        <h1 className="landing-page-header">Dataism Laboratory for Quantitative Finance</h1>
                        <p>
                            Established in 2024, The Dataism Lab at Virginia Tech is an interdisciplinary hub focused on
                            advancing Quantitative Finance and Econometrics through cutting-edge technologies.
                            Our mission centers on exploring AI/Machine Learning, Big Data Analytics, and High
                            Performance
                            Computing for transformative applications in this field.
                        </p>

                    </div>

                </div>


            </div>
            <NewsletterForm classname="bg-transparent">

            </NewsletterForm></>



    );
};


export default Home;




