import React from 'react';

const Apply = () => {
    const jobPostings = [
        {
            sector: 'Algorithmic Trading',
            positions: [
                {
                    title: 'Head of Algorithmic Development',
                    description: `Are you passionate about developing cutting-edge trading algorithms and driving innovation in the field of quantitative finance? Join our dynamic team at the Dataism Laboratory for Quantitative Finance at Virginia Tech as the Head of Algorithmic Development. This role is open to both graduate and undergraduate students pursuing degrees in Computational Modeling and Data Analytics (CMDA), Computer Science, Finance, Financial Technology, and related majors.`,
                    responsibilities: [
                        'Oversee the development of state-of-the-art trading algorithms.',
                        'Lead and mentor a team of developers in creating AI and ML algorithms for financial forecasting and analysis.',
                        'Collaborate with cross-functional teams to design and implement robust algorithmic solutions.',
                        'Assist the development team in debugging and optimizing algorithms to enhance performance and efficiency.',
                        'Conduct research to identify and incorporate the latest advancements in AI, ML, and quantitative finance into our projects.',
                        'Ensure the accuracy, reliability, and scalability of all developed algorithms.',
                        'Present findings and progress to stakeholders and contribute to strategic decision-making.',
                    ],
                    qualifications: [
                        'Currently enrolled in a graduate or undergraduate program at Virginia Tech in CMDA, Computer Science, Finance, Financial Technology, or related fields.',
                        'Strong understanding of AI and ML techniques and their applications in finance.',
                        'Proficiency in programming languages such as Python, R, or C++.',
                        'Experience with financial modeling and quantitative analysis.',
                        'Excellent problem-solving skills and the ability to debug complex algorithms.',
                        'Strong leadership and project management skills.',
                        'Ability to work collaboratively in a team environment and communicate effectively with diverse stakeholders.',
                        'Passion for continuous learning and staying updated with industry trends.',
                    ],
                    preferredQualifications: [
                        'Previous experience in developing trading algorithms or working in quantitative finance.',
                        'Knowledge of financial markets and trading strategies.',
                        'Experience with data visualization tools and techniques.',
                    ],
                    howToApply: 'Interested candidates are invited to submit their resume and a portfolio of relevant projects',
                    email: 'your-email@domain.com',
                },
                // Add more positions here...
            ],
        },
        // Add more sectors here...
    ];

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Apply for a Position</h1>
            {jobPostings.map((sector) => (
                <div key={sector.sector} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">{sector.sector}</h2>
                    {sector.positions.map((position) => (
                        <div key={position.title} className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                            <p className="mb-4">{position.description}</p>
                            <h4 className="font-semibold">Key Responsibilities:</h4>
                            <ul className="list-disc list-inside mb-4">
                                {position.responsibilities.map((responsibility, index) => (
                                    <li key={index}>{responsibility}</li>
                                ))}
                            </ul>
                            <h4 className="font-semibold">Required Skills and Qualifications:</h4>
                            <ul className="list-disc list-inside mb-4">
                                {position.qualifications.map((qualification, index) => (
                                    <li key={index}>{qualification}</li>
                                ))}
                            </ul>
                            {position.preferredQualifications && (
                                <>
                                    <h4 className="font-semibold">Preferred Qualifications:</h4>
                                    <ul className="list-disc list-inside mb-4">
                                        {position.preferredQualifications.map((qualification, index) => (
                                            <li key={index}>{qualification}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            <h4 className="font-semibold">How to Apply:</h4>
                            <p className="mb-4">{position.howToApply}</p>
                            <a
                                href={`mailto:${position.email}?subject=Application for ${position.title}`}
                                className="text-blue-500 hover:underline"
                            >
                                Apply via Email
                            </a>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Apply;



