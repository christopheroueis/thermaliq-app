import { Wind } from 'lucide-react'

export default function Step3Insulation({ formData, setFormData, errors = {} }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <Wind className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Insulation & Windows
        </h2>
        <p className="text-gray-600">
          These affect how quickly your building heats up or cools down
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-6">
          {/* Insulation Quality */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Insulation Quality <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Poor', 'Average', 'Good', 'Excellent'].map((quality) => (
                <button
                  key={quality}
                  type="button"
                  onClick={() => setFormData({ ...formData, insulationQuality: quality.toLowerCase() })}
                  className={`px-4 py-3 rounded-lg font-semibold transition ${
                    formData.insulationQuality === quality.toLowerCase()
                      ? 'bg-primary text-white'
                      : errors.insulationQuality
                      ? 'bg-red-50 text-gray-700 border-2 border-red-500 hover:bg-red-100'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {quality}
                </button>
              ))}
            </div>
            {errors.insulationQuality && (
              <p className="text-sm text-red-500 mt-1">{errors.insulationQuality}</p>
            )}
          </div>

          {/* Window Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Window Type <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.windowType || ''}
              onChange={(e) => setFormData({ ...formData, windowType: e.target.value })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.windowType ? 'border-red-500' : 'border-gray-200 focus:border-primary'
              }`}
            >
              <option value="">Select...</option>
              <option value="single_pane">Single-Pane</option>
              <option value="double_pane">Double-Pane</option>
              <option value="triple_pane">Triple-Pane</option>
              <option value="low_e_double">Low-E Double-Pane</option>
            </select>
            {errors.windowType && (
              <p className="text-sm text-red-500 mt-1">{errors.windowType}</p>
            )}
          </div>

          {/* HVAC Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              HVAC System Type <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.hvacType || ''}
              onChange={(e) => setFormData({ ...formData, hvacType: e.target.value })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.hvacType ? 'border-red-500' : 'border-gray-200 focus:border-primary'
              }`}
            >
              <option value="">Select...</option>
              <option value="central_ac">Central Air Conditioning</option>
              <option value="heat_pump">Heat Pump</option>
              <option value="window_unit">Window Unit</option>
              <option value="ductless">Ductless Mini-Split</option>
            </select>
            {errors.hvacType && (
              <p className="text-sm text-red-500 mt-1">{errors.hvacType}</p>
            )}
          </div>

          {/* HVAC Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              HVAC System Age <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.hvacAge || ''}
              onChange={(e) => setFormData({ ...formData, hvacAge: e.target.value })}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition ${
                errors.hvacAge ? 'border-red-500' : 'border-gray-200 focus:border-primary'
              }`}
            >
              <option value="">Select...</option>
              <option value="under_5">Less than 5 years</option>
              <option value="5_10">5-10 years</option>
              <option value="10_15">10-15 years</option>
              <option value="15_plus">15+ years</option>
            </select>
            {errors.hvacAge && (
              <p className="text-sm text-red-500 mt-1">{errors.hvacAge}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}