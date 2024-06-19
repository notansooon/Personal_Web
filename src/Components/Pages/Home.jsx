import React, { useState, useEffect, useRef } from 'react';
import data from '../image.json';
import { Link } from 'react-router-dom';

const Home = () => {
    const homeImage = data.pageImage.find(item => item.name === 'Home');
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
            isTransparent: false,
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
                        <span className="blue-text">Track all markets on TradingView</span>
                    </a>
                </div>
            </div>

            <div
                className="relative px-[20px] pt-[175px] sm:px-[50px] md:px-[100px] min-h-screen flex flex-col items-center justify-center"
                style={{
                    backgroundImage: `url(${homeImage.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black" style={{ opacity: imageOpacity }}></div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-serif mb-6" style={{ opacity: scrollTop }}>
                        Dataism Laboratory for Quantitative Finance
                    </h1>
                    <p className="text-xl md:text-2xl font-serif leading-relaxed mb-10" style={{ opacity: scrollTop }}>
                        Established in 2024, The Dataism Lab at Virginia Tech is an interdisciplinary
                        hub focused on advancing Quantitative Finance and Econometrics through cutting-edge technologies.
                        Our mission centers on exploring AI/Machine Learning, Big Data Analytics,
                        and High Performance Computing for transformative applications in this field.
                    </p>
                    <ul className="m-auto mb-[100px] mt-[850px] py-2 px-4 bg-blue-600 w-[170px] text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
                        <li>
                            <Link
                                to="/people"
                                className="bg-transparent text-white font-bold hover:text-gray-300"
                            >
                                Meet the Team
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home;