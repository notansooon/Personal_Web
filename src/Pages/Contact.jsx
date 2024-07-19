import React, { useState } from 'react';
import {AnimatePresence, motion} from "framer-motion";
import IconButton from "../Components/IconButton";
import {FaFacebook, FaLinkedin, FaWeibo, FaWhatsapp} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";



const ContactUs = () => {
    const [selectedInquiry, setSelectedInquiry] = useState(null);

    const inquiries = [
        { title: 'Academic Enquiries', type: 'academic' },
        { title: 'Recruiting Enquiries', type: 'recruiting' },
        { title: 'Sponsoring Enquiries', type: 'sponsoring' }
    ];

    const handleCardClick = (type) => {
        setSelectedInquiry(type);
    };

    const handleClose = () => {
        setSelectedInquiry(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        >
            <Header />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {inquiries.map((inquiry) => (
                    <InquiryCard
                        key={inquiry.type}
                        title={inquiry.title}
                        onClick={() => handleCardClick(inquiry.type)}
                    />
                ))}
            </div>
            <Modal isVisible={!!selectedInquiry} onClose={handleClose}>
                <ContactForm onClose={handleClose} />
            </Modal>
            <SocialMedia/>
        </motion.div>
    );
};

const Header = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Contact Us
            </h2>
            <p className="text-sm leading-loose tracking-wide text-gray-600 mb-8">
                Partner with us to leverage our expertise, state-of-the-art resources, and research capabilities to
                stay ahead in the competitive landscape of quantitative finance. At the Dataism Laboratory for
                Quantitative Finance at Virginia Tech, we collaborate closely with sponsors and industry partners to
                develop cutting-edge financial technologies and advanced quantitative models. Join us in advancing the
                forefront of quantitative finance innovation and driving impactful solutions for the financial industry.
            </p>
        </div>
    );
};



const InquiryCard = ({ title, onClick }) => {
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -y / 5;
        const rotateY = x / 5;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0) rotateY(0)',
        });
    };

    return (
        <div
            className="inquiry-card cursor-pointer bg-white p-6 rounded-lg shadow-lg transition-transform transform-gpu"
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <h3 className="text-xl font-semibold text-gray-800">
                {title}
            </h3>
        </div>
    );
};





const ContactForm = ({ onClose }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
                onClick={onClose}
                className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900 transition transform hover:rotate-90"
            >
                ✕
            </button>
            <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Full Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Your message"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

const SocialMedia = () => {
    return (
        <div className='container mx-auto py-4'>
            <div className='text-center mb-4'>
                <h4 className='text-lg font-semibold'>
                    Follow Us On
                </h4>
            </div>
            <div className="flex justify-center items-center gap-4">
                <IconButton
                    color='bg-blue-500'
                    text='LinkedIn'
                    className='bg-blue'
                >
                    <FaLinkedin className='text-white w-6 h-6' />
                </IconButton>

                <IconButton
                    color='bg-green-600'
                    text='Whatsapp'

                >
                    <FaWhatsapp className='text-white w-6 h-6' />
                </IconButton>

                <IconButton
                    color='bg-blue-800'
                    text='Facebook'
                >
                    <FaFacebook className='text-white w-6 h-6' />
                </IconButton>

                <IconButton
                    color='bg-black'
                    text='Twiiter'

                >
                    <FaXTwitter className='text-white w-6 h-6' />
                </IconButton>

                <IconButton
                    color='bg-red-600'
                    text='Weibo'
                >
                    <FaWeibo className='text-white w-6 h-6' />
                </IconButton>
            </div>
        </div>
    );
}

const Modal = ({ isVisible, onClose, children }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="relative"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


export default ContactUs;


