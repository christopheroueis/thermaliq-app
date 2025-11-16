import { Clock } from 'lucide-react'

export default function Step4Schedule({ formData, setFormData, errors = {} }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Schedule & Comfort
        </h2>
        <p className="text-gray-600">
          When are you away and what temperature do you prefer?
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-6">
          {/* Desired Temperature */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Desired Indoor Temperature (°F) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="72"
              required
              value={formData.desiredTemp || ''}
              onChange={(e) => setFormData({ ...formData, desiredTemp: e.target.value })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.desiredTemp ? 'border-red-500' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.desiredTemp && (
              <p className="text-sm text-red-500 mt-1">{errors.desiredTemp}</p>
            )}
          </div>

          {/* Absence Duration */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              How long are you typically away? <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.absenceDuration || ''}
              onChange={(e) => setFormData({ ...formData, absenceDuration: e.target.value })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.absenceDuration ? 'border-red-500' : 'border-gray-200 focus:border-primary'
              }`}
            >
              <option value="">Select...</option>
              <option value="2">2 hours</option>
              <option value="4">4 hours</option>
              <option value="8">8 hours (work day)</option>
              <option value="12">12 hours</option>
              <option value="24">24 hours</option>
              <option value="48">48 hours (weekend)</option>
            </select>
            {errors.absenceDuration && (
              <p className="text-sm text-red-500 mt-1">{errors.absenceDuration}</p>
            )}
          </div>

          {/* Absence Start Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              What time do you usually leave? <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              required
              value={formData.absenceStartTime || ''}
              onChange={(e) => setFormData({ ...formData, absenceStartTime: e.target.value })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.absenceStartTime ? 'border-red-500' : 'border-gray-200 focus:border-primary'
              }`}
            />
            {errors.absenceStartTime && (
              <p className="text-sm text-red-500 mt-1">{errors.absenceStartTime}</p>
            )}
          </div>

          {/* Days Per Week */}
<div>
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    How many days per week are you away like this? <span className="text-red-500">*</span>
  </label>
  <select
    required
    value={formData.daysPerWeek || ''}
    onChange={(e) => setFormData({ ...formData, daysPerWeek: e.target.value })}
    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
      errors.daysPerWeek ? 'border-red-500' : 'border-gray-200 focus:border-primary'
    }`}
  >
    <option value="">Select...</option>
    <option value="1">1 day per week</option>
    <option value="2">2 days per week</option>
    <option value="3">3 days per week</option>
    <option value="4">4 days per week</option>
    <option value="5">5 days per week (weekdays)</option>
    <option value="6">6 days per week</option>
    <option value="7">7 days per week (every day)</option>
  </select>
  {errors.daysPerWeek && (
    <p className="text-sm text-red-500 mt-1">{errors.daysPerWeek}</p>
  )}
</div>
        </div>
      </div>
    </div>
  )
}