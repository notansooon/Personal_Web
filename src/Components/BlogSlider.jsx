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
        image: 'path_to_image_2.jpg',
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
            <div className="w-2 h-2 bg-gray-400 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-125"></div>
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
                    <div key={blog.id} className="flex flex-col md:flex-row gap-8 p-4">
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                            <p className="mb-4">{blog.excerpt}</p>
                            <Link to={blog.link} className="text-blue-500 hover:underline">Read more</Link>
                        </div>
                        <div className="md:w-1/2">
                            <img src={blog.image} alt={blog.title} className="size-1/2" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BlogSlider;



