'use client';
import React from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import ReviewBox from '../ReviewBox/ReviewBox';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
export default function ReviewSection() {
  return (
    <div className="w-full flex items-center justify-center my-32">
      <div className="w-5/6 h-auto mx-auto flex items-center justify-center">
        <div className="swiper-button-custom-prev   z-10 ml-24   text-black/50   border border-black/50  w-10 h-10 rounded-full flex items-center justify-center group  hover:border-(--them-color) ">
          <IoIosArrowBack className="w-6 h-6 group-hover:fill-(--them-color)" />
        </div>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-custom-next',
            prevEl: '.swiper-button-custom-prev',
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper  w-4/6 h-auto flex items-center justify-between   ">
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewBox />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-custom-next text-black/50 mr-24   border border-black/50 w-10 h-10 rounded-full flex items-center justify-center group hover:border-(--them-color)">
          <IoIosArrowForward className="w-6 h-6 group-hover:fill-(--them-color)" />
        </div>
      </div>
    </div>
  );
}
