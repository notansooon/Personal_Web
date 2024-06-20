import React from 'react';
import { useEffect, useRef } from 'react';


const Apply = () => {

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

        <div className="container mx-auto px-4 py-8 font-serif">


            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl mb-4 text-white">Apply to DLQF</h1>
                <p className="text-lg md:text-xl text-white">Join the Dataism Laboratory for Quantitative Finance</p>
            </header>

            <section className="bg-opacity-50 bg-gray-900 p-6 shadow-lg mb-12">
                <form>
                <p className="text-white mb-8 text-1xl">
                    Membership for the Dataism Laboratory for Quantitative Finance (DLQF) is accessible to faculty, staff, and matriculated students in good standing at Virginia Polytechnic Institute and State University. We extend invitations to participants from diverse academic backgrounds. Transfer students and freshmen must have completed a minimum of one semester before eligibility. We urge these individuals to explore our website and participate in interest meetings to engage with current members.
                </p>

                <h2 className="text-2xl md:text-3xl mb-4 text-white">Step 1: Initial Application</h2>
                <p className="text-white mb-8 ">
                    Prospective members must submit the following documents.
                </p>
                <div className='applyBox' >
                    <input type='file'></input>
                    <span> Updated resume</span>
                </div>
                <div className='applyBox'>
                    <input type='file'></input>
                    <span> Unofficial transcripts</span>
                </div>



                    <p className='w-full text-white mt-3'> Statement of interest: A one-page document explaining (1) why you are interested, (2) what you can contribute, and (3) what you hope to gain by being a member of DLQF</p>
                    <div className='applyBox' >
                    <input type='file' ></input>
                    <span>Statement</span>
                </div>

                <button className='btn rounded'>Submit</button>

                </form>
                </section>
                <section className="bg-opacity-50 bg-gray-900 p-6 shadow-lg mb-12">
                <h2 className="text-2xl md:text-3xl mb-4 text-white">Step 2: The Project</h2>
                <p className="text-white mb-8">
                    Selected applicants meeting the minimum thresholds will receive a two-part project and a tentative interview. DLQF will hold a "project meeting" to allow applicants to voice questions and concerns before proceeding. Additionally, tutoring sessions will be available for those who require assistance.
                </p>

                <div className="p-6 rounded-md mb-8">
                    <h3 className="text-xl md:text-2xl mb-4 text-white">Project Details:</h3>
                    <div className="mb-6">
                        <h4 className="text-lg md:text-xl mb-2 text-white">Part I: Essay on Quantitative Finance</h4>
                        <p className="text-white mb-2">
                            Minimum Threshold: Between 1,000 and 1,500 words. Applicants will receive detailed expectations for this essay. Creativity and articulate organization are encouraged. The essay should provide a beginner-level understanding of financial concepts and their application to quantitative finance, including methods, statistical concepts, etc.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg md:text-xl mb-2 text-white">Part II: Applying the Concepts</h4>
                        <p className="text-white">
                            Minimum Threshold: Presentation with 10-12 slides, incorporating the sections detailed above. Applicants must apply the concepts discussed in their essay to a relevant research study. They should explain pricing models and propose any alternative approaches. Additionally, a one-page thesis write-up and 1-2 pages of supporting analysis and literature review are required.
                        </p>
                    </div>
                </div>
                </section>

                <section className= "bg-opacity-50 bg-gray-900 p-6 shadow-lg mb-12">
                <h2 className="text-2xl md:text-3xl mb-4 text-white">Step 3: The Interview</h2>
                <p className="text-white mb-8">
                    Applicants who meet the minimum thresholds of the project will undergo a three-part interview:
                </p>
                <ul className="list-disc list-inside mb-8 text-white space-y-2">
                    <li>Applied Concepts Presentation: Testing knowledge of the quantitative finance presentation.</li>
                    <li>Quantitative Assessment: Testing programming and quantitative ability.</li>
                    <li>Classic Interview: Reviewing resume, assessing intangibles, gauging interest and knowledge of DLQF.</li>
                </ul>
                <p className="text-white mb-8">Offers will be extended soon after interviews.</p>
            </section>

        </div>
        </>
    );
};

export default Apply;


