import React from 'react';

function ForecastCard({ forecast }) {
  const daily = forecast.list.filter((item, index) => index % 8 === 0);

  const bgColors = [
    'bg-orange-400/20',
    'bg-pink-400/20',
    'bg-blue-400/20',
    'bg-green-400/20',
    'bg-yellow-400/20'
  ];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-white mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {daily.map((day, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl text-center transition-transform hover:scale-105 duration-300 shadow-md backdrop-blur-lg ${bgColors[idx % bgColors.length]}`}
          >
            <div className="text-white text-md font-semibold mb-1">
              {new Date(day.dt_txt).toLocaleDateString('en-US', {
                weekday: 'short',
              })}
            </div>
            <div className="text-white text-2xl font-bold">
              {Math.round(day.main.temp)}°C
            </div>
            <div className="text-white text-sm opacity-80 capitalize">
              {day.weather[0].main}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastCard;
