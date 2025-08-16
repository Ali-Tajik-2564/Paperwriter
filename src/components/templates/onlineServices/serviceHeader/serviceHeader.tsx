import React from 'react';

export default function ServiceHeader({ num }: { num: number }) {
  return (
    <div className=" w-full h-auto absolute -top-3 ">
      <div className="triangle relative w-3/6 mx-auto bg-(--primary-color) rounded-b-4xl p-2 px-5 text-center text-white font-semibold text-lg ">
        Step {num}
      </div>
    </div>
  );
}
