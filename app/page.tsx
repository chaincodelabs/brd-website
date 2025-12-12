'use client'

import HeroContent from '@/content/includes/hero.mdx'
import AboutContent from '@/content/includes/about.mdx'
import FormatContent from '@/content/includes/format.mdx'
import PrizeContent from '@/content/includes/prize.mdx'
import { Agenda } from '@/content/data/agenda'
import { faq } from '@/content/data/faq'
import { Speakers } from '@/content/data/speakers'
import Picture from '@/components/Picture'
import AgendaItem from '@/components/AgendaItem'
import FAQItem from '@/components/FAQItem'
import { useState } from 'react'

export default function Home() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([])

  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <>
      <div className="fixed z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-[#40607A]/50 from-0% to-[#40607A]/0 to-30%"></div>
      <div className="fixed z-0 bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#40607A]/0 from-50% to-[#40607A]/50 to-100%"></div>
      <div className="absolute z-0 top- left-0 w-full h-screen bg-[url(/hero-bg-texture.png)] bg-no-repeat bg-cover"></div>
      <main className="relative z-1">
        <div id="hero" className="p-6 lg:p-12 relative">
          <div className="flex flex-col gap-6 min-h-screen items-center justify-center lg:flex-row max-lg:relative max-lg:top-[96px] max-w-7xl mx-auto lg:justify-start overflow-y-visible">
            <div className="flex flex-col gap-6 lg:basis-1/2 xl:basis-2/5 text-shadow-md text-xl">
              <HeroContent />
            </div>
            <Picture
              src='/hero-art.webp'
              src2x='/hero-art@2x.webp'
              alt=""
              className="w-full h-auto lg:basis-1/2 xl:basis-3/5 relative max-lg:-right-6 lg:absolute lg:right-0 lg:w-3/5"
            />
          </div>
        </div>
        <div id="about" className="py-24 px-6 lg:px-12 relative overflow-y-visible overflow-x-clip">
          <div className="absolute z-0 top-0 left-0 w-full h-full scale-y-150 scale-x-125 blur-3xl bg-gradient-to-b from-orange-600/50 via-orange-500/100 to-orange-600/50 opacity-30"></div>
          <div className="relative z-[1] bg-black p-6 text-center md:p-16 lg:p-30 bg-[url(/dark-texture.webp)] bg-cover max-w-7xl mx-auto">
            <div className="max-w-3xl flex flex-col gap-8 items-center mx-auto">
              <AboutContent />
            </div>
          </div>
        </div>
        <div id="format" className="px-6 py-20 lg:px-12 pb-0">
          <div className="flex flex-col gap-6 max-w-7xl mx-auto">
            <FormatContent />
          </div>
        </div>
        <div id="prize" className="p-6 md:py-16 lg:py-30 flex flex-col gap-6">
          <div className="flex flex-col gap-6 max-w-3xl mx-auto text-center items-center">
            <PrizeContent />
          </div>
          <Picture 
            src="/bitcoin-research-prize.png"
            src2x="/bitcoin-research-prize@2x.png"
            alt="Bitcoin Research Prize"
            className="w-full h-auto max-w-7xl mx-auto block"
          />
        </div>
        <div id="speakers" className="p-6 md:py-16 lg:py-30 flex flex-col gap-6 relative z-[1]">
          <div className="flex flex-col gap-12 max-w-7xl w-full mx-auto text-center items-center">
            <h2>Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {Speakers.map((speaker, index) =>{
                const SpeakerContent = () => (
                  <div className="flex flex-col gap-6 items-center justify-start">
                    <div className="rounded-3xl overflow-hidden  border border-zinc-500 p-2">
                      <div className='rounded-2xl overflow-hidden w-[200px] h-[200px] grayscale-100'>
                        <Picture
                          src={speaker.imgSrc}
                          src2x={speaker.imgSrc2x}
                          alt={speaker.name}
                          width={128}
                          height={128}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="!mb-0 text-white">{speaker.name}</h3>
                      {speaker.title && <p className="!mb-0 text-white">{speaker.title}</p>}
                      {speaker.organization && <p className="!mb-0 text-zinc-300">{speaker.organization}</p>}
                    </div>
                  </div>
                );

                return speaker.link ? (
                  <a 
                    href={speaker.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-opacity text-white hover:!no-underline"
                    key={index}
                  >
                    <SpeakerContent />
                  </a>
                ) : (
                  <div key={index}>
                    <SpeakerContent />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="agenda" className="py-24 px-6 lg:px-12 relative overflow-y-visible overflow-x-clip">
          <div className="absolute z-0 top-0 left-0 w-full h-full scale-y-150 scale-x-125 blur-3xl bg-gradient-to-b from-orange-600/50 via-orange-500/100 to-orange-600/50 opacity-30"></div>
          <div className="relative z-[1] bg-black p-8 max-w-7xl mx-auto">
            <div className="flex flex-col gap-8 mx-auto">
              <h2>Agenda</h2>
              {Agenda.length === 0 ?
                <p className="font-sans text-2xl text-center border-zinc-800 border p-6">Coming Soon</p>
              :
                <div className="border border-zinc-800 grid grid-cols-1">
                  {Agenda.map((agendaItem, key) => (
                    <AgendaItem
                      time={agendaItem.time}
                      type={agendaItem.type}
                      content={agendaItem.content}
                      imgSrc={agendaItem.imgSrc}
                      videoSrc={agendaItem.videoSrc}
                      key={key}
                    />
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
        <div id="faq" className="p-6 lg:px-12 relative z-1 pb-24">
          <div className="flex flex-col gap-6 max-w-7xl mx-auto">
            <h2>FAQ</h2>
            {faq.map((faqItem, index) => (
              <FAQItem 
                key={index}
                question={faqItem.question} 
                answer={faqItem.answer} 
                open={openFAQs.includes(index)}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
