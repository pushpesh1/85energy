'use client';

import { useState } from 'react';
import Step1Welcome from './components/Step1Welcome';
import Step2PropertyDetails from './components/Step2PropertyDetails';
import Step3EnergyUsage from './components/Step3EnergyUsage';
import Step4Preferences from './components/Step4Preferences';
import Step5Recommendations from './components/Step5Recommendations';
import Step6ContactForm from './components/Step6ContactForm';
import Step7PricingTable from './components/Step7PricingTable';

export default function HomePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({});

  const goNext = () => setStep(step + 1);

  return (
    <main className="min-h-screen bg-gray-50">
      {step === 1 && <Step1Welcome onNext={goNext} />}
      {step === 2 && <Step2PropertyDetails data={formData} setData={setFormData} onNext={goNext} />}
      {step === 3 && <Step3EnergyUsage data={formData} setData={setFormData} onNext={goNext} />}
      {step === 4 && <Step4Preferences data={formData} setData={setFormData} onNext={goNext} />}
      {step === 5 && <Step5Recommendations data={formData} onNext={goNext} />}
      {step === 6 && <Step6ContactForm data={formData} setData={setFormData} onNext={goNext} />}
      {step === 7 && <Step7PricingTable />}
    </main>
  );
}
