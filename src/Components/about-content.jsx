import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import bgImage1 from '../assets/Images/1712711055874.jpeg'; // replace with your actual path
import bgImage2 from '../assets/Images/1712985343744.jpeg'; // replace with your actual path

function Option({ title, children }) {
    return (
        <div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                {title}
            </Typography>
            <Typography className="font-normal !text-gray-500 md:w-10/12">
                {children}
            </Typography>
        </div>
    );
}

export function AboutContent() {
    return (
        <>
            <section className="mx-auto container max-w-5xl px-8 py-10">
                <div className="text-center mb-10 lg:mb-24">
                    <Typography
                        variant="lead"
                        className="mt-2 max-w-4xl mx-auto !text-blue-950"
                    >
                        Our mission at the Dataism Laboratory for Quantitative Finance is to revolutionize the financial industry through innovative algorithmic solutions, advanced data analytics, and cutting-edge research. We aim to bridge the gap between theoretical research and practical applications, ensuring our work is both scientifically robust and practically effective.
                    </Typography>
                </div>
                <div className="text-center mb-10 lg:mb-24">
                    <Typography
                        variant="lead"
                        className="mt-2 max-w-4xl mx-auto !text-gray-500"
                    >
                        We envision a future where financial markets are driven by intelligent algorithms and data-driven decisions. Our goal is to lead this transformation by continuously advancing the field of quantitative finance and fostering a collaborative environment that promotes innovation and excellence.
                    </Typography>
                </div>
                <div className="lg:space-y-24 space-y-12">
                    <div className="grid grid-cols-1 items-center place-items-center gap-16 lg:grid-cols-2">
                        <div
                            className="h-[480px] text-center flex flex-col justify-center lg:max-w-md mx-auto rounded-2xl bg-transparent p-14">
                            <Typography variant="h6" className="mb-4" color="white">
                                INNOVATIVE SOLUTIONS
                            </Typography>
                            <Typography variant="h4" color="white">
                                Transforming the Financial Industry
                            </Typography>
                            <Typography
                                color="white"
                                className="mt-2 mb-10 text-base font-normal"
                            >
                                Our team is dedicated to developing advanced algorithmic solutions that address real-world financial challenges. By leveraging cutting-edge technology and data analytics, we aim to enhance the efficiency and effectiveness of financial markets.
                            </Typography>
                            <Button color="white" className="max-w-fit mx-auto">
                                Learn More
                            </Button>
                        </div>
                        <div className="flex flex-col gap-10 lg:max-w-sm">
                            <Option title="1. Cutting-Edge Research">
                                Our research efforts are focused on pushing the boundaries of quantitative finance. We collaborate with leading academic institutions to ensure our work is grounded in the latest scientific advancements.
                            </Option>
                            <Option title="2. Practical Applications">
                                We bridge the gap between theory and practice by implementing our research findings in real-world financial systems. Our solutions are designed to be both scientifically robust and practically effective.
                            </Option>
                            <Option title="3. Collaborative Environment">
                                Innovation thrives in a collaborative environment. We foster a culture of teamwork and continuous learning, where experts from various fields work together to achieve common goals.
                            </Option>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 items-center place-items-center gap-16 lg:grid-cols-2">
                        <div className="lg:row-auto row-start-2 flex flex-col gap-10 lg:max-w-sm">
                            <Option title="1. Data-Driven Decisions">
                                We empower financial institutions to make informed decisions based on comprehensive data analysis. Our algorithms process vast amounts of data to provide actionable insights.
                            </Option>
                            <Option title="2. Intelligent Algorithms">
                                Our intelligent algorithms are designed to adapt to changing market conditions, ensuring they remain effective over time. We continuously refine our models to improve their performance.
                            </Option>
                            <Option title="3. Leading the Transformation">
                                As pioneers in quantitative finance, we are committed to leading the transformation of the financial industry. Our vision is to create a future where data-driven decisions and intelligent algorithms drive market success.
                            </Option>
                        </div>
                        <div
                            className="h-[480px] text-center flex flex-col justify-center lg:max-w-md mx-auto rounded-2xl bg-transparent p-14">
                            <Typography variant="h6" className="mb-4" color="white">
                                COLLABORATIVE ENVIRONMENT
                            </Typography>
                            <Typography variant="h4" color="white">
                                Promoting Innovation and Excellence
                            </Typography>
                            <Typography
                                color="white"
                                className="mt-2 mb-10 text-base font-normal"
                            >
                                We believe that collaboration is key to innovation. By bringing together experts from various fields, we create a dynamic environment where new ideas can flourish and lead to groundbreaking advancements in quantitative finance.
                            </Typography>
                            <Button color="white" className="max-w-fit mx-auto">
                                Join Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutContent;



