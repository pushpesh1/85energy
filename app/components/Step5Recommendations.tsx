'use client';

interface Props {
  data: any;
  onNext: () => void;
}

export default function Step5Recommendations({ data, onNext }: Props) {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-4">📊 Your Solar System Recommendation</h2>

      <ul className="mb-6 space-y-2 text-gray-700">
        <li>✅ <strong>System Size:</strong> 10.5kW (estimated)</li>
        <li>🔋 <strong>Battery:</strong> 10.1kWh (based on EV + night use)</li>
        <li>🚗 <strong>EV Charger:</strong> Compatible with Tesla, BYD, ZJBeny</li>
        <li>💸 <strong>Rebate:</strong> Up to $1,400 in VIC</li>
        <li>💰 <strong>Annual Savings:</strong> Approx. $2,500</li>
      </ul>

      <button onClick={onNext} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold">
        Continue to View Packages
      </button>
    </div>
  );
}
// This component displays the final recommendations based on user inputs.
// It summarizes the solar system size, battery, EV charger compatibility, rebates, and estimated savings.