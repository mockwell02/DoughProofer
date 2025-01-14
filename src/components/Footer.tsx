import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-gray-400 text-center border-t border-gray-800 pt-8">
          <p className="mb-4">
            Amazon, Amazon Prime, the Amazon logo and Amazon Prime logo are trademarks of Amazon.com, Inc. or its affiliates.
          </p>
          <p>
            Copyright © 2025 by DoughProofingBox.com
          </p>
        </div>
      </div>
    </footer>
  );
};