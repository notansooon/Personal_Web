import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@material-tailwind/react";

import { ArrowSmallRightIcon } from "@heroicons/react/20/solid"; // replace with your actual path
import { useNavigate } from "react-router-dom";

function Option({ title, children }) {
    return (
        <div className="mb-6 lg:mb-0">
            <h5 className="text-2xl text-blue-gray-900 mb-2">{title}</h5>
            <p className="text-base text-gray-500 md:w-10/12">{children}</p>
        </div>
    );
}


export function AboutContent() {


    const nav = useNavigate();
    
    const navHandler = () => { 


        nav('/Apply');



    }
    return (
        <>
            <Helmet>
                <title>About Us | Dataism Laboratory for Quantitative Finance</title>
                <meta name="description" content="Learn about the Dataism Laboratory's mission to revolutionize the financial industry through innovative algorithmic solutions and advanced data analytics." />
                <meta name="keywords" content="Quantitative Finance, Algorithmic Solutions, Data Analytics, Financial Research" />
                <meta property="og:title" content="About Us | Dataism Laboratory for Quantitative Finance" />
                <meta property="og:description" content="Discover our mission and vision for transforming the financial industry with cutting-edge research and innovative solutions." />
                <meta property="og:image" content={''} />
                <meta property="og:url" content="https://yourwebsite.com/about" />
            </Helmet>
            <div className="mx-auto w-screen container max-w-5xl lg:mb-12 mb-12 sm:mb-16 px-4 py-8 md:px-8 md:py-10">
                <div className="text-center mb-24 sm:mb-24 md:mb-20 lg:mb-24">
                    <h4 className="text-3xl font-semibold text-blue-950 mb-4">Our Mission</h4>
                    <p className="mt-2 max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
                        Our mission at the Dataism Laboratory for Quantitative Finance is to revolutionize the financial
                        industry through innovative algorithmic solutions, advanced data analytics, and cutting-edge
                        research. We aim to bridge the gap between theoretical research and practical applications,
                        ensuring our work is both scientifically robust and practically effective.
                    </p>
                </div>
                <div className="text-center -mt-12 mb-20 md:mb-10 lg:mb-24">
                    <h4 className="text-3xl font-semibold text-blue-950 mb-4">Our Vision</h4>
                    <p className="mt-2 max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
                        We envision a future where financial markets are driven by intelligent algorithms and
                        data-driven decisions. Our goal is to lead this transformation by continuously advancing the
                        field of quantitative finance and fostering a collaborative environment that promotes innovation
                        and excellence.
                    </p>
                </div>

                
            </div>
        </>
    );
}

export default AboutContent;








