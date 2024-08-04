import React from 'react';
import img from '../assets/Images/1713572060948.jpeg';
import logo from '../assets/logos/dataismLogo.png'; // Add your logo image import here

const HomeHero = () => {
    return (
        <div className="relative min-h-screen w-full bg-bottom bg-cover bg-no-repeat"
             style={{ backgroundImage: `url(${img})` }}
        >
            <div className="absolute inset-0 h-full w-full bg-black/70" />
            <div className="grid -mt-8 min-h-screen px-8">
                <div className="container relative z-10 my-auto mx-auto grid text-left">
                    <img src={logo} alt="Logo" className="mb-4 h-64 w-64 object-contain" />
                    <h1 className="text-4xl leading-snug text-white lg:text-5xl">
                        Dataism Laboratory for Quantitative Finance
                    </h1>
                    <p className="mt-4 mb-6 text-white md:max-w-full lg:mb-12 lg:max-w-3xl">
                        Leveraging dataism, which emphasizes the importance of data in decision-making, to harness the
                        power of AI/Machine Learning, Big Data, and High Performance Computing (HPC) in finance. By
                        integrating these advanced technologies, we aim to revolutionize financial analysis,
                        prediction, and automation for more accurate and efficient outcomes.
                    </p>

                    <div className="flex gap-4">
                        {/* Additional content can go here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;



