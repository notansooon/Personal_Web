import React from 'react';
import boeingLogo from '../assets/logos/Boeing_full_logo.svg.png';
import citiLogo from '../assets/logos/Citi_idkUhwKWva_1.svg';
import jpmorganLogo from '../assets/logos/J_P_Morgan_Logo_2008_1.svg.png';
import capitalOneLogo from '../assets/logos/Capital_One_logo.svg';
import magnusLogo from '../assets/logos/magnus.png';
import sigLogo from '../assets/logos/Sig_idkoseRPEU_1.svg';
export const Placement = () => {
    return (
        <>
            <section className="companies mt-20 xl:mt-48 relative z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center xl:justify-between items-center gap-8 xl:gap-12">
                        <img className="company_logo w-2/5 sm:w-1/4 md:w-1/6 lg:w-1/8" src={jpmorganLogo}
                             alt="JPMorgan Logo"/>
                        <img className="company_logo w-2/5 sm:w-1/4 md:w-1/6 lg:w-1/8" src={capitalOneLogo}
                             alt="Capital One Logo"/>
                        <img className="company_logo w-2/5 sm:w-1/6 md:w-1/8 lg:w-1/10" src={citiLogo} alt="Citi Logo"/>
                        <img className="company_logo w-2/5 sm:w-1/4 md:w-1/6 lg:w-1/8" src={boeingLogo}
                             alt="Boeing Logo"/>
                        <img className="company_logo w-2/5 sm:w-1/4 md:w-1/6 lg:w-1/8" src={magnusLogo}
                             alt="Magnus Logo"/>
                        <img className="company_logo w-2/5 sm:w-1/4 md:w-1/6 lg:w-1/8" src={sigLogo} alt="SIG Logo"/>
                    </div>
                </div>
            </section>

        </>
    );
}

