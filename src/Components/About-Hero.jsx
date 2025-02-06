import React from "react";
import "../styles/about.css"
import anson from "../Components/Images/Anson.jpeg"


const ImageComponent = ({ src, alt }) => {
    return (
        <div className="py-3 sm:py-4">
            <img src={src} alt={alt} className="w-full rounded-2xl" />
        </div>
    );
};



const SvgComponent = () => {
    return (
        <span className="absolute -right-7 -bottom-7 z-[-1]">
            <svg width={134} height={106} viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1.66667" cy={104} r="1.66667" transform="rotate(-90 1.66667 104)" fill="#3056D3" />
                <circle cx="16.3333" cy={104} r="1.66667" transform="rotate(-90 16.3333 104)" fill="#3056D3" />
                <circle cx={31} cy={104} r="1.66667" transform="rotate(-90 31 104)" fill="#3056D3"/>
                <circle cx="45.6667" cy={104} r="1.66667" transform="rotate(-90 45.6667 104)" fill="#3056D3"/>
                <circle cx="60.3334" cy={104} r="1.66667" transform="rotate(-90 60.3334 104)" fill="#3056D3"/>
                <circle cx="88.6667" cy={104} r="1.66667" transform="rotate(-90 88.6667 104)" fill="#3056D3"/>
                <circle cx="117.667" cy={104} r="1.66667" transform="rotate(-90 117.667 104)" fill="#3056D3"/>
                <circle cx="74.6667" cy={104} r="1.66667" transform="rotate(-90 74.6667 104)" fill="#3056D3"/>
                <circle cx={103} cy={104} r="1.66667" transform="rotate(-90 103 104)" fill="#3056D3"/>
                <circle cx={132} cy={104} r="1.66667" transform="rotate(-90 132 104)" fill="#3056D3"/>
                <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="#3056D3"/>
                <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="#3056D3"/>
                <circle cx={31} cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="#3056D3"/>
                <circle cx= "45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="#3056D3"/>
                <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="#3056D3"/>
                <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="#3056D3"/>
                <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="#3056D3"/>
                <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="#3056D3"/>
                        <circle
                            cx={103}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 103 89.3338)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={132}
                            cy="89.3338"
                            r="1.66667"
                            transform="rotate(-90 132 89.3338)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.66667"
                            cy="74.6673"
                            r="1.66667"
                            transform="rotate(-90 1.66667 74.6673)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.66667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 31.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="16.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 16.3333 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="16.3333"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 31.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={31}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 31 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={31}
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 31 31.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="45.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 45.6667 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="45.6667"
                            cy="31.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 31.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="60.3333"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 60.3333 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="60.3333"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 60.3333 30.9998)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="88.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 88.6667 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="88.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 88.6667 30.9998)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="117.667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 117.667 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="117.667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 117.667 30.9998)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="74.6667"
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 74.6667 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="74.6667"
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 74.6667 30.9998)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={103}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 103 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={103}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 103 30.9998)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={132}
                            cy="74.6668"
                            r="1.66667"
                            transform="rotate(-90 132 74.6668)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={132}
                            cy="30.9998"
                            r="1.66667"
                            transform="rotate(-90 132 30.9998)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.66667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 1.66667 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.66667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="16.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 16.3333 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="16.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={31}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 31 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={31}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 31 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="45.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 45.6667 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="45.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="60.3333"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 60.3333 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="60.3333"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 60.3333 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="88.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 88.6667 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="88.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 88.6667 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="117.667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 117.667 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="117.667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 117.667 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="74.6667"
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 74.6667 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="74.6667"
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 74.6667 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={103}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 103 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={103}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 103 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={132}
                            cy="60.0003"
                            r="1.66667"
                            transform="rotate(-90 132 60.0003)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={132}
                            cy="16.3333"
                            r="1.66667"
                            transform="rotate(-90 132 16.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.66667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 1.66667 45.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="1.66667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 1.66667 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="16.3333"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 16.3333 45.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="16.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 16.3333 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={31}
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 31 45.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={31}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 31 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="45.6667"
                            cy="45.3333"
                            r="1.66667"
                            transform="rotate(-90 45.6667 45.3333)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="45.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 45.6667 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="60.3333"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 60.3333 45.3338)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="60.3333"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 60.3333 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="88.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 88.6667 45.3338)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="88.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 88.6667 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="117.667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 117.667 45.3338)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="117.667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 117.667 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="74.6667"
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 74.6667 45.3338)"
                            fill="#3056D3"
                        />
                        <circle
                            cx="74.6667"
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 74.6667 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={103}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 103 45.3338)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={103}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 103 1.66683)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={132}
                            cy="45.3338"
                            r="1.66667"
                            transform="rotate(-90 132 45.3338)"
                            fill="#3056D3"
                        />
                        <circle
                            cx={132}
                            cy="1.66683"
                            r="1.66667"
                            transform="rotate(-90 132 1.66683)"
                            fill="#3056D3"
                        />
            </svg>
        </span>
    );
};


const HeroTextComponent = () => {
    return (
        <div className="mt-10 lg:mt-0">
            <div className='w-full'>

                <div className="containe">

                    <h2 className="mb-5 typewritter text-dark sm:text-[40px]/[48px]">
                        Get To Know Me
                    </h2>

                </div>
            

            </div>
            
            <span className=" block mb-4 text-lg font-semibold text-primary">
                Hey There👋, Anson here
            </span>
            <p className="mb-5 text-base text-body-color dark:text-dark-6">
            I am an undergraduate student at Virginia Tech majoring in Computer Science. 
            As an AI enthusiast, I am deeply passionate about exploring the potential of artificial intelligence, 
            while also being captivated by a wide range of software development applications.
            </p>
        </div>
    );
};


const AboutHero = () => {
        return (
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-transparent dark:bg-dark">
                    <div className="container mx-auto">
                            <div className="flex flex-wrap items-center justify-between -mx-4">
                                    <div className="w-full px-4 lg:w-6/12">
                                            <div className="flex items-center -mx-3 sm:-mx-4">
                                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                                            <ImageComponent src={anson} alt="Image 1 description" />
                                                            <ImageComponent src={anson} alt="Image 2 description" />
                                                    </div>
                                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                                            <div className="relative z-10 my-4">
                                                                    <ImageComponent src={anson} alt="Image 3 description" />
                                                                    <SvgComponent />
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                            <HeroTextComponent />
                                    </div>
                            </div>
                    </div>
            </section>
        );
};

export default AboutHero;