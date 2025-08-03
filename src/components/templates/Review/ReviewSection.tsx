'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa6';

export default function ReviewSection() {
  const [ReviewsName, setReviewsName] = useState('');
  return (
    <div className="w-full h-auto my-10 flex flex-col items-center justify-between p-6 space-y-10">
      <div className="w-full flex flex-col items-center justify-between">
        <span className="text-2xl font-medium tracking-wide">
          Check Out Our Paper Writing Service Reviews
        </span>
        <span className="text-base font-normal text-black/60">
          We have an average rating of 4.9/5 from over 16593+ students, and
          here’s what they had to say about us:
        </span>
      </div>
      <div className="w-full h-auto flex items-center justify-center space-x-16 my-4">
        <div
          className={`w-56 rounded-md p-6 shadow-lg flex flex-col items-center justify-between space-x-2 hover:border hover:border-(--them-color) ${
            ReviewsName === 'my-perfect-paperWriter' &&
            'border border-(--them-color)'
          }  `}
          onClick={() => setReviewsName('my-perfect-paperWriter')}>
          <Image src="./img/mpp-logo.svg" width={130} height={80} alt="logo" />
          <div className="w-auto flex">
            <FaStar className="fill-(--them-color)" />
            <FaStar className="fill-(--them-color)" />
            <FaStar className="fill-(--them-color)" />
            <FaStar className="fill-(--them-color)" />
            <FaStarHalf className="fill-(--them-color)" />
          </div>
        </div>
        <div
          className={`w-56 rounded-md p-6 shadow-lg flex flex-col items-center justify-between space-x-2 hover:border hover:border-orange-700   ${
            ReviewsName === 'site-jabber' && 'border border-orange-700'
          } `}
          onClick={() => setReviewsName('site-jabber')}>
          <Image
            src="./img/site-jabber.svg"
            width={130}
            height={80}
            alt="logo"
          />
          <div className="w-auto flex">
            <FaStar className="fill-orange-700" />
            <FaStar className="fill-orange-700" />
            <FaStar className="fill-orange-700" />
            <FaStar className="fill-orange-700" />
            <FaStarHalf className="fill-orange-700" />
          </div>
        </div>
        <div
          className={`w-56 rounded-md p-6 shadow-lg flex flex-col items-center justify-between space-x-2 hover:border hover:border-green-900 ${
            ReviewsName === 'trustPilot' && 'border border-green-900'
          } `}
          onClick={() => setReviewsName('trustPilot')}>
          <Image
            src="./img/trust-pilot.svg"
            width={130}
            height={80}
            alt="logo"
          />
          <div className="w-auto flex">
            <FaStar className="fill-green-900" />
            <FaStar className="fill-green-900" />
            <FaStar className="fill-green-900" />
            <FaStar className="fill-green-900" />
            <FaStarHalf className="fill-green-900" />
          </div>
        </div>
      </div>
    </div>
  );
}
