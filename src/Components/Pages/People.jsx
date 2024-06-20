import React from 'react'
import { useEffect, useRef } from 'react';
import { Profile } from '../UI/Profile';




const People = () => {

  
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


    < Profile />

    </>
    
  )
}

export default People