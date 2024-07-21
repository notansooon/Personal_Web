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
   
            status: 'Active',
            pay: ' Not Paid'
        },
        { title: 'Data Scientist',
            description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented and motivated Data Scientist to join our Client Services Sector.' + 
                'In this role, you will work directly with investment banks to design, develop, and implement advanced data-driven solutions that enhance their strategic decision-making and operational efficiency.' +
                'If you are passionate about applying data science techniques to solve complex financial challenges, we want to hear from you.'
        ,
            status: 'Not Hiring',
            pay: ' Not Paid'
        },
        { title: 'UI/UX Designer',
            description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented UI/UX Designer to join our Client Services Sector.' + 
                'This role involves designing intuitive and engaging user interfaces for advanced financial applications used by leading investment banks.' + 
                'If you have a passion for creating seamless user experiences and a keen eye for design, we would love to have you on our team.'
            ,
            status: 'Active',
            pay: 'Paid'
        },
        { title: 'Graduate Researcher',
            description: 'Are you a graduate student driven by a passion for quantitative finance and eager to engage in high-impact research?' +
                'The Dataism Laboratory for Quantitative Finance at Virginia Tech invites you to join our team as a Graduate Researcher.' + 
                'This role offers a platform to work on pioneering projects, collaborate with experts, and contribute to advancements in the field of quantitative finance.'
            ,
            status: 'Active',
            pay: ' Not Paid'
        },
        { title: 'Undergraduate Research Assistant',
            description: 'Are you an undergraduate student passionate about quantitative finance and eager to contribute to cutting-edge research?' + 
                'Join our dynamic team at the Dataism Laboratory for Quantitative Finance as an Undergraduate Research Assistant.' + 
                'This role offers a unique opportunity to work alongside experienced researchers and gain hands-on experience in the exciting field of quantitative finance.'
            ,
            status: 'Active',
            pay: 'Paid'
            
        },
    ];

    return (
        <div className="space-y-4">
            {jobs.map((job, index) => (
                <Job key={index} title={job.title} description={job.description} status={job.status} pay={job.pay} />
            ))}
        </div>
    );
};

export default JobList;
