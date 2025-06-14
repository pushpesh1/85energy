'use client';

interface Props {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
}

export default function Step3EnergyUsage({ data, setData, onNext }: Props) {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">⚡ Energy Usage</h2>

      <div className="mb-4">
        <label className="block font-medium">What’s your average monthly electricity bill?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.monthlyBill || ''}
          onChange={(e) => setData({ ...data, monthlyBill: e.target.value })}
        >
          <option value="">Select</option>
          <option>$100–$200</option>
          <option>$200–$300</option>
          <option>$300–$500</option>
          <option>$500+</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Do you know your average daily usage in kWh?</label>
        <input
          type="number"
          className="w-full border px-3 py-2 mt-1"
          value={data.dailyUsage || ''}
          onChange={(e) => setData({ ...data, dailyUsage: e.target.value })}
          placeholder="Leave blank to estimate"
        />
      </div>

      <div className="mb-6">
        <label className="block font-medium">When do you use the most electricity?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.usageTime || ''}
          onChange={(e) => setData({ ...data, usageTime: e.target.value })}
        >
          <option value="">Select</option>
          <option>Mostly daytime</option>
          <option>Evenings and weekends</option>
          <option>All day</option>
          <option>Night only</option>
        </select>
      </div>

      <button onClick={onNext} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold">
        Continue
      </button>
    </div>
  );
}
// This component collects energy usage details from the user, such as monthly bill, daily usage, and peak usage times.
// It updates the form data and allows the user to proceed to the next step in the assessment process.