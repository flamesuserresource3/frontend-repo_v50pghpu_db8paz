import { useState } from 'react'
import { HeartHandshake, Gift, User } from 'lucide-react'

const packages = [
  { id: 'p1', title: "1 Qur'an", desc: 'Starter blessing for one recipient', amount: 1, price: 10 },
  { id: 'p5', title: "5 Qur'ans", desc: 'Support a small halaqah or family', amount: 5, price: 45 },
  { id: 'p10', title: "10 Qur'ans", desc: 'Empower a community center', amount: 10, price: 85 },
  { id: 'bulk', title: 'Bulk Donation', desc: 'Customize your giving amount', amount: null, price: 0 },
]

export default function DonationPackages() {
  const [selected, setSelected] = useState('p5')
  const [bulkQty, setBulkQty] = useState(20)
  const [onBehalf, setOnBehalf] = useState('')

  const current = packages.find((p) => p.id === selected)
  const qty = current?.amount ?? Math.max(1, Number(bulkQty) || 1)
  const unitPrice = current?.price ?? 9
  const total = qty * unitPrice

  const handleDonate = () => {
    alert(`Simulated donation for ${qty} Qur'ans${onBehalf ? ` on behalf of ${onBehalf}` : ''}. Total: $${total.toFixed(2)}. (Payment integration comes next)`) // Placeholder action
  }

  return (
    <section className="relative" id="donate">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Donate Qur’an (Waqf)</h2>
          <p className="mt-3 text-gray-600">Choose a package or set your own amount. Your gift spreads guidance.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`rounded-2xl border p-6 text-left transition hover:shadow-lg ${selected === p.id ? 'border-emerald-600 bg-emerald-50' : 'border-emerald-900/10 bg-white'}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{p.title}</div>
                  <div className="mt-1 text-sm text-gray-600">{p.desc}</div>
                </div>
                <Gift className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="mt-4 text-sm text-emerald-700">
                {p.amount ? `${p.amount} copies` : 'Custom quantity'}
              </div>
            </button>
          ))}
        </div>

        {selected === 'bulk' && (
          <div className="mt-6 rounded-xl border border-emerald-900/10 bg-white p-6">
            <label className="block text-sm font-medium text-gray-700">Custom quantity</label>
            <input
              type="number"
              min={1}
              value={bulkQty}
              onChange={(e) => setBulkQty(e.target.value)}
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-600 focus:outline-none"
            />
          </div>
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-900/10 bg-white p-6">
            <label className="block text-sm font-medium text-gray-700">Donate on behalf of (niat wakaf)</label>
            <div className="mt-2 flex items-center gap-3">
              <User className="h-5 w-5 text-emerald-600" />
              <input
                type="text"
                placeholder="e.g., Your parents' names"
                value={onBehalf}
                onChange={(e) => setOnBehalf(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="rounded-xl border border-emerald-900/10 bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Selected Quantity</div>
                <div className="text-2xl font-semibold text-gray-900">{qty} Qur’ans</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Estimated Total</div>
                <div className="text-2xl font-semibold text-emerald-700">${total.toFixed(2)}</div>
              </div>
            </div>
            <button onClick={handleDonate} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700">
              <HeartHandshake className="h-5 w-5" /> Proceed to Payment
            </button>
            <p className="mt-2 text-center text-xs text-gray-500">Secure payment via Stripe/PayPal/Midtrans (to be integrated)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
