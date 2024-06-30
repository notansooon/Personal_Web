import React,{useState, useEffect} from 'react';

import { ApplyBanner } from '../Components/Banner';
import image from '../Components/BannerImage.png'

const Apply = () => {

    const [content, setContent] = useState({ title: '', description: '' });

    useEffect(() => {
        fetch('./Apply.JSON')
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.error('Error fetching the content:', error));
    }, []);

    return (
        <div className="Apply">
            <div className="Banner">
                <img src={image} alt="" className='BannerImage'/>
                <h2 className="BannerText">
                    {content.title}
                </h2>


            </div>
            <p>{content.description}</p>

            <div className="container">
                <p>

                </p>
            </div>

        </div>


    );
};

export default Apply;
