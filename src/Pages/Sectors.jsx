import React from 'react';
import '../utils/Sectors.css'; // Import custom styles if needed

const sectors = [
    {
        title: 'Academic Research',
        description: `In the realm of Academic Research, our lab is dedicated to pioneering advancements in various fields of study. Our researchers delve into theoretical and applied aspects, pushing the boundaries of knowledge and innovation. With a focus on cutting-edge methodologies and collaborative projects, we aim to contribute significantly to academic literature and practical applications.`,
        image: 'path-to-academic-research-image.jpg'
    },
    {
        title: 'Client Services',
        description: `Our Client Services sector focuses on providing tailored solutions to meet the unique needs of our clients. From consultancy to hands-on support, we offer a range of services designed to optimize performance and drive success. Our team works closely with clients to understand their challenges and deliver customized strategies that align with their goals.`,
        image: 'path-to-client-services-image.jpg'
    },
    {
        title: 'Algorithmic Development',
        description: `Algorithmic Development is at the heart of our lab's technological innovations. We specialize in creating sophisticated algorithms that enhance data analysis, machine learning, and decision-making processes. Our team is committed to developing cutting-edge solutions that address complex problems and drive advancements in various sectors.`,
        image: 'path-to-algorithmic-development-image.jpg'
    }
];

const Sectors = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Sectors of DLQF Lab</h1>
            <div className="space-y-8">
                {sectors.map((sector, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-start md:items-center border-b border-gray-200 pb-6">

                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold mb-4">{sector.title}</h2>
                            <p className="text-lg leading-relaxed">{sector.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sectors;

