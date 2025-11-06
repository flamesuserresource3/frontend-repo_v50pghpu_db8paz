import { MessageSquare, Map, ShieldCheck } from 'lucide-react'

const impacts = [
  {
    title: 'Transparent Distribution',
    desc: 'Track how and where your donated Qur’ans are delivered with regular updates.',
    icon: ShieldCheck,
  },
  {
    title: 'Stories that Inspire',
    desc: 'Real testimonials from recipients and communities benefiting from your waqf.',
    icon: MessageSquare,
  },
  {
    title: 'Reaching Far & Wide',
    desc: 'From villages to campuses, see a live map of distributions as we grow.',
    icon: Map,
  },
]

export default function Impact() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Waqf with Us</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">A mission led with trust, compassion, and accountability.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-emerald-900/10 bg-white p-6">
              <div className="inline-flex rounded-lg bg-emerald-50 p-3"><Icon className="h-6 w-6 text-emerald-600" /></div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
