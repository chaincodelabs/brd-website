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
      
      <div className="flex flex-row gap-3 items-center">
        <h3 className="text-xl text-white">
          <span className="mr-3">{title}</span>
          {videoUrl && (
            <VideoLink href={videoUrl} />
          )}
          {prize && (
            <div className="inline-flex items-center group relative ml-3">
              <TrophyIcon className="h-5 w-5 text-yellow-500 transition-colors" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-base bg-yellow-200 bg-gradient-to-r from-orange-300  via-yellow-200 to-orange-300  text-yellow-950 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 font-sans">
                {prize}
              </span>
            </div>
          )}
        </h3>
      </div>
      <p className="text-gray-300 mb-3">{speaker}</p>
    </div>
  );
}
