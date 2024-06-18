import React from 'react';
import data from '../image.json';

const Home = () => {
    const homeImage = data.pageImage.find(item => item.name === 'Home');

    return (
        <div
            className="relative pt-[100px] px-[20px] sm:px-[50px] md:px-[100px] min-h-screen flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${homeImage.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-serif mb-6">
                    Dataism Laboratory for Quantitative Finance
                </h1>
                <p className="text-xl md:text-2xl font-serif leading-relaxed mb-10">
                    Established in 2024, The Dataism Lab at Virginia Tech is an interdisciplinary
                    hub focused on advancing Quantitative Finance and Econometrics through cutting-edge technologies.
                    Our mission centers on exploring AI/Machine Learning, Big Data Analytics,
                    and High Performance Computing for transformative applications in this field.
                </p>
                <button className="mt-10 py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
                    Meet the Team
                </button>
            </div>
            <div className="absolute bottom-0 h-[200px] w-full bg-gray-800"></div>
        </div>
    );
};

export default Home;

