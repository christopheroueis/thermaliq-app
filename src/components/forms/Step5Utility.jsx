import { DollarSign } from 'lucide-react'

export default function Step5Utility({ formData, setFormData, errors = {} }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <DollarSign className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Utility Costs
        </h2>
        <p className="text-gray-600">
          Help us calculate your potential savings (optional)
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-6">
          {/* Monthly Electric Bill */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Monthly Electric Bill (Optional)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                $
              </span>
              <input
                type="number"
                placeholder="150"
                value={formData.monthlyBill || ''}
                onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              We'll use this to show savings as a % of your bill
            </p>
          </div>

          {/* OR Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-semibold">OR</span>
            </div>
          </div>

          {/* Electricity Rate */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Electricity Rate ($/kWh) (Optional)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                $
              </span>
              <input
                type="number"
                step="0.01"
                placeholder="0.13"
                value={formData.electricityRate || ''}
                onChange={(e) => setFormData({ ...formData, electricityRate: e.target.value })}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Check your utility bill for this rate
            </p>
          </div>

          {/* Skip Option */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-gray-700">
              💡 <strong>Don't know?</strong> No problem! We'll estimate based on your ZIP code.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}