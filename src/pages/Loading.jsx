import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Loading() {
  const navigate = useNavigate()
  const location = useLocation()
  const formData = location.state?.formData || {}
  
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState('Analyzing building properties...')

  const steps = [
    'Analyzing building properties...',
    'Calculating thermal time constant (τ)...',
    'Determining break-even time...',
    'Optimizing setback temperature...',
    'Computing your savings...'
  ]

  const tips = [
    'The average US household spends $1,900/year on energy bills.',
    'Smart HVAC strategies can save 10-20% on cooling costs.',
    'Thermal time constant determines how fast your building responds to temperature changes.',
    'Well-insulated homes can maintain temperature 3x longer than poorly insulated ones.',
    'The optimal setback depends on your building\'s unique thermal properties.'
  ]

  const [currentTip, setCurrentTip] = useState(tips[0])

  useEffect(() => {
    // Simulate calculation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Navigate to results page
          setTimeout(() => {
            navigate('/results', { state: { formData } })
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 100)

    return () => clearInterval(interval)
  }, [navigate, formData])

  useEffect(() => {
    // Update step message based on progress
    const stepIndex = Math.floor((progress / 100) * steps.length)
    if (stepIndex < steps.length) {
      setCurrentStep(steps[stepIndex])
    }
  }, [progress])

  useEffect(() => {
    // Rotate tips every 3 seconds
    const tipInterval = setInterval(() => {
      setCurrentTip(tips[Math.floor(Math.random() * tips.length)])
    }, 3000)

    return () => clearInterval(tipInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
            <span className="text-4xl"></span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            THERMSOL.ai is analyzing...
          </h1>
          <p className="text-gray-600">
            Calculating your optimal HVAC strategy
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-600">Progress</span>
              <span className="text-sm font-semibold text-primary">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-primary-light h-4 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <p className="text-center text-gray-700 font-medium mt-4">
            {currentStep}
          </p>
        </div>

        {/* Energy Tip */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary">
          <p className="text-sm font-semibold text-primary mb-2">💡 Did you know?</p>
          <p className="text-gray-700 leading-relaxed">
            {currentTip}
          </p>
        </div>
      </div>
    </div>
  )
}