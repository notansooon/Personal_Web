// JobList.js
import React from 'react';
import Job from './job';

const JobList = () => {
    const jobs = [
        { title: 'OllamaGen',
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
            ],
            skills:[
                "Currently enrolled in a graduate or undergraduate program at Virginia Tech in" +
                " CMDA, Computer Science, Finance, Financial Technology, or related fields.",
                "Strong understanding of AI and ML techniques and their applications in finance.",
                "Proficiency in programming languages such as Python, R, or C++.",
                "Experience with financial modeling and quantitative analysis.",
                "Excellent problem-solving skills and the ability to debug complex algorithms.",
                "Strong leadership and project management skills.",
                "Ability to work collaboratively in a team environment and communicate effectively",
                "with diverse stakeholders.",
                "Passion for continuous learning and staying updated with industry trends."
            ],
            

        },
        { title: 'AI Recruiting',
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
            ],
            skills:[
                "Currently enrolled in a graduate or undergraduate program at Virginia Tech in" +
                " CMDA, Computer Science, Finance, Financial Technology, or related fields.",
                "Proficiency in programming languages such as Python, R, or C++.",
                "Strong understanding of AI and ML techniques and their applications in finance.",
                "Experience with financial modeling and quantitative analysis.",
                "Excellent problem-solving skills and the ability to debug complex algorithms.",
                "Ability to work collaboratively in a team environment and communicate" +
                "effectively with diverse stakeholders.",
                "Passion for continuous learning and staying updated with industry trends."
                ],
            

        },
        { title: 'Chrome Extension',
            description: 'The Dataism Laboratory for Quantitative Finance at Virginia Tech is seeking a talented and motivated Data Scientist to join our Client Services Sector.' + 
                'In this role, you will work directly with investment banks to design, develop, and implement advanced data-driven solutions that enhance their strategic decision-making and operational efficiency.' +
                'If you are passionate about applying data science techniques to solve complex financial challenges, we want to hear from you.'
        ,
            status: 'NA',
            responsibilities: [
                'Collaborate with clients to understand their business needs and translate them into data-driven solutions.',
                'Develop and implement machine learning models and algorithms for financial forecasting, risk management, and trading strategies.',
                'Analyze large financial datasets to identify trends, patterns, and actionable insights.',
                'Design and build data pipelines and automated workflows to streamline data processing and analysis.',
                'Perform rigorous testing and validation of models to ensure accuracy, reliability, and scalability.',
                'Communicate findings and recommendations to clients through detailed reports and presentations.',
                'Work with cross-functional teams, including developers and financial analysts, to integrate data solutions into existing systems and processes.',
                'Stay updated with the latest advancements in data science, AI, and finance to continually enhance the solutions provided to clients.'

            ],
            skills:[
                "Pursuing a Bachelor’s or Master’s degree in Data Science, Computer Science," +
                " Finance, Financial Technology, or a related field.",
                "Strong proficiency in programming languages such as Python, R, or Scala.",
                "Experience with machine learning frameworks and libraries such as TensorFlow, PyTorch, or Scikit-learn.",
                "Solid understanding of statistical analysis and quantitative methods.",
                "Experience with data visualization tools such as Tableau, Power BI, or Matplotlib.",
                "Strong problem-solving skills and ability to work with complex datasets.",
                "Excellent communication skills, both written and verbal, with the ability to" +
                " explain technical concepts to non-technical stakeholders.",
                "Ability to work independently and as part of a collaborative team environment."
            ],
            
            
            

        },
        { title: 'Memior',
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

            ],
            skills:[
                "Pursuing Bachelor’s or Master’s degree in UI/UX Design, Graphic Design," +
                " Human-Computer Interaction, or a related field.",
                "Strong portfolio demonstrating expertise in UI/UX design for web and mobile applications.",
                "Proficiency in design tools such as Adobe Creative Suite, Sketch, Figma, or similar.",
                "Experience with prototyping tools such as InVision, Axure, or Marvel.",
                "Solid understanding of user-centered design principles and usability best practices.",
                "Strong visual design skills, including an eye for typography, color, and layout.",
                "Excellent communication skills, with the ability to articulate design decisions" +
                " and collaborate effectively with clients and team members.",
                "Ability to work independently and manage multiple projects simultaneously."
            ],


        },
        
    ];

    return (
        <div className="space-y-4 -mt-24">
            {jobs.map((job, index) => (
                <Job
                    key={index}
                    title={job.title}
                    description={job.description}
                    status={job.status}
                    responsibilities={job.responsibilities}
                    skills={job.skills}
                    
                />
            ))}
        </div>
    );
};

export default JobList;
