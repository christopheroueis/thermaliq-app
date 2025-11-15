import { Home } from 'lucide-react'

export default function Step2Building({ formData, setFormData }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <Home className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Building Basics
        </h2>
        <p className="text-gray-600">
          Tell us about your home's size and construction
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="space-y-6">
          {/* Home Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Home Type
            </label>
            <select
              value={formData.homeType || ''}
              onChange={(e) => setFormData({ ...formData, homeType: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
            >
              <option value="">Select...</option>
              <option value="single-family">Single-Family Home</option>
              <option value="apartment">Apartment</option>
              <option value="townhouse">Townhouse</option>
              <option value="condo">Condo</option>
            </select>
          </div>

          {/* Floor Area */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Floor Area (sq ft)
            </label>
            <input
              type="number"
              placeholder="e.g., 2000"
              value={formData.floorArea || ''}
              onChange={(e) => setFormData({ ...formData, floorArea: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
            />
          </div>

          {/* Construction Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Construction Type
            </label>
            <select
              value={formData.constructionType || ''}
              onChange={(e) => setFormData({ ...formData, constructionType: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
            >
              <option value="">Select...</option>
              <option value="wood_frame">Wood Frame</option>
              <option value="brick">Brick</option>
              <option value="concrete">Concrete</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>

          {/* Construction Era */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              When was it built?
            </label>
            <select
              value={formData.constructionEra || ''}
              onChange={(e) => setFormData({ ...formData, constructionEra: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition"
            >
              <option value="">Select...</option>
              <option value="before_1980">Before 1980</option>
              <option value="1980_2000">1980-2000</option>
              <option value="2000_2010">2000-2010</option>
              <option value="after_2010">After 2010</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}