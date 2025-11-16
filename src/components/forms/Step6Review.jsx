import { CheckCircle } from 'lucide-react'

export default function Step6Review({ formData = {} }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Review Your Information
        </h2>
        <p className="text-gray-600">
          Check everything looks correct before we calculate
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-6">
          {/* Location */}
          <div className="border-b pb-4">
            <h3 className="font-semibold text-gray-800 mb-3">📍 Location & Climate</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">ZIP Code:</span>
                <span className="ml-2 font-medium">{formData.zipCode || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">Outdoor Temp:</span>
                <span className="ml-2 font-medium">{formData.outdoorTemp || 'Not provided'}°F</span>
              </div>
            </div>
          </div>

          {/* Building */}
          <div className="border-b pb-4">
            <h3 className="font-semibold text-gray-800 mb-3">🏠 Building Details</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">Home Type:</span>
                <span className="ml-2 font-medium capitalize">{formData.homeType?.replace('_', ' ') || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">Floor Area:</span>
                <span className="ml-2 font-medium">{formData.floorArea || 'Not provided'} sq ft</span>
              </div>
              <div>
                <span className="text-gray-600">Construction:</span>
                <span className="ml-2 font-medium capitalize">{formData.constructionType?.replace('_', ' ') || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">Built:</span>
                <span className="ml-2 font-medium">{formData.constructionEra?.replace('_', '-') || 'Not provided'}</span>
              </div>
            </div>
          </div>

          {/* Insulation */}
          <div className="border-b pb-4">
            <h3 className="font-semibold text-gray-800 mb-3">🪟 Insulation & HVAC</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">Insulation:</span>
                <span className="ml-2 font-medium capitalize">{formData.insulationQuality || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">Windows:</span>
                <span className="ml-2 font-medium capitalize">{formData.windowType?.replace('_', ' ') || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">HVAC Type:</span>
                <span className="ml-2 font-medium capitalize">{formData.hvacType?.replace('_', ' ') || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">HVAC Age:</span>
                <span className="ml-2 font-medium">{formData.hvacAge?.replace('_', ' ') || 'Not provided'}</span>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="border-b pb-4">
            <h3 className="font-semibold text-gray-800 mb-3">⏰ Schedule</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">Desired Temp:</span>
                <span className="ml-2 font-medium">{formData.desiredTemp || 'Not provided'}°F</span>
              </div>
              <div>
                <span className="text-gray-600">Absence Duration:</span>
                <span className="ml-2 font-medium">{formData.absenceDuration || 'Not provided'} hours</span>
              </div>
              <div>
                <span className="text-gray-600">Leave Time:</span>
                <span className="ml-2 font-medium">{formData.absenceStartTime || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">Days Per Week:</span>
                <span className="ml-2 font-medium">{formData.daysPerWeek || 'Not provided'} days</span>
              </div>
            </div>
          </div>

          {/* Utility */}
          <div className="border-b pb-4">
            <h3 className="font-semibold text-gray-800 mb-3">💰 Utility Costs</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">Monthly Bill:</span>
                <span className="ml-2 font-medium">{formData.monthlyBill ? `$${formData.monthlyBill}` : 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">Electricity Rate:</span>
                <span className="ml-2 font-medium">{formData.electricityRate ? `$${formData.electricityRate}/kWh` : 'Not provided'}</span>
              </div>
            </div>
          </div>

          {/* Tax Incentives */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">🏛️ Tax Incentives (Optional)</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-gray-600">Homeowner:</span>
                <span className="ml-2 font-medium capitalize">{formData.ownsHome || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">Primary Residence:</span>
                <span className="ml-2 font-medium capitalize">{formData.primaryResidence || 'Not provided'}</span>
              </div>
              <div>
                <span className="text-gray-600">Equipment Selected:</span>
                <span className="ml-2 font-medium">{(formData.equipmentSelected || []).length || 'None'} items</span>
              </div>
              <div>
                <span className="text-gray-600">Project Cost:</span>
                <span className="ml-2 font-medium">{formData.projectCost ? `$${formData.projectCost}` : 'Not provided'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ready Message */}
        <div className="mt-8 bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-center text-gray-700 font-medium">
            Ready to calculate your optimal HVAC strategy!
          </p>
        </div>
      </div>
    </div>
  )
}