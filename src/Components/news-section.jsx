import React, { useEffect, useState } from 'react';
import '../utils/NewsSection.css';

const NewsSection = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('../assets/newsData.json')
            .then((response) => response.json())
            .then((data) => setNewsData(data))
            .catch((error) => console.error('Error fetching news data:', error));
    }, []);

    return (
        <div className="news-section">
            <h2 className="news-title">Latest News</h2>
            <ul className="news-list">
                {newsData.map((news, index) => (
                    <li key={index} className="news-item">
                        <h3 className="news-item-title">{news.title}</h3>
                        <p className="news-item-description">{news.description}</p>
                        <a href={news.link} className="news-item-link">
                            Read more
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsSection;
