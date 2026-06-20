'use client';
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import {Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HeroBannerSection() {
  const banners = [
    { id: 1, src: '/banner1.jpg', alt: 'First Banner Highlight' },
    { id: 2, src: '/banner2.jpg', alt: 'Second Banner Showcase' },
    { id: 3, src: '/banner3.avif', alt: 'Third Banner Showcase' }
  ];

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] bg-gray-100 overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={banner.id} className="relative w-full h-full">
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              className="object-cover"
              sizes="100vw"
             
              // `banner1.jpg` (index 0) slide vaye priority loading true hunchha (LCP Warning fix)
              priority={index === 0} 
             
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Custom Dot Indicators and Arrow Colors Customization (Tailwind) */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #ffffff !important;
          background: rgba(0, 0, 0, 0.3);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transform: scale(0.8);
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 20px !important;
        }
        .swiper-pagination-bullet-active {
          background: #4f46e5 !important; /* Indigo-600 */
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}