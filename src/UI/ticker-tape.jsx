import React, { useEffect, useRef } from 'react';

const TradingViewTicker = () => {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
                { proName: "NASDAQ:MSFT", title: "Microsoft"},
                { proName: "NASDAQ:AAPL", title: "Apple"},
                { proName: "NYSE:BAC", title: "Bank Of America"},
                { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
                { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
                { proName: "NYSE:COF", title: "Capital One"},
                { proName: "NYSE:JPM", title: "JP Morgan Chase & Co"},
                { proName: "NASDAQ:ATVI", title: "Activision"},
                { proName: "NASDAQ:MCD", title: "McDonalds "}
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

        return () => {
            if (widgetContainerRef.current) {
                widgetContainerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="tradingview-widget-container" ref={widgetContainerRef}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">

            </div>
        </div>
    );
};

export default TradingViewTicker;




