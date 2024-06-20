import { Link } from "react-router-dom";
import React, { useEffect, useRef } from 'react';


const Navbar = () => {
    const widgetContainerRef = useRef(null);
   

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
            <div className="font-serif flex items-center justify-between p-4 z-[100] w-full absolute bg-black-800 h-[90px]">
                <h1 className="text-white text-4xl font-bold cursor-pointer pl-5">DLQF</h1>
                <div className="m-5">
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                to="/"
                                className="bg-transparent text-white font hover:text-gray-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="bg-transparent text-white hover:text-gray-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/people"
                                className="bg-transparent text-white font cursor-pointer hover:text-gray-300"
                            >
                                People
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className="bg-transparent text-white font cursor-pointer hover:text-gray-300"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="bg-transparent text-white font cursor-pointer hover:text-gray-300"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/apply"
                                className="bg-transparent text-white font cursor-pointer hover:text-gray-300"
                            >
                                Apply
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;