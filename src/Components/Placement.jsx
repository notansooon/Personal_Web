import React from 'react';
import boeingLogo from '../assets/logos/Boeing_full_logo.svg.png';
import citiLogo from '../assets/logos/Citi_logo_March_2023.svg.png';
import jpmorganLogo from '../assets/logos/J_P_Morgan_Logo_2008_1.svg.png';
import capitalOneLogo from '../assets/logos/Capital_One_logo.svg';

export const Placement = () => {
    return (
        <>
            <section className="companies mt-[80px] xl:mt-[200px] relative z-20">
                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
                        <img className="company_logo w-1/2 md:w-1/4 lg:w-1/5" src={jpmorganLogo} alt="JPMorgan Logo" />
                        <img className="company_logo w-1/2 md:w-1/4 lg:w-1/5" src={capitalOneLogo} alt="Capital One Logo" />
                        <img className="company_logo w-1/2 md:w-1/4 lg:w-1/5" src={citiLogo} alt="Citi Logo" />
                        <img className="company_logo w-1/2 md:w-1/4 lg:w-1/5" src={boeingLogo} alt="Boeing Logo" />
                    </div>
                </div>
            </section>
        </>
    );
}

