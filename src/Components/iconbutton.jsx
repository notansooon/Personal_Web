import React, { useState } from 'react';
import resumeImage from "../Components/Images/resume.png"; // Resume image file
//import resumePdf from "../Components/Images/resume.pdf"; // Resume PDF file

const LinkedInArrowLink = () => {
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Toggle Button */}
            <button
                onClick={clickHandler}
                className="inline-flex items-center text-blue-950 hover:text-blue-800 transition-colors duration-300 bg-gray-100 px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
            >
                <span className="mr-2 text-xl font-semibold">Check Out My Resume</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 transition-transform transform hover:translate-x-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </button>

            {/* Resume Preview Section */}
            {toggle && (
                <div className="mt-4 p-4 bg-white shadow-lg rounded-lg flex flex-col items-center">
                    <img
                        src={resumeImage}
                        alt="Resume Preview"
                        className="h-auto w-full max-w-lg rounded-md border"
                    />
                    <a
                        //href={resumePdf}
                        download="Resume.pdf"
                        className="mt-4 inline-block bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
                    >
                        Download Resume (PDF)
                    </a>
                </div>
            )}
        </div>
    );
};

export default LinkedInArrowLink;
