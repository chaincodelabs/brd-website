import HeroContent from '../content/hero.mdx'
import AboutContent from '@/content/about.mdx'
import FormatContent from '@/content/format.mdx'
import PrizeContent from '@/content/prize.mdx'
import AgendaContent from '@/content/agenda.mdx'
import FAQContent from '@/content/faq.mdx'
import FinalMessageContent from '@/content/final-message.mdx'

const headerMenu = [
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
    <div className="">
      <header>
        <a href="/">BRD25</a>
        <p>Midtown NYC / Chaincode Labs</p>
        <ul>
          {headerMenu.map((item, index) => (
            <li key={index}>
              <a href={item.uri}>{item.name}</a>
            </li>
          ))}
        </ul>
      </header>
      <main>
        <div id="hero">
          <HeroContent />
        </div>
        <div id="about">
          <AboutContent />
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
      <footer>
        <ul>
          {footerMenu.map((item, index) => (
            <li key={index}>
              <a href={item.uri}>{item.name}</a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
