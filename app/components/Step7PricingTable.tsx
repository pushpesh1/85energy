'use client';

import { useEffect, useState } from 'react';

interface SolarPackage {
  _id: string;
  systemSize: string;
  brand: string;
  type: string;
  phase: string;
  count: number;
  roof: string;
  price: number;
}

export default function Step7PricingTable() {
  const [packages, setPackages] = useState<SolarPackage[]>([]);
  const [filterSize, setFilterSize] = useState('');
  const [filterPhase, setFilterPhase] = useState('');

  useEffect(() => {
    fetch('/api/packages')
      .then(res => res.json())
      .then(data => setPackages(data.packages || []));
  }, []);

  const filtered = packages.filter(pkg => {
    return (
      (!filterSize || pkg.systemSize === filterSize) &&
      (!filterPhase || pkg.phase === filterPhase)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">🌞 Your Custom Solar Packages</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <select
          value={filterSize}
          onChange={(e) => setFilterSize(e.target.value)}
          className="border px-4 py-2 rounded-md text-sm"
        >
          <option value="">All System Sizes</option>
          <option value="6.6kW">6.6kW</option>
          <option value="10.5kW">10.5kW</option>
          <option value="13.2kW">13.2kW</option>
        </select>

        <select
          value={filterPhase}
          onChange={(e) => setFilterPhase(e.target.value)}
          className="border px-4 py-2 rounded-md text-sm"
        >
          <option value="">All Phases</option>
          <option value="Single">Single</option>
          <option value="Three">Three</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">System</th>
              <th className="px-6 py-4">Brand</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Phase</th>
              <th className="px-6 py-4">Count</th>
              <th className="px-6 py-4">Roof</th>
              <th className="px-6 py-4 text-right">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filtered.map(pkg => (
              <tr key={pkg._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{pkg.systemSize}</td>
                <td className="px-6 py-4">{pkg.brand}</td>
                <td className="px-6 py-4">{pkg.type}</td>
                <td className="px-6 py-4">{pkg.phase}</td>
                <td className="px-6 py-4">{pkg.count}</td>
                <td className="px-6 py-4">{pkg.roof}</td>
                <td className="px-6 py-4 text-right font-semibold text-green-600">
                  ₹{pkg.price.toLocaleString()}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-500">
                  No packages match the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// This component displays a pricing table for solar packages.
// It includes columns for system size, brand, phase, count, roof compatibility, and price.