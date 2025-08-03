import Image from 'next/image';
import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
export default function ProfileBox() {
  return (
    <div className="w-5/12 h-10/12 -top-8 -left-8 absolute bg-white/70 rounded-2xl shadow-xl p-4">
      <div className="w-full h-auto mx-2 p-2 flex items-start  justify-around border-b border-(--border-color) ">
        <Image
          src="/img/profile.webp"
          alt="profile img"
          width={70}
          height={70}
          className="rounded-full"
        />
        <div className="w-1/2 flex flex-col items-start justify-between">
          <span className="text-lg font-medium">Olivia</span>
          <div className="w-full flex flex-col items-start justify-between ">
            <div className="w-full flex text-sm">
              <FaStar className="fill-(--them-color)" />
              <FaStar className="fill-(--them-color)" />
              <FaStar className="fill-(--them-color)" />
              <FaStar className="fill-(--them-color)" />
              <FaStarHalf className="fill-(--them-color)" />
            </div>
            <span className="text-sm text-(--them-color)">(198 Reviews)</span>
          </div>
        </div>
      </div>
      <div className="w-full h-auto mx-2 p-4 flex flex-col items-start space-y-2 justify-between border-b border-(--border-color)">
        <div className="w-full flex items-center justify-between">
          <span className="text-xs font-extralight text-(--them-color)">
            Degree
          </span>
          <span className="text-base font-light text-(--them-color)">
            Bachelor's
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-xs font-extralight text-(--them-color)">
            Orders Complete
          </span>
          <span className="text-base font-light text-(--them-color)">250</span>
        </div>
      </div>
      <div className="w-full h-auto p-4 flex flex-col space-y-1 items-start justify-between ">
        <span className="text-xs font-extralight text-(--them-color)">
          Subjects:
        </span>
        <div className="w-full flex space-y-2 space-x-2 flex-wrap">
          <span className="w-auto p-2 bg-(--border-color)/45 text-xs ">
            Art
          </span>
          <span className="w-auto p-2 bg-(--border-color)/45 text-xs ">
            Literature
          </span>
          <span className="w-auto p-2 bg-(--border-color)/45 text-xs ">
            Linguistics
          </span>
        </div>
      </div>
    </div>
  );
}
