import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function ResultCharts({ results, formData }) {
  // Temperature over time data
  const temperatureData = [
    { time: '8:00 AM', maintain: 72, setback: 72, outdoor: 85, label: 'Leave' },
    { time: '10:00 AM', maintain: 72, setback: 76, outdoor: 85 },
    { time: '12:00 PM', maintain: 72, setback: 78, outdoor: 85 },
    { time: '2:00 PM', maintain: 72, setback: 78, outdoor: 85 },
    { time: '4:15 PM', maintain: 72, setback: 78, outdoor: 85, label: 'HVAC Restart' },
    { time: '5:00 PM', maintain: 72, setback: 72, outdoor: 85, label: 'Return' },
    { time: '6:00 PM', maintain: 72, setback: 72, outdoor: 85 },
  ]

  // Energy consumption comparison
  const energyData = [
    {
      scenario: 'Maintain',
      energy: 13.5,
      cost: 2.26
    },
    {
      scenario: 'Setback',
      energy: 11.7,
      cost: 1.96
    }
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-800 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}°F
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8">
      {/* Temperature Over Time Chart */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Temperature Over Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="time" 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
              label={{ value: 'Temperature (°F)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="outdoor" 
              stroke="#f59e0b" 
              strokeWidth={2}
              name="Outdoor Temp"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="maintain" 
              stroke="#ef4444" 
              strokeWidth={2}
              name="Maintain Strategy"
              strokeDasharray="5 5"
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="setback" 
              stroke="#10b981" 
              strokeWidth={3}
              name="Setback Strategy"
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-gray-600">Recommended (Setback)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-red-500"></div>
            <span className="text-gray-600">Alternative (Maintain)</span>
          </div>
        </div>
      </div>

      {/* Energy Consumption Comparison */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Energy Consumption Comparison
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={energyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="scenario" 
              stroke="#6b7280"
              style={{ fontSize: '14px', fontWeight: '600' }}
            />
            <YAxis 
              stroke="#6b7280"
              style={{ fontSize: '12px' }}
              label={{ value: 'Energy (kWh)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '12px'
              }}
            />
            <Bar 
              dataKey="energy" 
              fill="#1976D2" 
              radius={[8, 8, 0, 0]}
              label={{ position: 'top', fontSize: 14, fontWeight: 'bold' }}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-center text-green-800 font-semibold">
            💰 Setback saves 1.8 kWh per day = $0.30 in energy costs
          </p>
        </div>
      </div>
    </div>
  )
}