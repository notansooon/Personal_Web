import React, { useState } from 'react';


const newsData = [
    {
        title: "News Title 1",
        description: "Brief description of the news article 1.",
        imageUrl: "https://via.placeholder.com/800x400",
        link: "/news/1"
    },
    {
        title: "News Title 2",
        description: "Brief description of the news article 2.",
        imageUrl: "https://via.placeholder.com/800x400",
        link: "/news/2"
    },
    {
        title: "News Title 3",
        description: "Brief description of the news article 3.",
        imageUrl: "https://via.placeholder.com/800x400",
        link: "/news/3"
    },
];

const NewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + newsData.length) % newsData.length);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto p-4">
            <div className="overflow-hidden relative">
                {newsData.map((news, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                        style={{ backgroundImage: `url(${news.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center p-8">
                            <div className="text-white text-center">
                                <h2 className="text-2xl font-bold mb-4">{news.title}</h2>
                                <p className="mb-4">{news.description}</p>
                                <a href={news.link} className="text-blue-400 underline">Read more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
                {newsData.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-500'}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">Prev</button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">Next</button>
        </div>
    );
};

export default NewsCarousel;
