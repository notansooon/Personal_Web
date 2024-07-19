import React from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
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
        <section className="mx-auto container max-w-5xl px-8 py-10">
            <div className="lg:space-y-24 space-y-12">
                <div className="grid grid-cols-1 items-center place-items-center gap-16 lg:grid-cols-2">
                    <div
                        className="h-[480px] w-full lg:max-w-md mx-auto rounded-2xl p-14 bg-cover bg-center flex flex-col justify-center"
                        style={{ backgroundImage: `url(${bgImage1})` }}>
                    </div>
                    <div className="flex flex-col gap-10 lg:max-w-sm">
                        <h2>Our Mission</h2>
                        <p>Our mission at the Dataism Laboratory for Quantitative Finance (DLQF) is to advance the field of quantitative finance through innovative research, cutting-edge technology, and interdisciplinary collaboration. We strive to develop robust financial models and algorithms that drive impactful solutions in the financial industry.</p>

                    </div>
                </div>
                <div className="grid grid-cols-1 items-center place-items-center gap-16 lg:grid-cols-2">
                    <div className="lg:row-auto row-start-2 flex flex-col gap-10 lg:max-w-sm">
                        <h2>Our Vision</h2>
                        <p>Our vision is to be at the forefront of quantitative finance, leveraging data and
                            technology to revolutionize financial forecasting, trading, and risk management.
                            We aim to bridge the gap between theoretical research and practical applications,
                            fostering a collaborative environment that nurtures talent and innovation.</p>
                    </div>
                    <div
                        className="h-[480px] w-full lg:max-w-md mx-auto rounded-2xl p-14 bg-cover bg-center flex flex-col justify-center"
                        style={{ backgroundImage: `url(${bgImage2})` }}
                    >

                    </div>
                </div>
                <div className="grid grid-cols-1 items-center place-items-center gap-16 lg:grid-cols-2">
                    <div
                        className="h-[480px] w-full lg:max-w-md mx-auto rounded-2xl p-14 bg-cover bg-center flex flex-col justify-center"
                        style={{ backgroundImage: `url(${bgImage1})` }}
                    >


                    </div>
                    <div className="flex flex-col gap-10 lg:max-w-sm">
                        <Option title="Algorithmic Trading"></Option>
                        <Option title="Client Services"></Option>
                        <Option title="Academic Research"></Option>


                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutContent;

