import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    const textareaAutoHeight = (el, offsetTop = 0) => {
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight + offsetTop}px`;
    };

    return (
        <div className="bg-neutral-900">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                {/* Title */}
                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contact us</h2>
                    <p className="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
                </div>
                {/* End Title */}

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                    <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {/* Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                        placeholder="Name"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                                    >
                                        Name
                                    </label>
                                </div>
                                {/* End Input */}

                                {/* Input */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                        placeholder="Email"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                                    >
                                        Email
                                    </label>
                                </div>
                                {/* End Input */}

                                {/* Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                        placeholder="Company"
                                    />
                                    <label
                                        htmlFor="company"
                                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                                    >
                                        Company
                                    </label>
                                </div>
                                {/* End Input */}

                                {/* Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                                        placeholder="Phone"
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                                    >
                                        Phone
                                    </label>
                                </div>
                                {/* End Input */}

                                {/* Textarea */}
                                <div className="relative">
                  <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      onInput={(e) => textareaAutoHeight(e.target, 3)}
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                      placeholder="This is a textarea placeholder"
                  />
                                    <label
                                        htmlFor="message"
                                        className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                                    >
                                        Tell us about your project
                                    </label>
                                </div>
                                {/* End Textarea */}
                            </div>

                            <div className="mt-2">
                                <p className="text-xs text-neutral-500">All fields are required</p>

                                <p className="mt-5">
                                    <button
                                        type="submit"
                                        className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                                    >
                                        Submit
                                        <svg
                                            className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                    {/* End Col */}

                    <div className="md:order-1">
                        <div className="space-y-5">
                            <div>
                                <h3 className="text-white font-semibold text-sm">Visit Us</h3>
                                <p className="text-neutral-400 text-sm"> 100 Canal Pointe Blvd Suite 212 Princeton NJ 08540</p>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold text-sm">Email</h3>
                                <p className="text-neutral-400 text-sm">lab@sig.com</p>
                            </div>

                            <div>
                                <h3 className="text-white font-semibold text-sm">Phone</h3>
                                <p className="text-neutral-400 text-sm">609-520-1199</p>
                            </div>
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
        </div>
    );
};

export default Contact;



