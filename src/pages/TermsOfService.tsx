import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg">
        <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
        <p className="text-gray-600 mb-6">
          By accessing DoughProofingBox.com, you agree to be bound by these terms of service and comply with all applicable laws and regulations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
        <p className="text-gray-600 mb-6">
          All content on this website is for informational purposes only. We provide honest reviews and recommendations, and we may receive compensation through affiliate links.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
        <p className="text-gray-600">
          The materials on DoughProofingBox.com are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
        </p>
      </div>
    </div>
  );
};