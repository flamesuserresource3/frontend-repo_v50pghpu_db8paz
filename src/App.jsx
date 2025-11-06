import { useRef } from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import DonationPackages from './components/DonationPackages'
import Impact from './components/Impact'

function App() {
  const donateRef = useRef(null)
  const handleDonateClick = () => {
    const el = document.getElementById('donate')
    el?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleOrderClick = () => {
    alert('Order flow will be added next: recipient details, shipping & tracking.')
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="sticky top-0 z-20 border-b border-emerald-900/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-amber-500" />
            <span className="font-semibold">Waqf Qur’an</span>
          </div>
          <nav className="hidden gap-6 text-sm font-medium text-gray-600 sm:flex">
            <a href="#donate" className="hover:text-emerald-700">Donate</a>
            <a href="#impact" className="hover:text-emerald-700">Impact</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <button onClick={handleDonateClick} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Donate</button>
        </div>
      </header>

      <main>
        <Hero onDonateClick={handleDonateClick} onOrderClick={handleOrderClick} />
        <Stats />
        <div id="impact"><Impact /></div>
        <DonationPackages ref={donateRef} />

        <section id="contact" className="bg-gradient-to-br from-emerald-50 to-amber-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="rounded-2xl border border-emerald-900/10 bg-white p-8">
              <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>
              <p className="mt-2 text-gray-600">Questions or collaboration? Reach us anytime.</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700">WhatsApp</a>
                <a href="#" className="inline-flex items-center justify-center rounded-lg border border-emerald-600/30 bg-white px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">Email Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-900/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Waqf Qur’an — May Allah accept.
        </div>
      </footer>
    </div>
  )
}

export default App
