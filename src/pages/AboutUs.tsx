import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          Welcome to DoughProofingBox.com, your trusted resource for finding the perfect dough proofing solution. Our mission is to help both home bakers and professionals make informed decisions about their baking equipment.
        </p>
        <p className="text-gray-600 mb-6">
          We thoroughly test and review each product, considering factors like temperature control, capacity, durability, and ease of cleaning. Our ratings are based on hands-on experience and real user feedback.
        </p>
        <p className="text-gray-600">
          Founded by a team of passionate bakers and kitchen equipment experts, we strive to provide unbiased, comprehensive information to help you choose the right dough proofer for your needs.
        </p>
      </div>
    </div>
  );
};