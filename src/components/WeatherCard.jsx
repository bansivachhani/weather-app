import React from 'react';

function WeatherCard({ weather }) {
  const condition = weather.weather[0].main;

  const getWeatherIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'clouds':
        return '☁️';
      case 'rain':
        return '🌧️';
      case 'drizzle':
        return '🌦️';
      case 'clear':
        return '☀️';
      case 'snow':
        return '❄️';
      case 'thunderstorm':
        return '⛈️';
      case 'mist':
      case 'haze':
      case 'fog':
        return '🌫️';
      default:
        return '🌡️';
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl text-center shadow-lg mb-4 transition-transform hover:scale-105 duration-300">
      <div className="text-lg font-semibold mb-2">
        📍 {weather.name}, {weather.sys.country}
      </div>
      <div className="text-6xl font-bold flex justify-center items-center gap-2">
        {Math.round(weather.main.temp)}°C
        <span className="text-5xl">{getWeatherIcon(condition)}</span>
      </div>
      <div className="text-xl capitalize mt-2">{condition}</div>
      <div className="text-sm opacity-80">
        Feels like {Math.round(weather.main.feels_like)}°C
      </div>
    </div>
  );
}

export default WeatherCard;
