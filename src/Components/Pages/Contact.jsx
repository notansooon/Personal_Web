import React from 'react';
import { useEffect, useRef } from 'react';
import './style.css';


function Contact() {

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

    <div className="container mx-auto p-2 pt-[150px] text-white">
      <h1 className="text-5xl text-center mb-10 font-bold">Contact</h1>
      <div className="mb-8 font-serif">

        <p className=" text-2xl text-white mb-4">Please feel free to contact us if you want to collaborate with us or join the team.</p>
        <div className="inputbox">
          <input required="required" />
          <span>Name</span>
        </div>
        <div className="inputbox">
        <input required="required" />
        <span>Email</span>
        </div>
        <div className="inputbox" >
        <input required="required" style={{paddingBottom: 150}}/>
        <span>Message</span>
        </div>


        <div class="btn">
          <button> Send</button>
        </div>


        <p className="mb-4">Email: <a href="mailto:habibnia@vt.edu" className="text-blue-500">habibnia@vt.edu</a></p>
        <address className="not-italic mb-4">
          Pamplin Hall, 880 West Campus Drive<br />
          Blacksburg, VA 24060<br />
          United States
        </address>
        <p className="mb-4">Directions: Enter Pamplin Hall and head to room 3016</p>
       
      </div>

      <div
        className="w-full bg-cover bg-center h-96 text-white flex items-center justify-center"
        //style={{ backgroundImage: `url(${pamplinHallImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h2 className="text-2xl font-bold">Our Location</h2>
          <p>Pamplin Hall, 880 West Campus Drive, Blacksburg, VA 24060, United States</p>
        </div>
        
      </div>
      <iframe
          className="w-full h-64"
          src={`https://www.google.com/maps?q=37.22876,-80.42462&hl=es;z=14&output=embed`}
          allowFullScreen
          title="Pamplin Hall Location"
        ></iframe>
    </div>
    </>
  );
}

export default Contact;
