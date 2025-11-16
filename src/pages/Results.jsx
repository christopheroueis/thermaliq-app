import { useLocation, Link } from 'react-router-dom'
import { ArrowLeft, TrendingDown, Clock, Zap } from 'lucide-react'
import ResultCharts from '../components/ResultCharts'
import ComparisonTable from '../components/ComparisonTable'
import ScenarioSimulator from '../components/ScenarioSimulator'


export default function Results() {
  const location = useLocation()
  const formData = location.state?.formData || {}

  // TODO: Replace with actual physics calculations
  // For now, using mock data
  const results = {
    action: 'SETBACK',
    setbackTemp: 78,
    desiredTemp: formData.desiredTemp || 72,
    outdoorTemp: formData.outdoorTemp || 85,
    restartTime: '4:15 PM',
    returnTime: '5:00 PM',
    recoveryTime: 45,
    thermalTimeConstant: 3.5,
    breakEvenTime: 8.8,
    savingsPerDay: 1.80,
    savingsPerMonth: 39.60,
    savingsPerYear: 468,
    energySavedKwh: 1.8,
    percentSaved: 13.3
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-4">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Your Personalized HVAC Strategy
          </h1>
          <p className="text-gray-600">
            Based on your building's unique thermal properties
          </p>
        </div>

        {/* Main Recommendation Card */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✓ RECOMMENDED STRATEGY
              </span>
              <h2 className="text-3xl font-bold mb-2">
                {results.action === 'SETBACK' ? 'Use Temperature Setback' : 'Maintain Temperature'}
              </h2>
            </div>
            <TrendingDown className="w-16 h-16 opacity-80" />
          </div>

          {results.action === 'SETBACK' ? (
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-lg mb-4">
                  When you leave at <span className="font-bold">{formData.absenceStartTime || '8:00 AM'}</span>:
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 rounded-lg px-6 py-3">
                    <p className="text-sm opacity-90">Set thermostat to</p>
                    <p className="text-4xl font-bold">{results.setbackTemp}°F</p>
                  </div>
                  <div className="text-2xl opacity-60">→</div>
                  <div className="bg-white/20 rounded-lg px-6 py-3">
                    <p className="text-sm opacity-90">HVAC restarts at</p>
                    <p className="text-2xl font-bold">{results.restartTime}</p>
                  </div>
                </div>
                <p className="text-sm opacity-90">
                  Your home will be comfortable at {results.desiredTemp}°F when you return at {results.returnTime}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg">
                Keep your thermostat at <span className="font-bold text-3xl">{results.desiredTemp}°F</span>
              </p>
              <p className="text-sm opacity-90 mt-2">
                Your absence is too short for setback to save energy
              </p>
            </div>
          )}
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Savings Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-bold text-gray-800">Your Savings</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Per Day</span>
                <span className="text-2xl font-bold text-success">${results.savingsPerDay}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Per Month</span>
                <span className="text-xl font-bold text-gray-800">${results.savingsPerMonth}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Per Year</span>
                <span className="text-xl font-bold text-gray-800">${results.savingsPerYear}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-gray-600">
                Energy saved: <span className="font-semibold">{results.energySavedKwh} kWh/day</span>
              </p>
            </div>
          </div>

          {/* Building Physics Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-gray-800">Building Physics</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Thermal Time Constant (τ)</p>
                <p className="text-2xl font-bold text-gray-800">{results.thermalTimeConstant} hours</p>
                <p className="text-xs text-gray-500 mt-1">How fast your building changes temperature</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Break-Even Time</p>
                <p className="text-xl font-bold text-gray-800">{results.breakEvenTime} hours</p>
                <p className="text-xs text-gray-500 mt-1">Minimum absence for savings</p>
              </div>
            </div>
          </div>

          {/* Performance Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-warning" />
              </div>
              <h3 className="font-bold text-gray-800">Performance</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Energy Reduction</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-success h-3 rounded-full"
                    style={{ width: `${results.percentSaved}%` }}
                  />
                </div>
                <p className="text-2xl font-bold text-gray-800 mt-2">{results.percentSaved}% saved</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Recovery Time</p>
                <p className="text-xl font-bold text-gray-800">{results.recoveryTime} minutes</p>
                <p className="text-xs text-gray-500 mt-1">Time to reach comfort temperature</p>
              </div>
            </div>
          </div>
        </div>

{/* Scenario Simulator */}
<div className="mb-8"></div>

        {/* Scenario Simulator */}
<div className="mb-8">
  <ScenarioSimulator 
    initialFormData={formData}
    onScenarioChange={(newData) => {
      console.log('Scenario changed:', newData)
      // TODO: Recalculate results with new parameters
    }}
  />
</div>
        {/* Charts Section */}
<div className="mb-8">
  <ResultCharts results={results} formData={formData} />
</div>

{/* Comparison Table */}
<div className="mb-8">
  <ComparisonTable results={results} />
</div>



        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link to="/input">
            <button className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg">
              Try Different Scenario
            </button>
          </Link>
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition shadow-lg">
            Download Report
          </button>
        </div>
      </div>
    </div>
  )
}