'use client'

const footerMenu = [
  {
    name: 'Home',
    uri: '/'
  },
  {
    name: 'Event',
    uri: '/#about'
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

export default function Footer() {
  return (
    <footer className="p-6 lg:p-12 relative z-2">
      <ul className="md:flex md:flex-row gap-4 w-full justify-between max-w-7xl mx-auto">
        {footerMenu.map((item, index) => (
          <li key={index}>
            <a href={item.uri} className="font-sans !text-white uppercase !no-underline py-1 block">{item.name}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
