import { MapPin } from 'lucide-react'

export default function Step1Location({ formData, setFormData }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Location & Climate
        </h2>
        <p className="text-gray-600">
          Let's start with your location to get current weather data
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-6">
          {/* ZIP Code Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              placeholder="e.g., 02134"
              maxLength="5"
              value={formData.zipCode || ''}
              onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
            />
          </div>

          {/* Outdoor Temperature */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Outdoor Temperature (°F)
            </label>
            <input
              type="number"
              placeholder="85"
              value={formData.outdoorTemp || ''}
              onChange={(e) => setFormData({ ...formData, outdoorTemp: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
            />
            <p className="text-sm text-gray-500 mt-1">
              We'll fetch this automatically based on your ZIP code
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}