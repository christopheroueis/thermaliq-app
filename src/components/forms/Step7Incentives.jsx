import { DollarSign } from 'lucide-react'

export default function Step7Incentives({ formData, setFormData }) {
  const handleEquipmentChange = (equipment) => {
    const current = formData.equipmentSelected || []
    const updated = current.includes(equipment)
      ? current.filter(item => item !== equipment)
      : [...current, equipment]
    setFormData({ ...formData, equipmentSelected: updated })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <DollarSign className="w-16 h-16 text-success mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Tax Incentives & Rebates
        </h2>
        <p className="text-gray-600">
          Check if you qualify for federal and state incentives (Optional)
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-6">
          {/* Homeowner Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Do you own the home where the HVAC upgrade will be installed?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Yes', 'No'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData({ ...formData, ownsHome: option.toLowerCase() })}
                  className={`px-4 py-3 rounded-lg font-semibold transition ${
                    formData.ownsHome === option.toLowerCase()
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Residence */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Is this your primary residence?
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Yes', 'No'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFormData({ ...formData, primaryResidence: option.toLowerCase() })}
                  className={`px-4 py-3 rounded-lg font-semibold transition ${
                    formData.primaryResidence === option.toLowerCase()
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              What type of property is it?
            </label>
            <select
              value={formData.propertyType || ''}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
            >
              <option value="">Select...</option>
              <option value="single_family">Single-family home</option>
              <option value="multi_family">Multi-family (≤3 stories)</option>
              <option value="rental">Rental property (as landlord)</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Equipment Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Are you planning to install or recently installed (this year) any of the following?
            </label>
            <div className="space-y-2">
              {[
                { id: 'heat_pump', label: 'Heat Pump' },
                { id: 'heat_pump_water_heater', label: 'Heat Pump Water Heater' },
                { id: 'central_ac', label: 'Central AC' },
                { id: 'furnace', label: 'Furnace' },
                { id: 'weatherization', label: 'Weatherization / Insulation' }
              ].map((equipment) => (
                <label
                  key={equipment.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition"
                >
                  <input
                    type="checkbox"
                    checked={(formData.equipmentSelected || []).includes(equipment.id)}
                    onChange={() => handleEquipmentChange(equipment.id)}
                    className="w-5 h-5 text-primary focus:ring-primary rounded"
                  />
                  <span className="font-medium text-gray-700">{equipment.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Efficiency Criteria */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Will/Did the equipment meet ENERGY STAR or the program's efficiency criteria?
            </label>
            <select
              value={formData.equipmentMeetsEfficiency || ''}
              onChange={(e) => setFormData({ ...formData, equipmentMeetsEfficiency: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not_sure">Not sure</option>
            </select>
          </div>

          {/* Project Cost */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Estimated or actual installation cost?
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
                $
              </span>
              <input
                type="number"
                placeholder="5000"
                value={formData.projectCost || ''}
                onChange={(e) => setFormData({ ...formData, projectCost: e.target.value })}
                className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-gray-700">
              💡 <strong>This information helps us check your eligibility</strong> for federal tax credits (up to $3,200/year) and state rebates. All fields are optional but recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}