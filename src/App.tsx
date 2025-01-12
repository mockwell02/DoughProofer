import React from 'react';
import { proofers } from './data/proofers';
import { ProoferCard } from './components/ProoferCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dough Proofer Directory</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {proofers.map(proofer => (
            <ProoferCard key={proofer.id} proofer={proofer} />
          ))}
        </div>
      </main>
    </div>
  );
}