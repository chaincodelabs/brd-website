import React from 'react';
import VideoLink from './VideoLink';

interface EventRecordProps {
  speaker: string;
  title: string;
  videoUrl?: string;
  className?: string;
}

export default function EventRecord({ 
  speaker, 
  title, 
  videoUrl, 
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
        </h3>
    </div>
      <p className="text-gray-300 mb-3">{speaker}</p>
      
    </div>
  );
}
