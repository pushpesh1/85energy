// Step 2 JSX goes here
'use client';

interface Step2Props {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
}

export default function Step2PropertyDetails({ data, setData, onNext }: Step2Props) {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">🏠 Property Details</h2>

      <div className="mb-4">
        <label className="block font-medium">How many people live in your household?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.householdSize || ''}
          onChange={(e) => setData({ ...data, householdSize: e.target.value })}
        >
          <option value="">Select</option>
          <option value="1–2">1–2</option>
          <option value="3–4">3–4</option>
          <option value="5+">5+</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">What type of property is it?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.propertyType || ''}
          onChange={(e) => setData({ ...data, propertyType: e.target.value })}
        >
          <option value="">Select</option>
          <option value="Single-storey">Single-storey house</option>
          <option value="Double-storey">Double-storey house</option>
          <option value="Apartment">Apartment</option>
          <option value="Commercial">Commercial/office</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">What’s your postcode?</label>
        <input
          type="text"
          className="w-full border px-3 py-2 mt-1"
          value={data.postcode || ''}
          onChange={(e) => setData({ ...data, postcode: e.target.value })}
        />
      </div>

      <button
        onClick={onNext}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold"
      >
        Continue
      </button>
    </div>
  );
}
