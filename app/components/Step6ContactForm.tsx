'use client';

interface Props {
  data: any;
  setData: (data: any) => void;
  onNext: () => void;
}

export default function Step6ContactForm({ data, setData, onNext }: Props) {
  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">🔐 Your Contact Details</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={data.name || ''}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="w-full border px-3 py-2 mb-4"
      />
      <input
        type="email"
        placeholder="Email Address"
        value={data.email || ''}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full border px-3 py-2 mb-4"
      />
      <input
        type="tel"
        placeholder="Mobile Number"
        value={data.phone || ''}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        className="w-full border px-3 py-2 mb-4"
      />

      <button onClick={onNext} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold">
        Submit & View Packages
      </button>
    </div>
  );
}
// This component collects the user's contact details at the final step of the assessment.
// It includes fields for name, email, and phone number, and a button to submit the data and proceed to view packages.