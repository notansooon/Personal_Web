import React from 'react';

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
    <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{sector}</h2>
        <ul>
            {jobs.map((job, index) => (
                <li key={index} className="mb-2">
                    <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {job.title}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const ApplicationPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Job Postings
            </h1>
            <div className="space-y-12">
                {Object.keys(jobs).map((sector) => (
                    <JobSection key={sector} sector={sector} jobs={jobs[sector]} />
                ))}
            </div>
        </div>
    );
};

export default ApplicationPage;

