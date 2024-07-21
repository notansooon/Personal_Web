import React from 'react';
import Slider from 'react-slick';
import NewsWire from "./NewsWire";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import SwiperCore from "swiper/core";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation'
import '../Components/utils/styles.css'


SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);

const NewsWireCarousel = ()=>{
    return (
        <div className="w-[100%] mx-auto px-4 md:px-20">
            <h1 className="  container font-bold text-4xl pb-12 text-center">Trending</h1>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                navigation={{ enabled: true, hideOnClick: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{ overflow: 'hidden' }}
            >
                <SwiperSlide><NewsWire /></SwiperSlide>
                <SwiperSlide><NewsWire /></SwiperSlide>
                <SwiperSlide><NewsWire /></SwiperSlide>
                <SwiperSlide><NewsWire /></SwiperSlide>
                
            </Swiper>
        </div>
    )
}


export default NewsWireCarousel;
