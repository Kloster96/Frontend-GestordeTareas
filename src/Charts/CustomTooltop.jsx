import React from 'react';

const CustomTooltop = ({ active, payload }) => {
  if (!active || !payload || payload.length === 0 || !payload[0]) {
    return null; // No mostrar nada si no hay datos válidos
  }

  const { name, value } = payload[0];

  return (
    <div className="bg-white shadow-md rounded-lg p-2 border border-gray-200">
      <p className="text-xs font-semibold text-purple-800 mb-1">{name}</p>
      <p className="text-sm text-gray-900">
        Count: <span>{value}</span>
      </p>
    </div>
  );
};

export default CustomTooltop;