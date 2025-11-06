const stats = [
  { label: "Qur'ans Distributed", value: 10000 },
  { label: 'Active Donors', value: 2400 },
  { label: 'Cities Reached', value: 85 },
  { label: 'Volunteers', value: 120 },
]

function formatNumber(n) {
  return n.toLocaleString()
}

export default function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl border border-emerald-900/10 bg-white/70 p-8 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-emerald-700">{formatNumber(s.value)}+</div>
                <div className="mt-1 text-sm font-medium text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
