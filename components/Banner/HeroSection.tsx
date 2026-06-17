'use client';
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';
export const HeroBannerSection = () => {
    return(<>
    <section className="w-full h-150 overflow-hidden">
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} >
     <SwiperSlide>slide1</SwiperSlide>
        </Swiper>
        
    </section>
    </>)
}