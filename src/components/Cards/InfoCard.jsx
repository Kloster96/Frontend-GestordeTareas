import React from 'react';

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Punto de color */}
      <div className={`w-3 h-3 ${color} rounded-full`} />

      {/* Texto con número y etiqueta */}
      <div className="flex flex-col justify-center">
        <span className="text-sm md:text-[15px] text-black font-semibold">
          {value}
        </span>
        <span className="text-xs md:text-[14px] text-gray-500">
          {label}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;