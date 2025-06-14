'use client';

interface Props {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
}

export default function Step4Preferences({ data, setData, onNext }: Props) {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">🔧 Preferences</h2>

      <div className="mb-4">
        <label className="block font-medium">Do you own or plan to buy an EV?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.evOwnership || ''}
          onChange={(e) => setData({ ...data, evOwnership: e.target.value })}
        >
          <option value="">Select</option>
          <option>Yes, I have one</option>
          <option>Planning to buy soon</option>
          <option>No plans</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Do you use electric hot water?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.electricHotWater || ''}
          onChange={(e) => setData({ ...data, electricHotWater: e.target.value })}
        >
          <option value="">Select</option>
          <option>Yes</option>
          <option>No</option>
          <option>Not sure</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Are you interested in battery storage?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.batteryInterest || ''}
          onChange={(e) => setData({ ...data, batteryInterest: e.target.value })}
        >
          <option value="">Select</option>
          <option>Yes</option>
          <option>Maybe</option>
          <option>Not right now</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-medium">What type of electrical phase?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.phaseType || ''}
          onChange={(e) => setData({ ...data, phaseType: e.target.value })}
        >
          <option value="">Select</option>
          <option>Single phase</option>
          <option>Three phase</option>
          <option>Not sure</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">What type of roof?</label>
        <select
          className="w-full border px-3 py-2 mt-1"
          value={data.roofType || ''}
          onChange={(e) => setData({ ...data, roofType: e.target.value })}
        >
          <option value="">Select</option>
          <option>Tile</option>
          <option>Tin (Colorbond)</option>
        </select>
      </div>

      <button onClick={onNext} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold">
        Continue
      </button>
    </div>
  );
}
// This component collects user preferences related to solar system setup
// such as EV ownership, hot water type, battery interest, electrical phase, and roof type.