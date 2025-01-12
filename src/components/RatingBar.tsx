import React from 'react';

interface RatingBarProps {
  rating: number;
  label: string;
}

export const RatingBar: React.FC<RatingBarProps> = ({ rating, label }) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'bg-green-500';
    if (rating >= 6) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getTextColor = (rating: number) => {
    if (rating >= 8) return 'text-green-600';
    if (rating >= 6) return 'text-yellow-600';
    return 'text-orange-600';
  };

  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="w-32 text-sm text-gray-600">{label}</span>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div 
          className={`${getRatingColor(rating)} h-2 rounded-full`}
          style={{ width: `${rating * 10}%` }}
        />
      </div>
      <span className={`text-sm font-semibold ${getTextColor(rating)} w-8 text-center`}>{rating}</span>
    </div>
  );
};