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
            preQualifications:[
                "Previous experience in developing trading algorithms or working in quantitative finance.",
                "Knowledge of financial markets and trading strategies.",
                "Experience with data visualization tools and techniques."
            ],
            formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe5TNzRAGljJQJL_ZHv_NLTSYKFPLSHxVQXvCdF9CBg_5bQCQ/viewform', // Google Form link
            jobCode: '5678',

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
            preQualifications:[
                "Previous experience in developing trading algorithms or working in quantitative finance.",
                "Knowledge of financial markets and trading strategies.",
                "Experience with data visualization tools and techniques."
            ],
            formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe5TNzRAGljJQJL_ZHv_NLTSYKFPLSHxVQXvCdF9CBg_5bQCQ/viewform', // Google Form link
            jobCode: '5678',

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
            preQualifications:[
                "Previous experience in the financial industry or with financial data analysis.",
                "Knowledge of financial markets, trading strategies, and risk management practices.",
                "Experience with cloud platforms such as AWS, Google Cloud, or Azure.",
                "Familiarity with big data technologies such as Hadoop, Spark, or Kafka."
            ],
            formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe5TNzRAGljJQJL_ZHv_NLTSYKFPLSHxVQXvCdF9CBg_5bQCQ/viewform', // Google Form link
            jobCode: '5678',

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
            preQualifications:[
                "Previous experience designing financial applications or working in the financial industry.",
                "Familiarity with front-end development technologies such as HTML, CSS, and JavaScript.",
                "Experience with agile development methodologies.",
                "Understanding of accessibility standards and guidelines."
            ],
            formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe5TNzRAGljJQJL_ZHv_NLTSYKFPLSHxVQXvCdF9CBg_5bQCQ/viewform', // Google Form link
            jobCode: '5678',

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


            ],
            skills:[ 
                "Currently enrolled in a graduate program at Virginia Tech in Computational" +
                " Modeling and Data Analytics (CMDA), Computer Science, Finance, Financial" +
                " Technology, or related fields.", 
                "Strong foundation in quantitative analysis and financial modeling.",
                "Proficiency in programming languages such as Python, R, or C++.",
                "In-depth understanding of AI and ML techniques and their applications in finance.",
                "Experience with data analysis and statistical methods.",
                "Strong research and problem-solving skills.",
                "Excellent written and verbal communication skills.",
                "Ability to work independently and collaboratively within a research team.",
                "Commitment to rigorous academic research and continuous learning."
            ],
            preQualifications:[
                "Previous experience in quantitative finance or financial technology research.",
                "Knowledge of financial markets, trading strategies, and risk management practices.", 
                "Experience with data visualization and advanced statistical software.",
                "Record of published research in academic journals or conference proceedings."
            ],
            formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe5TNzRAGljJQJL_ZHv_NLTSYKFPLSHxVQXvCdF9CBg_5bQCQ/viewform', // Google Form link
            jobCode: '5678',
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
            ],
            skills:[
                "Currently enrolled in an undergraduate program at Virginia Tech in" +
                " Computational Modeling and Data Analytics (CMDA), Computer Science," +
                " Finance, Financial Technology, or related fields.",
                "Strong analytical and quantitative skills.",
                "Proficiency in programming languages such as Python, R, or C++.",
                "Basic understanding of AI and ML techniques and their applications in finance.",
                "Ability to work independently and collaboratively in a team environment.",
                "Strong attention to detail and excellent organizational skills.",
                "Effective communication skills, both written and verbal.",
                "Enthusiasm for learning and staying updated with industry trends."
            ],
            preQualifications:[
                "Previous experience in financial modeling or data analysis.",
                "Knowledge of financial markets and trading strategies.",
                "Experience with data visualization tools and techniques."
            ] ,
            formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe5TNzRAGljJQJL_ZHv_NLTSYKFPLSHxVQXvCdF9CBg_5bQCQ/viewform', // Google Form link
            jobCode: '5678',
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
                    qual={job.preQualifications}
                    formLink={job.formLink}
                    jobCode={job.jobCode}
                />
            ))}
        </div>
    );
};

export default JobList;
