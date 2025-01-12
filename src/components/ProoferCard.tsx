import React from 'react';
import { Proofer } from '../types';
import { RatingBar } from './RatingBar';
import { Star, Check } from 'lucide-react';

interface ProoferCardProps {
  proofer: Proofer;
}

const getRatingColor = (rating: number) => {
  if (rating >= 8.3) return 'bg-green-50 text-green-600';
  if (rating >= 6) return 'bg-yellow-50 text-yellow-600';
  return 'bg-orange-50 text-orange-600';
};

export const ProoferCard: React.FC<ProoferCardProps> = ({ proofer }) => {
  const ratingColorClass = getRatingColor(proofer.averageRating);
  const [bgColor, textColor] = ratingColorClass.split(' ');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex gap-6">
        <div className="w-48 h-48 flex-shrink-0">
          <img 
            src={proofer.imageUrl} 
            alt={proofer.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{proofer.name}</h2>
              <p className="text-gray-600">{proofer.brand}</p>
            </div>
            <div className={`flex items-center ${bgColor} px-4 py-2 rounded-lg`}>
              <span className={`text-3xl font-bold ${textColor}`}>{proofer.averageRating.toFixed(1)}</span>
              <Star className={`w-5 h-5 ${textColor} ml-1`} fill="currentColor" />
            </div>
          </div>

          <div className="mb-4">
            <RatingBar rating={proofer.ratings.price} label="Price" />
            <RatingBar rating={proofer.ratings.internalCapacity} label="Internal Capacity" />
            <RatingBar rating={proofer.ratings.storageSize} label="Storage Size" />
            <RatingBar rating={proofer.ratings.durability} label="Durability" />
            <RatingBar rating={proofer.ratings.easeOfClean} label="Ease of Clean" />
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-3">Why we love it</h3>
            <ul className="space-y-2">
              {proofer.description.map((point, index) => (
                <li key={index} className="flex items-start text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t pt-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">View offer on:</div>
              <div className="flex items-center justify-end gap-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                  alt="Amazon logo"
                  className="h-6 object-contain"
                />
                <a
                  href={proofer.affiliateLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  See Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};