import React from 'react';

const subscribe = () => {
    return (
        <section className="dark:bg-transparent">
            <div className=" mx-auto">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <h6 className="mb-4  tracking-tight font-black text-black ">
                        Sign up for our newsletter
                    </h6>
                    <p className="mx-auto mb-8 max-w-2xl font-light text-black md:mb-12 sm:text-xl">
                        Stay up to date with the roadmap progress, announcements, and exclusive discounts. Feel free to sign up with your email.
                    </p>
                    <form action="#">
                        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-1/41">
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Email address
                                </label>

                                <input
                                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter your email"
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default subscribe;


