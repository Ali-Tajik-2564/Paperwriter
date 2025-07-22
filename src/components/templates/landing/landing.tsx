import Image from 'next/image';
import React from 'react';
import { TiTick } from 'react-icons/ti';
import QuickSearch from './QuickSearch/QuickSearch';
import ReviewRating from './ReviewRating/ReviewRating';

export default function Landing() {
  return (
    <div className="w-full h-auto flex flex-col items-start justify-between">
      <div className="w-full h-auto   p-10 flex items-start justify-between">
        <div className="w-2/3 h-auto flex flex-col items-start justify-between space-y-6">
          <span className="text-3xl tracking-wide font-bold">
            Professional Paper Writing Service
          </span>
          <span className="text-base text-(--text-color)/80">
            Get a Perfect Paper Written by the Best Paper Writer!
          </span>
          <QuickSearch />
          <ReviewRating />
        </div>
        <div className="banner w-auto h-auto px-4 pt-12">
          <Image
            src="/img/banner-img.webp"
            alt="banner img"
            width={450}
            height={500}
          />
        </div>
      </div>
      <div className="w-full h-auto p-3 flex items-center justify-evenly ">
        <div className="w-auto h-auto p-1.5 space-x-0.5 flex items-center justify-center bg-(--border-color) rounded-2xl">
          <TiTick className="fill-(--them-color) w-6 h-6" />
          <span className="text-lg font-medium">350+</span>
          <span className="text-base font-medium text-black/60">
            Academic Writing Experts
          </span>
        </div>
        <div className="w-auto h-auto p-1.5 space-x-0.5 flex items-center justify-center bg-(--border-color) rounded-2xl">
          <TiTick className="fill-(--them-color) w-6 h-6" />
          <span className="text-lg font-bold">100%</span>
          <span className="text-base font-medium text-black/60">
            Money Back Guarantee
          </span>
        </div>
        <div className="w-auto h-auto p-1.5 space-x-0.5 flex items-center justify-center bg-(--border-color) rounded-2xl">
          <TiTick className="fill-(--them-color)" />
          <span className="text-lg font-bold">75%</span>
          <span className="text-base font-medium text-black/70">
            Upfront Payment
          </span>
        </div>
        <div className="w-auto h-auto p-1.5 space-x-0.5 flex items-center justify-center bg-(--border-color) rounded-2xl">
          <TiTick className="fill-(--them-color) w-6 h-6" />

          <span className="text-lg font-medium">0%</span>
          <span className="text-base font-medium text-black/60">
            Plagiarism
          </span>
        </div>
      </div>
    </div>
  );
}
