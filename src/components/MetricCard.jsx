import React from 'react';

function MetricCard({ icon, label, value, bgColor = "bg-white bg-opacity-20" }) {
  return (
    <div className={`p-4 text-center rounded-xl shadow-md backdrop-blur-sm ${bgColor}`}>
      <div className="text-2xl">{icon}</div>
      <div className="font-medium">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}

export default MetricCard;
