import React from 'react';
import VideoLink from './VideoLink';
import type { EventItem } from '@/content/data/events';
import { TrophyIcon } from '@heroicons/react/24/solid';

interface EventRecordProps extends EventItem {
  className?: string;
}

export default function EventRecord({ 
  speaker, 
  title, 
  videoUrl, 
  prize,
  className = "" 
}: EventRecordProps) {
  return (
    <div className={`mb-6 ${className}`}>
      {prize && (
          <div className="inline-block mb-2 bg-yellow-200 bg-gradient-to-r from-orange-300  via-yellow-200 to-orange-300  text-yellow-950 px-3 py-1 rounded-full text-sm font-medium font-sans">
            <span className='mr-3'>🏆</span>
            {prize}
          </div>
      )}
      <div className="flex flex-row gap-3 items-center">
        <h3 className="text-xl text-white">
          <span className="mr-3">{title}</span>
          {videoUrl && (
            <VideoLink href={videoUrl} />
          )}
        </h3>
      </div>
      <p className="text-gray-300 mb-3">{speaker}</p>
    </div>
  );
}
