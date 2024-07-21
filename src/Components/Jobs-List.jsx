// JobList.js
import React from 'react';
import Job from './job';

const JobList = () => {
    const jobs = [
        { title: 'Head of Algorithmic Development',
            description: 'Are you passionate about developing cutting-edge trading algorithms and driving innovation ' +
                'in the field of quantitative finance. Join our dynamic team at the Dataism Laboratory for Quantitative ' +
                'Finance at Virginia Tech as the Head of Algorithmic Development. This role is open to both graduate and ' +
                'undergraduate students pursuing degrees in Computational Modeling and Data Analytics (CMDA), ' +
                'Computer Science, Finance, Financial Technology, and related majors.\n',
            responsibilities:'Oversee the development of state-of-the-art trading algorithms.\n' +
                'Lead and mentor a team of developers in creating AI and ML algorithms for financial forecasting and analysis.\n',

            status: 'Active'
        },
        { title: 'Client Services Analyst',
            description: 'Provide tailored solutions to investment banks.',
            status: 'Not Hiring'
        },
        { title: 'Research Scientist',
            description: 'Conduct pioneering research in quantitative finance.',
            status: 'Active'
        },
    ];

    return (
        <div className="space-y-4">
            {jobs.map((job, index) => (
                <Job key={index} title={job.title} description={job.description} status={job.status} />
            ))}
        </div>
    );
};

export default JobList;
