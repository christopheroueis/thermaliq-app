import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Lock, Eye, Database } from 'lucide-react'

export default function Consent() {
  const navigate = useNavigate()
  const [agreed, setAgreed] = useState(false)

  const handleContinue = () => {
    if (agreed) {
      navigate('/input')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Privacy & Data Usage
            </h1>
            <p className="text-gray-600">
              Your privacy is important to us. Please review before continuing.
            </p>
          </div>

          {/* Privacy Points */}
          <div className="space-y-6 mb-8">
            {/* What We Collect */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  What We Collect
                </h3>
                <p className="text-sm text-gray-600">
                  We collect your building specifications (size, insulation, HVAC type), 
                  occupancy schedule, location (ZIP code only), and optional utility cost information 
                  to calculate personalized HVAC recommendations.
                </p>
              </div>
            </div>

            {/* How We Use It */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-success" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  How We Use Your Data
                </h3>
                <p className="text-sm text-gray-600">
                  Your data is used <strong>only</strong> to perform physics-based calculations 
                  for your HVAC optimization. We analyze thermal properties to provide personalized 
                  energy-saving recommendations.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  Data Protection
                </h3>
                <p className="text-sm text-gray-600">
                  Your information is processed securely and is <strong>never sold or shared</strong> with 
                  third parties. We do not store personally identifiable information beyond your session.
                </p>
              </div>
            </div>

            {/* What We Don't Do */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">
                ✓ What We DON'T Do
              </h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• We don't collect your name, email, or phone number</li>
                <li>• We don't store your exact address (only ZIP code)</li>
                <li>• We don't sell your data to third parties</li>
                <li>• We don't track you across other websites</li>
                <li>• We don't require account creation or login</li>
              </ul>
            </div>

            {/* Sensitive Information Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-2">
                ⚠️ Be Aware
              </h3>
              <p className="text-sm text-yellow-700">
                Your occupancy schedule reveals when you're away from home. While we protect this data, 
                please ensure you're using a secure internet connection and trusted device.
              </p>
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="border-t pt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 mt-1 text-primary focus:ring-primary rounded"
              />
              <span className="text-gray-700">
                I understand and consent to THERMSOL.ai using my building and schedule data 
                to calculate personalized HVAC recommendations. I acknowledge that my data will be 
                processed securely and not shared with third parties.
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => navigate('/')}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Go Back
            </button>
            <button
              onClick={handleContinue}
              disabled={!agreed}
              className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Survey
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 text-center mt-6">
            By continuing, you agree to our data usage practices as described above. 
            You can exit at any time, and your data will not be saved.
          </p>
        </div>
      </div>
    </div>
  )
}