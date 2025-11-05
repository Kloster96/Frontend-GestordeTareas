import React from 'react';

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4 space-x-6">
      {payload.map((entry, index) => (
        <div key={`legend-${index}`} className="flex items-center space-x-2">
          {/* Punto de color */}
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          {/* Texto al lado */}
          <span className="text-xs font-semibold text-gray-700">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend;