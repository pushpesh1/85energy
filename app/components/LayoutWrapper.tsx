'use client';

import Image from 'next/image';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Replace with your actual logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="85 Energy" width={36} height={36} />
            <span className="font-semibold text-lg text-gray-800">85 Energy</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-10">
        {children}
      </main>
    </div>
  );
}
