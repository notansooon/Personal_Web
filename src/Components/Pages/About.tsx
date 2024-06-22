import React from 'react';
import TradingViewTicker from "../UI/ticker-tape";

const About = () => {
    return (
        <div className= "text-white">
            <section
                className='relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center'>
                <img
                    className="pointer-events-none select-none"
                    src='/logo512.png'
                    alt='Logo'
                    style={{ objectFit: 'cover', objectPosition: '75%' }}
                />
            </section>

            <div>
                <section>
                    <h2>Research Topic
                        <p>
                            Our research focuses on the intersection of machine learning and big data econometrics, with
                            a particular focus in high-dimensional nonlinear time-series analysis and their applications
                            in macroeconomic/financial forecasting and estimation of big financial networks.
                        </p>
                    </h2>

                    <section>
                        <h2>Machine Learning and Finance
                            <p>
                                At DLQF, we leverage machine learning to develop models for predicting market trends,
                                optimizing investment portfolios, and identifying profitable trading opportunities.
                            </p>
                        </h2>
                    </section>

                    </section>

                <section>
                    <h2>Nonlinear Time Series Analysis
                        <p>
                            Nonlinear time series analysis delves into intricate patterns within time-varying data,
                            crucial in understanding market dynamics. Within our lab, we utilize these techniques to
                            uncover hidden correlations and forecast market movements more accurately, enhancing risk
                            management and portfolio optimization strategies.
                        </p>
                    </h2>
                </section>
            </div>
        </div>
    );
}

export default About;
