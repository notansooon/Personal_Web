import React from 'react';
import Slider from 'react-slick';
import NewsWire from "./NewsWire";
import {Autoplay, Pagination} from "swiper/modules";
import SwiperCore from "swiper/core";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';


SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

const NewsWireCarousel = ()=>{
    return (
        <section className="newsWireCarousel py-16">
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center -mb-32">Trending</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{clickable:true}}
                    autoplay={{
                        delay:4000,
                        disableOnInteraction:true,
                        pauseOnMouseEnter:true
                }}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>{NewsWire}</SwiperSlide>
                    <SwiperSlide>{NewsWire}</SwiperSlide>
                    <SwiperSlide>{NewsWire}</SwiperSlide>
                    <SwiperSlide>{NewsWire}</SwiperSlide>
                    ...
                </Swiper>
            </div>
        </section>

    )
}


export default NewsWireCarousel;
