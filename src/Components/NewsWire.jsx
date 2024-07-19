import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from "swiper";

import 'swiper/css';
import {color} from "framer-motion";

const NewsWire = () => {

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 2000}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>
            ...
        </Swiper>
    );
};

function Slide(){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <img alt=""/>

            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <p className="text-gray-800 hover:text-gray-600"> date</p>

                </div>
                <div className="title">
                    <p className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600"> Title</p>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>

            </div>
        </div>
    )
}







export default NewsWire;



