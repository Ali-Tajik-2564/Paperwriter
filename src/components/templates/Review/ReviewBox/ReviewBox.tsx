import React from 'react';
import ProfileBox from '../ProfileBox/ProfileBox';

export default function ReviewBox() {
  return (
    <div className="w-[600px] h-96 m-auto relative flex  items-center justify-between bg-(--border-color)/65 rounded-2xl">
      <ProfileBox />
      <div className="w-7/12"></div>
    </div>
  );
}
