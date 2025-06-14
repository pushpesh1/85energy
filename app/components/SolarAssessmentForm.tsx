'use client';

import { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

export default function SolarAssessmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    householdSize: '',
    hasEV: false,
    hasBattery: false,
    quotationBasis: 'Monthly Consumption',
    monthlyKwh: '',
    panel: '',
    inverter: '',
  });

  const update = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };
const panelPrices: Record<string, number> = {
  'Company A': 100,
  'Company B': 200,
  'Company C': 300,
};

const inverterPrices: Record<string, number> = {
  'Inverter A': 500,
  'Inverter B': 700,
  'Inverter C': 900,
};

function calculateTotal(data: any): number {
  let total = 0;
  total += data.hasBattery ? 5700 : 0;
  total += data.hasEV ? 1200 : 0;
  total += panelPrices[data.panel?.replace(/\s\(.+\)/, '')] || 0;
  total += inverterPrices[data.inverter?.replace(/\s\(.+\)/, '')] || 0;
  return total;
}
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10 bg-white shadow-lg rounded-xl">
      {/* Step 1: Welcome */}
      <div>
        <h1 className="text-3xl font-bold mb-2 text-center">🌞 Smart Solar Assessment</h1>
        <p className="text-gray-600 text-center">Let’s find the perfect solar system for your home</p>
      </div>

      {/* Step 2: Property & Contact */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-800">👤 Contact & Household</h2>
        <input
          type="text"
          className="w-full border rounded px-4 py-2"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => update('name', e.target.value)}
        />
        <input
          type="email"
          className="w-full border rounded px-4 py-2"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => update('email', e.target.value)}
        />
        <input
          type="tel"
          className="w-full border rounded px-4 py-2"
          placeholder="Mobile No."
          value={formData.phone}
          onChange={(e) => update('phone', e.target.value)}
        />
        <input
          type="text"
          className="w-full border rounded px-4 py-2"
          placeholder="How many people in household?"
          value={formData.householdSize}
          onChange={(e) => update('householdSize', e.target.value)}
        />
      </div>

      {/* Step 3: Add-Ons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-800">⚡ Add-ons</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.hasEV}
            onChange={(e) => update('hasEV', e.target.checked)}
            className="accent-blue-600"
          />
          <span>Do you have EV?</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.hasBattery}
            onChange={(e) => update('hasBattery', e.target.checked)}
            className="accent-blue-600"
          />
          <span>Do you need a battery?</span>
        </label>
      </div>

      {/* Step 4: Quotation Inputs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-800">📊 Quotation Basis</h2>
        <select
          value={formData.quotationBasis}
          onChange={(e) => update('quotationBasis', e.target.value)}
          className="w-full border rounded px-4 py-2"
        >
          <option>Monthly Consumption</option>
          <option>Daily Usage</option>
        </select>

        <input
          type="number"
          placeholder={formData.quotationBasis === 'Monthly Consumption' ? 'Monthly Consumption (kWh)' : 'Daily Usage (kWh)'}
          className="w-full border rounded px-4 py-2"
          value={formData.monthlyKwh}
          onChange={(e) => update('monthlyKwh', e.target.value)}
        />
      </div>
      // Add after Step 4

{/* Step 5: Panel & Inverter */}
<div className="space-y-4">
  <h2 className="text-xl font-semibold text-blue-800">🔌 Choose Hardware</h2>
  <select
    value={formData.panel || ''}
    onChange={(e) => update('panel', e.target.value)}
    className="w-full border rounded px-4 py-2"
  >
    <option value="">Choose Panel Company</option>
    <option value="Company A">$100 - Company A</option>
    <option value="Company B">$200 - Company B</option>
    <option value="Company C">$300 - Company C</option>
  </select>

  <select
    value={formData.inverter || ''}
    onChange={(e) => update('inverter', e.target.value)}
    className="w-full border rounded px-4 py-2"
  >
    <option value="">Choose Inverter</option>
    <option value="Inverter A">$500 - Inverter A</option>
    <option value="Inverter B">$700 - Inverter B</option>
    <option value="Inverter C">$900 - Inverter C</option>
  </select>
</div>

{/* Step 6: Summary & Price */}
<div className="space-y-2">
  <h2 className="text-xl font-semibold text-blue-800">💰 Summary & Price</h2>

  <div className="bg-gray-50 p-4 rounded shadow-inner">
    <p><strong>Name:</strong> {formData.name}</p>
    <p><strong>Email:</strong> {formData.email}</p>
    <p><strong>Mobile:</strong> {formData.phone}</p>
    <p><strong>Monthly kWh:</strong> {formData.monthlyKwh}</p>
    <p><strong>EV:</strong> {formData.hasEV ? 'Yes' : 'No'}</p>
    <p><strong>Battery:</strong> {formData.hasBattery ? 'Yes' : 'No'}</p>
    <p><strong>Panel:</strong> {formData.panel}</p>
    <p><strong>Inverter:</strong> {formData.inverter}</p>

    <div className="mt-2 text-lg font-bold">
      Total Estimated Price: ${calculateTotal(formData)}
    </div>
  </div>
</div>

{/* Step 7: PDF Download */}
<div className="pt-4">
  <PDFDownloadLink
    document={<SolarPDF data={formData} total={calculateTotal(formData)} />}
    fileName="solar-quote.pdf"
    className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
  >
    Download Your Custom PDF Plan
  </PDFDownloadLink>
</div>


    </div>
  );
  let styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 20, marginBottom: 10 },
  text: { fontSize: 12 }
});

function SolarPDF({ data, total }: { data: any; total: number }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>☀️ 85 Energy - Solar Quote</Text>

        <Text style={styles.section}>Name: {data.name}</Text>
        <Text style={styles.section}>Email: {data.email}</Text>
        <Text style={styles.section}>Phone: {data.phone}</Text>
        <Text style={styles.section}>Monthly kWh: {data.monthlyKwh}</Text>
        <Text style={styles.section}>EV: {data.hasEV ? 'Yes' : 'No'}</Text>
        <Text style={styles.section}>Battery: {data.hasBattery ? 'Yes' : 'No'}</Text>
        <Text style={styles.section}>Panel: {data.panel}</Text>
        <Text style={styles.section}>Inverter: {data.inverter}</Text>

        <Text style={[styles.section, { marginTop: 10, fontSize: 14, fontWeight: 'bold' }]}>
          Total Price: ${total}
        </Text>
      </Page>
    </Document>
  );
}

}
