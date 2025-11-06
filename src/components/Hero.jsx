import { Heart, Book } from 'lucide-react'

export default function Hero({ onDonateClick, onOrderClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50" />

      <div className="relative">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white"><Heart className="h-3.5 w-3.5" /></span>
              Sadaqah Jariyah — ongoing rewards
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
              Let Your Qur’an Be a
              <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent"> Light for Others</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Support Qur’an waqf and help distribute the words of Allah to those in need. Give with faith, track with transparency, and inspire with impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onDonateClick} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
                <Heart className="h-5 w-5" /> Donate Now
              </button>
              <button onClick={onOrderClick} className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/30 bg-white px-6 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">
                <Book className="h-5 w-5" /> Order Qur’an
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.08),transparent_40%)]" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-emerald-50 p-4">
                  <Book className="h-10 w-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Waqf Qur’an Platform</h3>
                <p className="mt-2 max-w-md text-gray-600">A peaceful, trustworthy, and transparent way to donate and order Qur’ans. Together, we spread guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
