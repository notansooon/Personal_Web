import React from 'react';
import boeingLogo from '../assets/logos/Boeing_full_logo.svg.png';
import citiLogo from '../assets/logos/Citi_idkUhwKWva_1.svg';
import jpmorganLogo from '../assets/logos/J_P_Morgan_Logo_2008_1.svg.png';
import capitalOneLogo from '../assets/logos/Capital_One_logo.svg';
import magnusLogo from '../assets/logos/magnus.png';
import sigLogo from '../assets/logos/Sig_idkoseRPEU_1.svg';
import { Card, Typography } from "@material-tailwind/react";

// Array of custom logos
const customLogos = [
    { src: boeingLogo, alt: 'Boeing Logo' },
    { src: citiLogo, alt: 'Citi Logo' },
    { src: jpmorganLogo, alt: 'JP Morgan Logo' },
    { src: capitalOneLogo, alt: 'Capital One Logo' },
    { src: magnusLogo, alt: 'Magnus Logo' },
    { src: sigLogo, alt: 'SIG Logo' }
];

const Placement = () => {
    return (
        <section  style={{ backgroundColor: '#FFEBD4' }} className="py-8 w-screen px-8 lg:py-20">
            <div
                className="container bg-transparent mx-auto -mt-6 text-center py-10 px-6 "

            >

                <Typography variant="h2" color="black" className="mb-10">
                    Placement
                </Typography>
                <p className='mb-10 -mt-6'>Companies where our students have secured placements, showcasing their skills and the exceptional quality of our programs</p>


                <div className="flex flex-wrap items-center justify-center gap-6">
                    {customLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="w-36"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Placement;


