import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">
          THERMSOL.ai
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Physics-Powered HVAC Optimization
        </p>
        <Link to="/input">
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}