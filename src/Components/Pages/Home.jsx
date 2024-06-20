import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/Untitled design (6).png';  // Adjust the path as needed

const Home = () => {
    const [scrollTop, setScrollTop] = useState(1);
    const [imageOpacity, setImageOpacity] = useState(.85);
    const widgetContainerRef = useRef(null);

    const handleScroll = () => {
        const windowPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const newOpacity = Math.max(1 - windowPosition / (windowHeight / 4), 0);
        const newImageOpacity = Math.min(0.85 - windowPosition / (windowHeight / 2), 100);
        setScrollTop(newOpacity);
        setImageOpacity(newImageOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                {
                    proName: "FOREXCOM:SPXUSD",
                    title: "S&P 500 Index"
                },
                {
                    proName: "FOREXCOM:NSXUSD",
                    title: "US 100 Cash CFD"
                },
                {
                    proName: "FX_IDC:EURUSD",
                    title: "EUR to USD"
                },
                {
                    proName: "BITSTAMP:BTCUSD",
                    title: "Bitcoin"
                },
                {
                    proName: "BITSTAMP:ETHUSD",
                    title: "Ethereum"
                }
            ],
            showSymbolLogo: true,
            isTransparent: true,
            displayMode: "adaptive",
            colorTheme: "dark",
            locale: "en"
        });

        if (widgetContainerRef.current) {
            widgetContainerRef.current.appendChild(script);
        }
    }, []);

    return (
        <>
            <div className="tradingview-widget-container" ref={widgetContainerRef}>
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright">
                    <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">

                    </a>
                </div>
            </div>

            <div
                className="relative px-4 sm:px-8 md:px-12 lg:px-20 pt-20 md:pt-32 min-h-screen flex flex-col items-center justify-center"
                style={{
                    backgroundImage: `url(${homeImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black" style={{ opacity: imageOpacity }}></div>
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6" style={{ opacity: scrollTop }}>
                        Dataism Laboratory for Quantitative Finance
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl font-serif leading-relaxed mb-10" style={{ opacity: scrollTop }}>
                        Established in 2024, The Dataism Lab at Virginia Tech is an interdisciplinary
                        hub focused on advancing Quantitative Finance and Econometrics through cutting-edge technologies.
                        Our mission centers on exploring AI/Machine Learning, Big Data Analytics,
                        and High Performance Computing for transformative applications in this field.
                    </p>
                    <div className="m-auto mt-[850px]">
                        <ul className="py-2 px-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition w-full sm:w-auto">
                            <li>
                                <Link
                                    to="/people"
                                    className="block text-center bg-transparent text-white font-bold hover:text-gray-300"
                                >
                                    Meet the Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;

