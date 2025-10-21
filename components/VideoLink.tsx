import React from 'react';
import { VideoCameraIcon } from '@heroicons/react/24/solid';

interface VideoLinkProps {
  href: string;
  tooltipText?: string;
  className?: string;
}

export default function VideoLink({ 
  href, 
  tooltipText = "Watch video", 
  className = "" 
}: VideoLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center group relative ${className}`}
      title={tooltipText}
    >
      <VideoCameraIcon className="h-5 w-5 text-[#fb6a5b] transition-colors" />
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-base text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 font-sans">
        {tooltipText}
      </span>
    </a>
  );
}
