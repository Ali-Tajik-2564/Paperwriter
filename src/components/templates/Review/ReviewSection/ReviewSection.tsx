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
import Link from 'next/link';
export default function ReviewSection() {
  return (
    <div className="w-full flex flex-col items-center justify-between my-14 ">
      <div className="w-full h-auto flex flex-col items-center justify-between my-16 space-y-1">
        <span className="text-3xl font-medium tracking-wide">
          Meet Our Experienced And Professional Paper Writers
        </span>
        <span className="text-black/60 text-base  text-center">
          Every writer on our team is truly committed to crafting flawless
          papers. Check out their profiles to hire
        </span>
        <span className="text-black/60 text-base  text-center">
          the one that best suits your needs
        </span>
      </div>
      <div className="w-5/6 h-auto mx-auto flex items-center justify-center ">
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
          <SwiperSlide className="p-12">
            <ReviewBox />
          </SwiperSlide>

          <SwiperSlide className="p-12">
            <ReviewBox />
          </SwiperSlide>

          <SwiperSlide className="p-12">
            <ReviewBox />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-custom-next text-black/50 mr-24   border border-black/50 w-10 h-10 rounded-full flex items-center justify-center group hover:border-(--them-color)">
          <IoIosArrowForward className="w-6 h-6 group-hover:fill-(--them-color)" />
        </div>
      </div>
      <Link
        href="./writer"
        className="w-auto h-auto border-b text-base text-black/60 border-black/60 hover:text-(--them-color) hover:border-(--them-color) my-5 text-center">
        View All Writers
      </Link>
    </div>
  );
}
