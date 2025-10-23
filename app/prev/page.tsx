'use client'

import { Events } from '@/content/data/events'
import EventRecord from '@/components/EventRecord'
import { useState } from 'react'

export default function PrevPage(){
    const [selectedYear, setSelectedYear] = useState(Events[0]?.year || '')
    
    const selectedYearData = Events.find(yearGroup => yearGroup.year === selectedYear)
    
    return(
        <main className="relative z-1 min-h-screen">
        <div className="max-w-5xl mx-auto pt-[124px] px-6">
            <h1>Previous Events</h1>
            
            <div className="flex gap-4 mb-8 mt-6">
                {Events.map((yearGroup) => (
                    <button
                        key={yearGroup.year}
                        onClick={() => setSelectedYear(yearGroup.year)}
                        className={`font-sans px-4 py-2 cursor-pointer rounded-lg transition-colors ${
                            selectedYear === yearGroup.year
                                ? 'bg-[#fb6a5b] text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                        {yearGroup.year}
                    </button>
                ))}
            </div>
            
            {selectedYearData && (
                <div>
                    <h2 className="">{selectedYearData.year}</h2>
                    {selectedYearData.events.map((event, eventIndex) => (
                        <EventRecord
                            key={eventIndex}
                            speaker={event.speaker}
                            title={event.title}
                            videoUrl={event.videoUrl}
                        />
                    ))}
                </div>
            )}
        </div>
      </main>
    )
}