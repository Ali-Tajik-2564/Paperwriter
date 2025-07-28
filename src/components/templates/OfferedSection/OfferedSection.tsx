import Link from 'next/link';
import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
export default function OfferedSection() {
  return (
    <div className="w-9/10 h-64 rounded-lg  mx-auto my10 p-4 flex items-center justify-between bg-gradient-to-r from-(--them-color) to-80% to-(--primary-color)/80 )">
      <div className="w-1/2 h-full flex flex-col items-center justify-evenly ">
        <div className="w-auto flex flex-col items-center justify-evenly space-y-1">
          <span className="text-2xl font-bold text-white tracking-wider">
            Free Services Offered
          </span>
          <span className="text-base  text-white ">
            Get all these services for free:
          </span>
        </div>
        <Link
          href="./order-now"
          className="w-36 h-auto p-2 text-center rounded-2xl bg-white text-(--them-color) cursor-pointer after::w-28 btn-pulse">
          Order Now
        </Link>
      </div>
      <div className="w-1/2 h-full flex flex-wrap p-4 justify-between items-center">
        <div className="w-1/2 flex items-center justify-start space-x-1 p-2">
          <IoMdCheckmarkCircleOutline className="fill-white w-5 h-5" />
          <span className="text-white text-lg font-medium tracking-wide">
            Proofreading
          </span>
        </div>
        <div className="w-1/2 flex items-center justify-start space-x-1 p-2">
          <IoMdCheckmarkCircleOutline className="fill-white w-5 h-5" />
          <span className="text-white text-lg font-medium tracking-wide">
            Bibliography
          </span>
        </div>
        <div className="w-1/2 flex items-center justify-start space-x-1 p-2">
          <IoMdCheckmarkCircleOutline className="fill-white w-5 h-5" />
          <span className="text-white text-lg font-medium tracking-wide">
            Unlimited Revisions
          </span>
        </div>
        <div className="w-1/2 flex items-center justify-start space-x-1 p-2">
          <IoMdCheckmarkCircleOutline className="fill-white w-5 h-5" />
          <span className="text-white text-lg font-medium tracking-wide">
            AI Detection Report
          </span>
        </div>
        <div className="w-1/2 flex items-center justify-start space-x-1 p-2">
          <IoMdCheckmarkCircleOutline className="fill-white w-5 h-5" />
          <span className="text-white text-lg font-medium tracking-wide">
            Formatting
          </span>
        </div>
        <div className="w-1/2 flex items-center justify-start space-x-1 p-2">
          <IoMdCheckmarkCircleOutline className="fill-white w-5 h-5" />
          <span className="text-white text-lg font-medium tracking-wide">
            Plagiarism Report
          </span>
        </div>
        <div className="w-1/2 flex items-center justify-start space-x-1 p-2">
          <IoMdCheckmarkCircleOutline className="fill-white w-5 h-5" />
          <span className="text-white text-lg font-medium tracking-wide">
            Title Page
          </span>
        </div>
        <div className="w-1/2 flex items-center justify-start space-x-1 p-2">
          <IoMdCheckmarkCircleOutline className="fill-white w-5 h-5" />
          <span className="text-white text-lg font-medium tracking-wide">
            24/7 Customer Support
          </span>
        </div>
      </div>
    </div>
  );
}
