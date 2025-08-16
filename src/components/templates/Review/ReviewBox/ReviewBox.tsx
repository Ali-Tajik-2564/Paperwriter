import React from 'react';
import { FaStar } from 'react-icons/fa6';

export default function ReviewBox({
  commentSource,
}: {
  commentSource: string;
}) {
  let starColors;

  if (commentSource === 'site-jabber') {
    starColors = 'orange-700';
  } else if (commentSource === 'trustPilot') {
    starColors = 'green-900';
  } else {
    starColors = '(--them-color)';
  }
  return (
    <div className="w-auto  flex flex-col items-start justify-between space-y-2 h-auto rounded-2xl shadow-lg p-12">
      <div className="w-full flex items-center justify-between p-2 border-b border-(--them-color)/45">
        <div className="w-auto flex flex-col items-start justify-between">
          <span className="text-lg font-medium tracking-wide">
            {' '}
            Decent research paper
          </span>
          <span className="text-base text-black/60 font-normal">Hughes Q.</span>
        </div>
        <div className="w-auto flex justify-center items-center">
          <FaStar className={`w-5 h-5 fill-${starColors}`} />
          <FaStar className={`w-5 h-5 fill-${starColors}`} />
          <FaStar className={`w-5 h-5 fill-${starColors}`} />
          <FaStar className={`w-5 h-5 fill-${starColors}`} />
          <FaStar className={`w-5 h-5 fill-${starColors}`} />
        </div>
      </div>
      <span className="w-full text-base font-normal text-black/60 p-2 line-clamp-4">
        I was really struggling to finish my essay in time, but
        MyPerfectPaper.net helped me out. The essay was well-written, and I got
        it back a day before the deadline.
      </span>
    </div>
  );
}
