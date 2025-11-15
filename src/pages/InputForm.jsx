import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Step1Location from '../components/forms/Step1Location'
import Step2Building from '../components/forms/Step2Building'
import Step3Insulation from '../components/forms/Step3Insulation'
import Step4Schedule from '../components/forms/Step4Schedule'
import Step5Utility from '../components/forms/Step5Utility'
import Step6Review from '../components/forms/Step6Review'

export default function InputForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})

  const totalSteps = 6

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-semibold text-gray-600">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-primary h-3 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto">
      {currentStep === 1 && (
        <Step1Location formData={formData} setFormData={setFormData} />
        )}
        {currentStep === 2 && (
        <Step2Building formData={formData} setFormData={setFormData} />
)}
{currentStep === 3 && (
  <Step3Insulation formData={formData} setFormData={setFormData} />
)}{currentStep === 4 && (
    <Step4Schedule formData={formData} setFormData={setFormData} />
  )}
{currentStep === 5 && (
  <Step5Utility formData={formData} setFormData={setFormData} />
)}
{currentStep === 6 && (
  <Step6Review formData={formData} setFormData={setFormData} />
)}
      </div>

      {/* Navigation Buttons */}
      <div className="max-w-4xl mx-auto mt-8 flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition"
        >
          {currentStep === totalSteps ? 'Calculate' : 'Next'}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}