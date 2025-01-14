import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="text-gray-600 mb-6">
          We collect information that you voluntarily provide when interacting with our website. This may include your name, email address, and any other information you choose to provide.
        </p>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-gray-600 mb-6">
          We use the information we collect to provide and improve our services, communicate with you, and ensure compliance with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="text-gray-600">
          We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
        </p>
      </div>
    </div>
  );
};