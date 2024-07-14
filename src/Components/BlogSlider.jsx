import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blogs = [
    {
        id: 1,
        title: 'Blog Title 1',
        excerpt: 'This is a short summary of the first blog post...',
        image: 'path_to_image_1.jpg',
        link: '/blog/1',
    },
    {
        id: 2,
        title: 'Blog Title 2',
        excerpt: 'This is a short summary of the second blog post...',
        image: 'path_to_image_2.jpg',
        link: '/blog/2',
    },
    // Add more blog objects here
];

const BlogSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer"></div>
        ),
        appendDots: dots => (
            <div>
                <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
            </div>
        ),
        dotsClass: "slick-dots slick-thumb",
    };

    return (
        <div className="max-w-7xl mx-auto py-16 px-4">
            <Slider {...settings}>
                {blogs.map((blog) => (
                    <div key={blog.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                            <p className="mb-4">{blog.excerpt}</p>
                            <Link to={blog.link} className="text-blue-500 hover:underline">Read more</Link>
                        </div>
                        <div>
                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BlogSlider;
;
