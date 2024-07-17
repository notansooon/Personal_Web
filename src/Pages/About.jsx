import React from 'react';
 // Import any additional CSS if needed

const About = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 lg:px-20">
                {/* Hero Section */}
                <section className="relative text-center mb-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}>
                    <div className="bg-black bg-opacity-50 p-10">
                        <h1 className="text-5xl lg:text-7xl font-bold text-white">About Our Research Lab</h1>
                        <p className="mt-4 text-lg lg:text-xl text-gray-200">Innovating the future through groundbreaking research</p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="relative mb-16 flex flex-col lg:flex-row items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/mission-image.jpg)' }}>
                    <div className="bg-white bg-opacity-75 p-10 lg:w-1/2">
                        <h2 className="text-4xl font-semibold text-gray-800">Our Mission</h2>
                        <p className="mt-4 text-gray-600">Our mission is to conduct pioneering research that advances scientific understanding and technological innovation. We strive to create a collaborative environment that fosters creativity and excellence.</p>
                    </div>
                </section>

                {/* Vision Section */}
                <section className="relative mb-16 flex flex-col lg:flex-row items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/vision-image.jpg)' }}>
                    <div className="bg-white bg-opacity-75 p-10 lg:w-1/2 lg:ml-auto">
                        <h2 className="text-4xl font-semibold text-gray-800">Our Vision</h2>
                        <p className="mt-4 text-gray-600">Our vision is to be a global leader in research and development, contributing to societal advancement through innovative solutions and knowledge dissemination.</p>
                    </div>
                </section>

                {/* Research Focus Section */}
                <section className="text-center mb-16">
                    <h2 className="text-4xl font-semibold text-gray-900">Research Focus</h2>
                    <p className="mt-4 text-lg text-gray-700">Explore our diverse areas of research</p>
                    <div className="grid lg:grid-cols-3 gap-10 mt-10">
                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-80" style={{ backgroundImage: 'url(/path/to/research-ai.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Artificial Intelligence</h3>
                                <p className="mt-2 text-gray-200">Advancing AI technologies to solve complex problems and improve human lives.</p>
                            </div>
                        </div>
                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-80" style={{ backgroundImage: 'url(/path/to/research-biotech.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Biotechnology</h3>
                                <p className="mt-2 text-gray-200">Innovating in biotechnology to drive medical and environmental breakthroughs.</p>
                            </div>
                        </div>
                        <div className="relative flex items-end bg-cover bg-center bg-no-repeat h-80" style={{ backgroundImage: 'url(/path/to/research-quantum.jpg)' }}>
                            <div className="bg-black bg-opacity-50 p-4 w-full">
                                <h3 className="text-2xl font-semibold text-white">Quantum Computing</h3>
                                <p className="mt-2 text-gray-200">Exploring quantum computing to revolutionize computing power and efficiency.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="text-center">
                    <h2 className="text-4xl font-semibold text-gray-900">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-700">Get in touch with us for collaboration and inquiries</p>
                    <div className="mt-8">
                        <a href="mailto:info@researchlab.com" className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700">info@researchlab.com</a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;



