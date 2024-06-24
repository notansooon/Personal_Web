import React from 'react';

const About = () => {
    return (
        <div className="text-white bg-gray-900 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Research Topic</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Our research focuses on the intersection of machine learning and big data econometrics,
                            with a particular focus in high-dimensional nonlinear time-series analysis and their
                            applications in macroeconomic/financial forecasting and estimation of big financial networks.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Machine Learning and Finance</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            At DLQF, we leverage machine learning to develop models for predicting market trends,
                            optimizing investment portfolios, and identifying profitable trading opportunities.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nonlinear Time Series Analysis</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Nonlinear time series analysis delves into intricate patterns within time-varying data,
                            crucial in understanding market dynamics. Within our lab, we utilize these techniques to
                            uncover hidden correlations and forecast market movements more accurately, enhancing risk
                            management and portfolio optimization strategies.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;

