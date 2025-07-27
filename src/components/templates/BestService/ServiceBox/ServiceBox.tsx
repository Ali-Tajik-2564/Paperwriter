import Friendly from '@/components/layouts/Svg/Friendly';
import Online from '@/components/layouts/Svg/Online';
import OnTime from '@/components/layouts/Svg/OnTime';
import Unlimited from '@/components/layouts/Svg/Unlimited';
import ZeroAi from '@/components/layouts/Svg/ZeroAi';
import Private from '@/components/layouts/Svg/Private';
import React, { ReactNode } from 'react';

export default function ServiceBox({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="w-11/24 h-48  flex justify-between items-start rounded-lg shadow-lg hover:border hover:border-(--them-color) p-6  space-x-1">
      <span className="w-3/12 flex justify-center items-start p-0 m-0 h-auto">
        {icon === 'Zero-Ai' && <ZeroAi />}
        {icon === 'On-Time' && <OnTime />}
        {icon === 'Unlimited' && <Unlimited />}
        {icon === 'Private' && <Private />}
        {icon === 'Online' && <Online />}
        {icon === 'Friendly' && <Friendly />}
      </span>
      <div className="w-7/8  flex flex-col items-start  m-0 p-0">
        <span className="text-lg font-medium">{title}</span>
        <span className="text-sm text-black/60 line-clamp-4">{desc}</span>
      </div>
    </div>
  );
}
