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
        <h3 className="text-xl text-white">{speaker}</h3>
        {videoUrl && (
          <VideoLink href={videoUrl} />
      )}
    </div>
      <p className="text-gray-300 mb-3">{title}</p>
      
    </div>
  );
}
