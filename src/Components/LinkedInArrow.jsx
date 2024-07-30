import React from 'react';

const LinkedInArrowLink = ({ url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
            <span className="mr-2">Read More On LinkedIn</span>
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
        </a>
    );
};

export default LinkedInArrowLink;
