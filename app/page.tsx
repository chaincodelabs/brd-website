import HeroContent from '../content/hero.mdx'
import AboutContent from '@/content/about.mdx'
import FormatContent from '@/content/format.mdx'
import PrizeContent from '@/content/prize.mdx'
import AgendaContent from '@/content/agenda.mdx'
import FAQContent from '@/content/faq.mdx'
import FinalMessageContent from '@/content/final-message.mdx'
import Header from '@/components/Header'
import FormatItem from '@/components/FormatItem'
import Picture from '@/components/Picture'

const footerMenu = [
  {
    name: 'Home',
    uri: '/'
  },
  {
    name: 'Event',
    uri: '/#event'
  },
  {
    name: 'Format',
    uri: '/#format'
  },
  {
    name: 'Research Prize',
    uri: '/#prize'
  },
  {
    name: 'Agenda',
    uri: '/#agenda'
  }
]

export default function Home() {
  return (
    <div className="bg-sky-950 bg-gradient-to-b from-[#182128] via-[#0B1116] to-[#182128] relative">
      <div className="fixed z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-[#40607A]/50 from-0% to-[#40607A]/0 to-30%"></div>
      <div className="fixed z-0 bottom-0 left-0 w-full h-full bg-gradient-to-b from-cyan-700/0 from-50% to-cyan-700/50 to-100%"></div>
      <div className="absolute z-0 top- left-0 w-full h-screen bg-[url(/hero-bg-texture.png)] bg-no-repeat bg-cover"></div>
      <Header />
      <main className="relative z-1">
        <div id="hero" className="flex flex-col gap-6 min-h-screen items-center justify-center lg:flex-row">
          <div className="flex flex-col gap-6 p-6 lg:basis-1/2 xl:basis-2/5">
            <HeroContent />
          </div>
          <Picture
            src='/hero-art.webp'
            src2x='/hero-art@2x.webp'
            alt=""
            className="w-full h-auto lg:basis-1/2 xl:basis-3/5"
          />
        </div>
        <div id="about" className="py-24 px-6 relative overflow-y-visible overflow-x-clip">
          <div className="absolute z-0 top-0 left-0 w-full h-full scale-y-150 scale-x-125 blur-3xl bg-gradient-to-b from-orange-600/50 via-orange-500/100 to-orange-600/50 opacity-30"></div>
          <div className="relative z-[1] bg-black p-6 text-center md:p-16 lg:p-30 bg-[url(/dark-texture.webp)] bg-cover max-w-7xl mx-auto">
            <div className="max-w-3xl flex flex-col gap-8 items-center mx-auto">
              <AboutContent />
            </div>
          </div>
        </div>
        <div id="format" className="flex flex-col gap-6 px-6 py-20 pb-0">
          <FormatContent />
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
        <div id="agenda" className="p-6">
          <AgendaContent />
        </div>
        <div id="faq" className="p-6">
          <FAQContent />
        </div>
        <div id="final-message" className="p-6">
          <FinalMessageContent />
        </div>
      </main>
      <footer className="p-6">
        <ul className="md:flex md:flex-row gap-4 w-full justify-between">
          {footerMenu.map((item, index) => (
            <li key={index}>
              <a href={item.uri} className="font-sans !text-white uppercase !no-underline py-1 block">{item.name}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
