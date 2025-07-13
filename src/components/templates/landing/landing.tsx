import Image from 'next/image';
import React from 'react';
import { inherits } from 'util';
import QuickSearch from '../QuickSearch/QuickSearch';
import ReviewRating from '../ReviewRating/ReviewRating';

export default function Landing() {
  return (
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
  );
}
