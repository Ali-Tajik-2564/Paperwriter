import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

export default function ReviewRating() {
  return (
    <div className="w-full p-1 mt-4 h-auto flex items-center justify-between  space-x-4">
      <div className="w-8/12 h-auto p-8 flex items-center justify-evenly bg-(--border-color) space-x-2">
        <div className="w-36 h-auto bg-white p-3 flex items-center justify-center rounded-lg space-x-1 ">
          <Image
            src="/img/site-jabberIcon.svg"
            alt="rating icon"
            width={20}
            height={20}
          />
          <div className="w-auto flex flex-col items-center justify-start">
            <div className="flex items-center justify-between text-amber-600 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <span className="text-xs font-light">Site Jabber</span>
          </div>
        </div>
        <div className="w-36 h-auto bg-white p-3 flex items-center justify-center rounded-lg space-x-1 ">
          <Image
            src="/img/reseller-ratingsIcon.svg"
            alt="rating icon"
            width={20}
            height={20}
          />
          <div className="w-auto flex flex-col items-center justify-start">
            <div className="flex items-center justify-between text-amber-600 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <span className="text-xs font-light">Reseller Ratings</span>
          </div>
        </div>
        <div className="w-36 h-auto bg-white p-3 flex items-center justify-center rounded-lg space-x-1 ">
          <Image
            src="/img/reviews-io.svg"
            alt="rating icon"
            width={20}
            height={20}
          />
          <div className="w-auto flex flex-col items-center justify-start">
            <div className="flex items-center justify-between text-amber-600 text-sm">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <span className="text-xs font-light">Reviews Io</span>
          </div>
        </div>
      </div>
      <div className="w-4/12 h-full p-4 flex flex-col items-center justify-start bg-(--border-color) space-y-4">
        <div className="h-auto flex items-center justify-center">
          <Image
            src="/img/verifyIcon.svg"
            alt="verify icon "
            width={10}
            height={10}
          />
          <span className="text-sm font-light">100% Human Written</span>
        </div>
        <div className="p-1  flex flex-col items-center justify-start h-auto w-44 text-sm font-light bg-[url(/img/progress-zero.svg)] bg-center bg-no-repeat  space-y-0.5 ">
          <span className="text-base">0%</span>
          <span>AI generated</span>
        </div>
      </div>
    </div>
  );
}
