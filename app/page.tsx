import HeroContent from '../content/hero.mdx'
import AboutContent from '@/content/about.mdx'
import FormatContent from '@/content/format.mdx'
import PrizeContent from '@/content/prize.mdx'
import AgendaContent from '@/content/agenda.mdx'
import FAQContent from '@/content/faq.mdx'
import FinalMessageContent from '@/content/final-message.mdx'
import Header from '@/components/Header'

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
    <div className="bg-slate-900">
      <Header />
      <main className="p-6">
        <div id="hero" className="flex flex-col gap-6 py-6">
          <HeroContent />
        </div>
        <div id="about" className="bg-black p-6 text-center md:p-16 lg:p-30 bg-[url(/dark-texture.webp)] bg-cover">
          <div className="max-w-3xl flex flex-col gap-8 items-center mx-auto">
            <AboutContent />
          </div>
        </div>
        <div id="format">
          <FormatContent />
        </div>
        <div id="prize">
          <PrizeContent />
        </div>
        <div id="agenda">
          <AgendaContent />
        </div>
        <div id="faq">
          <FAQContent />
        </div>
        <div id="final-message">
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
