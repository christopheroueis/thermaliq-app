import { useState } from 'react'
import { RotateCcw } from 'lucide-react'

export default function ScenarioSimulator({ initialFormData, onScenarioChange }) {
  const [scenarioData, setScenarioData] = useState({
    outdoorTemp: parseInt(initialFormData.outdoorTemp) || 85,
    desiredTemp: parseInt(initialFormData.desiredTemp) || 72,
    absenceDuration: parseInt(initialFormData.absenceDuration) || 8,
    floorArea: parseInt(initialFormData.floorArea) || 2000,
    insulationQuality: initialFormData.insulationQuality || 'average',
  })

  const handleSliderChange = (field, value) => {
    const newData = { ...scenarioData, [field]: value }
    setScenarioData(newData)
    
    // Trigger recalculation (will be connected to physics engine later)
    if (onScenarioChange) {
      onScenarioChange(newData)
    }
  }

  const resetToOriginal = () => {
    const original = {
      outdoorTemp: parseInt(initialFormData.outdoorTemp) || 85,
      desiredTemp: parseInt(initialFormData.desiredTemp) || 72,
      absenceDuration: parseInt(initialFormData.absenceDuration) || 8,
      floorArea: parseInt(initialFormData.floorArea) || 2000,
      insulationQuality: initialFormData.insulationQuality || 'average',
    }
    setScenarioData(original)
    if (onScenarioChange) {
      onScenarioChange(original)
    }
  }

  const insulationLevels = ['poor', 'average', 'good', 'excellent']
  const insulationIndex = insulationLevels.indexOf(scenarioData.insulationQuality)

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Try Different Scenarios
          </h2>
          <p className="text-gray-600">
            Adjust parameters to see how they affect your savings
          </p>
        </div>
        <button
          onClick={resetToOriginal}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>

      <div className="space-y-6">
        {/* Outdoor Temperature Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-gray-700">
              Outdoor Temperature
            </label>
            <span className="text-2xl font-bold text-primary">
              {scenarioData.outdoorTemp}°F
            </span>
          </div>
          <input
            type="range"
            min="60"
            max="110"
            step="1"
            value={scenarioData.outdoorTemp}
            onChange={(e) => handleSliderChange('outdoorTemp', parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>60°F</span>
            <span>110°F</span>
          </div>
        </div>

        {/* Desired Temperature Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-gray-700">
              Desired Indoor Temperature
            </label>
            <span className="text-2xl font-bold text-primary">
              {scenarioData.desiredTemp}°F
            </span>
          </div>
          <input
            type="range"
            min="65"
            max="78"
            step="1"
            value={scenarioData.desiredTemp}
            onChange={(e) => handleSliderChange('desiredTemp', parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>65°F</span>
            <span>78°F</span>
          </div>
        </div>

        {/* Absence Duration Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-gray-700">
              Absence Duration
            </label>
            <span className="text-2xl font-bold text-primary">
              {scenarioData.absenceDuration} hours
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="48"
            step="1"
            value={scenarioData.absenceDuration}
            onChange={(e) => handleSliderChange('absenceDuration', parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 hour</span>
            <span>48 hours</span>
          </div>
        </div>

        {/* Floor Area Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="font-semibold text-gray-700">
              Floor Area
            </label>
            <span className="text-2xl font-bold text-primary">
              {scenarioData.floorArea.toLocaleString()} sq ft
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={scenarioData.floorArea}
            onChange={(e) => handleSliderChange('floorArea', parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>500 sq ft</span>
            <span>5,000 sq ft</span>
          </div>
        </div>

        {/* Insulation Quality Selector */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="font-semibold text-gray-700">
              Insulation Quality
            </label>
            <span className="text-xl font-bold text-primary capitalize">
              {scenarioData.insulationQuality}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {insulationLevels.map((level) => (
              <button
                key={level}
                onClick={() => handleSliderChange('insulationQuality', level)}
                className={`py-3 rounded-lg font-semibold transition capitalize ${
                  scenarioData.insulationQuality === level
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Presets */}
      <div className="mt-8 pt-6 border-t">
        <p className="font-semibold text-gray-700 mb-3">Quick Scenarios:</p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              const workDay = {
                outdoorTemp: 85,
                desiredTemp: 72,
                absenceDuration: 8,
                floorArea: scenarioData.floorArea,
                insulationQuality: scenarioData.insulationQuality,
              }
              setScenarioData(workDay)
              if (onScenarioChange) onScenarioChange(workDay)
            }}
            className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-semibold transition text-sm"
          >
            📅 Work Day (8 hrs)
          </button>
          <button
            onClick={() => {
              const weekend = {
                outdoorTemp: 85,
                desiredTemp: 72,
                absenceDuration: 48,
                floorArea: scenarioData.floorArea,
                insulationQuality: scenarioData.insulationQuality,
              }
              setScenarioData(weekend)
              if (onScenarioChange) onScenarioChange(weekend)
            }}
            className="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg font-semibold transition text-sm"
          >
            🏖️ Weekend Trip (48 hrs)
          </button>
          <button
            onClick={() => {
              const errand = {
                outdoorTemp: 85,
                desiredTemp: 72,
                absenceDuration: 2,
                floorArea: scenarioData.floorArea,
                insulationQuality: scenarioData.insulationQuality,
              }
              setScenarioData(errand)
              if (onScenarioChange) onScenarioChange(errand)
            }}
            className="px-4 py-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-lg font-semibold transition text-sm"
          >
            🚗 Quick Errand (2 hrs)
          </button>
        </div>
      </div>
    </div>
  )
}