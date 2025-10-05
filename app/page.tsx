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
          <h1>Bitcoin Research Day</h1>
          <p>November 6, 2025</p>
          <p>Bitcoin Research Day is a day dedicated to academic research that benefits Bitcoin.</p>
          <a href="/">Sign Up</a>
        </div>
        <div id="description">
          <h2>Bringing together researchers and developers</h2>
          <p>Bitcoin Research Day is a day dedicated to academic research that benefits Bitcoin, with the goal of bring together researchers and developers. The event will consist of talks and open discussions on cryptography, P2P networks, and more.</p>
          <a href="/">Sign Up</a>
        </div>
      </main>
    </div>
  );
}
