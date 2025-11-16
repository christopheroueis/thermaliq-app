import { Check, X } from 'lucide-react'

export default function ComparisonTable({ results }) {
  const comparisonData = [
    {
      metric: 'Daily Energy Cost',
      maintain: '$2.26',
      setback: '$1.96',
      savings: '$0.30',
      better: 'setback'
    },
    {
      metric: 'Monthly Cost',
      maintain: '$49.72',
      setback: '$43.12',
      savings: '$6.60',
      better: 'setback'
    },
    {
      metric: 'Annual Cost',
      maintain: '$596',
      setback: '$518',
      savings: '$78',
      better: 'setback'
    },
    {
      metric: 'Energy per Day',
      maintain: '13.5 kWh',
      setback: '11.7 kWh',
      savings: '1.8 kWh',
      better: 'setback'
    },
    {
      metric: 'Comfort on Return',
      maintain: 'Immediate',
      setback: '45 min recovery',
      savings: '-',
      better: 'maintain'
    },
    {
      metric: 'Manual Adjustments',
      maintain: 'None needed',
      setback: 'Set before leaving',
      savings: '-',
      better: 'maintain'
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Strategy Comparison
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-700">Metric</th>
              <th className="text-center py-4 px-4 font-semibold text-red-600">Maintain at 72°F</th>
              <th className="text-center py-4 px-4 font-semibold text-green-600">Setback to 78°F</th>
              <th className="text-center py-4 px-4 font-semibold text-primary">Savings</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="py-4 px-4 font-medium text-gray-800">{row.metric}</td>
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {row.better === 'maintain' && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                    <span className={row.better === 'maintain' ? 'font-semibold' : ''}>
                      {row.maintain}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {row.better === 'setback' && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                    <span className={row.better === 'setback' ? 'font-semibold text-green-700' : ''}>
                      {row.setback}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={row.savings !== '-' ? 'font-bold text-primary' : 'text-gray-400'}>
                    {row.savings}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-green-500" />
          <span className="text-gray-600">Best for this metric</span>
        </div>
      </div>
    </div>
  )
}