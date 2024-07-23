// JobList.js
import React from 'react';
import Job from './job';

const JobList = () => {
    const jobs = [
        { title: 'Project Manager, Algorithmic Development',
            description: 'Are you passionate about developing cutting-edge trading algorithms and driving innovation ' +
                'in the field of quantitative finance. Join our dynamic team at the Dataism Laboratory for Quantitative ' +
                'Finance at Virginia Tech as the Head of Algorithmic Development. This role is open to both graduate and ' +
                'undergraduate students pursuing degrees in Computational Modeling and Data Analytics (CMDA), ' +
                'Computer Science, Finance, Financial Technology, and related majors.\n',
   
            status: 'Active',
            responsibilities: [
                'Oversee the development of state-of-the-art trading algorithms.', 
                'Lead and mentor a team of developers in creating AI and ML algorithms for financial forecasting and analysis.', 
                'Collaborate with cross-functional teams to design and implement robust algorithmic solutions.', 
                'Assist the development team in debugging and optimizing algorithms to enhance performance and efficiency.',
                'Conduct research to identify and incorporate the latest advancements in AI, ML, and quantitative finance into our projects.',
                'Ensure the accuracy, reliability, and scalability of all developed algorithms.',
                'Present findings and progress to stakeholders and contribute to strategic decision-making.'
            ]

        },
        { title: 'Algorithmic Developer',
            description: 'Are you enthusiastic about developing sophisticated trading algorithms and contributing to advancements in quantitative finance?' + 
                'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented and motivated Algorithmic Developer to assist the Head of Algorithmic Development.' + 
                'This role is open to both graduate and undergraduate students pursuing degrees in Computational Modeling and Data Analytics (CMDA), Computer Science, Finance, Financial Technology, and related majors.'
        ,
            status: 'Active',

            responsibilities: [
                'Collaborate with the Head of Algorithmic Development and other team members to create, test, and implement AI and ML algorithms for financial forecasting and trading.',
                'Assist in the debugging and optimization of algorithms to enhance their performance, reliability, and scalability.',
                'Conduct research and stay updated with the latest advancements in AI, ML, and quantitative finance to integrate into ongoing projects.',
                'Participate in code reviews and provide constructive feedback to ensure high-quality code development.',
                'Analyze financial data and apply quantitative techniques to develop innovative trading strategies.',
                'Contribute to the documentation of algorithmic solutions and processes.', 
                'Assist in presenting research findings and project progress to stakeholders.'
            ]

        },
        { title: 'Data Scientist',
            description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented and motivated Data Scientist to join our Client Services Sector.' + 
                'In this role, you will work directly with investment banks to design, develop, and implement advanced data-driven solutions that enhance their strategic decision-making and operational efficiency.' +
                'If you are passionate about applying data science techniques to solve complex financial challenges, we want to hear from you.'
        ,
            status: 'Active',
            responsibilities: [
                'Collaborate with clients to understand their business needs and translate them into data-driven solutions.',
                'Develop and implement machine learning models and algorithms for financial forecasting, risk management, and trading strategies.',
                'Analyze large financial datasets to identify trends, patterns, and actionable insights.',
                'Design and build data pipelines and automated workflows to streamline data processing and analysis.',
                'Perform rigorous testing and validation of models to ensure accuracy, reliability, and scalability.',
                'Communicate findings and recommendations to clients through detailed reports and presentations.',
                'Work with cross-functional teams, including developers and financial analysts, to integrate data solutions into existing systems and processes.',
                'Stay updated with the latest advancements in data science, AI, and finance to continually enhance the solutions provided to clients.'

            ]

        },
        { title: 'UI/UX Designer',
            description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented UI/UX Designer to join our Client Services Sector.' + 
                'This role involves designing intuitive and engaging user interfaces for advanced financial applications used by leading investment banks.' + 
                'If you have a passion for creating seamless user experiences and a keen eye for design, we would love to have you on our team.'
            ,
            status: 'Active',

            responsibilities:[
                'Collaborate with clients and internal teams to understand user requirements and translate them into effective UI/UX designs.',
                'Design and prototype user interfaces for web and mobile applications that are visually appealing, user-friendly, and aligned with client needs.',
                'Conduct user research and usability testing to gather insights and refine designs.',
                'Create wireframes, storyboards, user flows, and interactive prototypes to communicate design ideas effectively.',
                'Develop and maintain design systems and style guides to ensure consistency across all products.',
                'Work closely with developers to ensure the implementation of designs is pixel-perfect and meets usability standards.',
                'Stay updated with the latest UI/UX trends, techniques, and technologies to continuously improve design processes.',
                'Produce high-quality visual designs, including layouts, color schemes, typography, and iconography.'

            ]

        },
        { title: 'Graduate Researcher',
            description: 'Are you a graduate student driven by a passion for quantitative finance and eager to engage in high-impact research?' +
                'The Dataism Laboratory for Quantitative Finance at Virginia Tech invites you to join our team as a Graduate Researcher.' + 
                'This role offers a platform to work on pioneering projects, collaborate with experts, and contribute to advancements in the field of quantitative finance.'
            ,
            status: 'Active',
            responsibilities:[
                'Lead and participate in research projects focused on developing and refining financial models and algorithms.',
                'Conduct advanced data collection, cleaning, and analysis to support research objectives.',
                'Collaborate with faculty members, postdoctoral researchers, and undergraduate assistants on interdisciplinary research initiatives.',
                'Perform comprehensive literature reviews and synthesize findings to inform research direction.',
                'Prepare and present research reports, papers, and presentations for academic journals and conferences.',
                'Develop and optimize algorithms for financial forecasting, risk management, and trading strategies.',
                'Contribute to the mentoring of undergraduate research assistants and foster a collaborative research environment.'


            ]
        },
        { title: 'Undergraduate Research Assistant',
            description: 'Are you an undergraduate student passionate about quantitative finance and eager to contribute to cutting-edge research?' + 
                'Join our dynamic team at the Dataism Laboratory for Quantitative Finance as an Undergraduate Research Assistant.' + 
                'This role offers a unique opportunity to work alongside experienced researchers and gain hands-on experience in the exciting field of quantitative finance.'
            ,
            status: 'Active',

            responsibilities:[
                
                'Assist in the development and implementation of financial models and algorithms.', 
                'Conduct data collection, cleaning, and analysis to support ongoing research projects.',
                'Collaborate with graduate students and faculty members on various research initiatives.',
                'Participate in literature reviews and summarize relevant academic papers and industry reports.',
                'Contribute to the preparation of research reports, presentations, and publications.',
                'Assist in the debugging and optimization of algorithms and models.',
                'Attend lab meetings and contribute to discussions on research progress and findings.'
            ]  

            
        },
    ];

    return (
        <div className="space-y-4">
            {jobs.map((job, index) => (
                <Job key={index} title={job.title} description={job.description} status={job.status} responsibilities={job.responsibilities}/>
            ))}
        </div>
    );
};

export default JobList;
