import React from 'react';
import boeingLogo from '../assets/logos/Boeing_full_logo.svg.png';
import citiLogo from '../assets/logos/Citi_idkUhwKWva_1.svg';
import jpmorganLogo from '../assets/logos/J_P_Morgan_Logo_2008_1.svg.png';
import capitalOneLogo from '../assets/logos/Capital_One_logo.svg';
import magnusLogo from '../assets/logos/magnus.png';
import sigLogo from '../assets/logos/Sig_idkoseRPEU_1.svg';
import '../Components/utils/styles.css'
export const Placement = () => {
    return (
        <>
            
                
            <div className="logos ">
                <div className='logos-slide item1'>
                    <img className='object-fill h-[100%] w-[100%]' src={jpmorganLogo} alt="JPMorgan Logo" />
                </div>
                <div className='logos-slide item2'>
                    <img className='object-fill h-[100%] w-[100%]'src={capitalOneLogo} alt="Capital One Logo" />
                </div>
                <div className='logos-slide item3'>
                    <img className='object-fill h-[100%] w-[100%]'src={citiLogo} alt="Citi Logo" />
                </div>
                <div className='logos-slide item4'>
                    <img className='object-fill h-[100%] w-[100%]' src={boeingLogo} alt="Boeing Logo" />
                </div>
                <div className='logos-slide item5'>
                    <img className='object-fill h-[100%] w-[100%]' src={magnusLogo} alt="Magnus Logo" />
                </div>
                <div className='logos-slide item6'>
                    <img className='object-fill h-[100%] w-[100%]' src={sigLogo} alt="SIG Logo" />
                </div>
                
            </div>

            {/* <div className="logos-slide">
                    <img src={jpmorganLogo} alt="JPMorgan Logo" />
                    <img src={capitalOneLogo} alt="Capital One Logo" />
                    <img src={citiLogo} alt="Citi Logo" />
                    <img src={boeingLogo} alt="Boeing Logo" />
                    <img src={magnusLogo} alt="Magnus Logo" />
                    <img src={sigLogo} alt="SIG Logo" />
                </div>
                <div className="logos-slide">
                    <img src={jpmorganLogo} alt="JPMorgan Logo" />
                    <img src={capitalOneLogo} alt="Capital One Logo" />
                    <img src={citiLogo} alt="Citi Logo" />
                    <img src={boeingLogo} alt="Boeing Logo" />
                    <img src={magnusLogo} alt="Magnus Logo" />
                    <img src={sigLogo} alt="SIG Logo" />
                </div>*/}

                    


        </>
    );
}

