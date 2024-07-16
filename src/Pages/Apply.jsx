import React from 'react';
import {motion} from 'framer-motion'

const jobs = {
    'Algorithmic Trading': [
        { title: 'Quantitative Trader', link: 'https://www.linkedin.com/jobs/view/1' },
        { title: 'Algorithmic Trading Developer', link: 'https://www.linkedin.com/jobs/view/2' },
    ],
    'Academic Research': [
        { title: 'Research Scientist', link: 'https://www.linkedin.com/jobs/view/3' },
        { title: 'Postdoctoral Researcher', link: 'https://www.linkedin.com/jobs/view/4' },
    ],
    'AI/ML Engineering': [
        { title: 'Machine Learning Engineer', link: 'https://www.linkedin.com/jobs/view/5' },
        { title: 'AI Researcher', link: 'https://www.linkedin.com/jobs/view/6' },
    ],
    'UI/UX Designer': [
        { title: 'UI Designer', link: 'https://www.linkedin.com/jobs/view/7' },
        { title: 'UX Researcher', link: 'https://www.linkedin.com/jobs/view/8' },
    ],
};

const JobSection = ({ sector, jobs }) => (
    <div className="bg-white bg-opacity-35 shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">{sector}</h2>
        <ul>
            {jobs.map((job, index) => (
                <li key={index} className="mb-2">
                    <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0L7.293 10.414a1 1 0 011.414-1.414L12 12.586l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 8.707 7.293a1 1 0 00-1.414 1.414L12.293 12l6-6-6-6a1 1 0 010-1.414z" />
                        </svg>
                        {job.title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const ApplicationPage = () => {
    return (
        <motion.div

        >
            <div className="min-h-screen py-12">
                <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center">
                        Job Postings
                    </h1>
                    <div className="space-y-12">
                        {Object.keys(jobs).map((sector) => (
                            <JobSection key={sector} sector={sector} jobs={jobs[sector]}/>
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>

    );
};

export default ApplicationPage;


