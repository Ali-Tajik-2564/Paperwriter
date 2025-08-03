import React from 'react';
import ProfileBox from '../ProfileBox/ProfileBox';

export default function ReviewBox() {
  return (
    <div className="w-[600px] h-96 m-auto relative flex  items-start justify-end bg-(--border-color)/35 rounded-2xl">
      <ProfileBox />
      <div className="w-7/12 h-full flex flex-col items-start justify-around  p-3 absolute right-4 mx-4">
        <div className="w-full h-auto flex flex-col items-start justify-between   py-3  border-b border-(--border-color)">
          <span className="text-lg font-medium">Recent Review</span>
          <span className="text-(--them-color) text-base">
            User ID # 663547
          </span>
        </div>
        <div className="w-full flex flex-col items-start justify-start ">
          <span className="text-lg font-medium">Work Type : Term Paper</span>
          <span className="text-black/60 line-clamp-3">
            "Great job on the paper . I was in a jam when my other service
            didn't deliver , but you did everything correctly, and i will be
            getting a paper again for sure!"
          </span>
        </div>
        <button className="w-36 h-auto p-3 text-white border border-(--them-color) rounded-3xl text-base font-medium tracking-wide bg-gradient-to-r from-(--them-color) to-80% to-(--primary-color)/80 hover:from-(--primary-color)/80 hover:to-80% hover:to-(--them-color)">
          Order Now
        </button>
      </div>
    </div>
  );
}
