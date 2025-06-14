// Step 1 Welcome JSX goes here
'use client';

export default function Step1Welcome({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-xl mx-auto py-10 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">
        🏡 Let’s Find the Perfect Solar Solution for Your Home!
      </h1>
      <p className="text-gray-600 mb-6">
        In just a minute, discover the ideal solar system size, battery, and EV charging solution—customised for your needs, roof type, and energy habits.
      </p>
      <button
        onClick={onNext}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold"
      >
        Start My Free Solar Assessment
      </button>
    </div>
  );
}
// This component serves as the welcome screen for the solar assessment app.
// It introduces the user to the assessment process and provides a button to start the assessment.
