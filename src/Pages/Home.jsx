import React from 'react';
import '../utils/home.css';
import Sponsor from "../Components/Sponsor";
import Example from "../Components/Newsletter";

const Home = () => {
    return (
        <div className="container">
            <div className="content-container">
                <div className="text-container">
                    <h1 className="landing-page-header">Dataism Laboratory for Quantitative Finance</h1>
                    <p>
                        Established in 2024, The Dataism Lab at Virginia Tech is an interdisciplinary hub focused on
                        advancing Quantitative Finance and Econometrics through cutting-edge technologies.
                        Our mission centers on exploring AI/Machine Learning, Big Data Analytics, and High Performance
                        Computing for transformative applications in this field.
                    </p>
                </div>
                <div className="iframe-container">
                    <iframe

                        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7211175301643407360"
                        height="380"
                        width="400"
                        frameBorder="0"
                        allowFullScreen=""
                        title="Embedded post">
                    </iframe>




                </div>


            </div>
            <div>

            </div>

            <div className="container flex-auto inset-0" >
                <Example></Example>

            </div>



        </div>
    );
};


export default Home;




