import React from 'react';
import ServiceHeader from './serviceHeader/serviceHeader';

export default function OnlineServices() {
  return (
    <div className="w-full my-10 p-4 flex item-center justify-evenly">
      <div className="w-80 h-96  rounded-b-md  shadow-xl  relative">
        <ServiceHeader num={1} />
      </div>
      <div className="w-80 h-96  rounded-b-md  shadow-xl  relative">
        <ServiceHeader num={2} />
      </div>
      <div className="w-80 h-96  rounded-b-md  shadow-xl  relative">
        <ServiceHeader num={3} />
      </div>
    </div>
  );
}
