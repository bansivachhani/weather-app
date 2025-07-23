import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import MetricCard from "./components/MetricCard";
import "./index.css";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  const getWeatherData = async (query) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod === "404") {
        setError("⚠️ City not found. Please enter a valid city name.");
        setWeather(null);
        setForecast(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      console.error(err);
      setError("⚠️ Something went wrong. Please try again later.");
    }
  };

  const getForecastData = async (query) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod === "404") {
        setForecast(null);
      } else {
        setForecast(data);
      }
    } catch (err) {
      console.error(err);
      setForecast(null);
    }
  };

  useEffect(() => {
    getWeatherData(city);
    getForecastData(city);
  }, [city]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="p-6">
        <h1 className="text-4xl font-bold text-center">Weather App</h1>
        <p className="text-center text-lg mb-6">
          Beautiful weather forecasts for any city
        </p>

        <SearchBar setCity={setCity} error={error} />

        {weather && (
          <>
            <WeatherCard weather={weather} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <MetricCard
                label="Humidity"
                value={`${weather.main.humidity}%`}
                icon="💧"
                bgColor="bg-pink-700/60"
              />
              <MetricCard
                label="Wind Speed"
                value={`${weather.wind.speed} km/h`}
                icon="🌬️"
                bgColor="bg-green-700/80"
              />
              <MetricCard
                label="Visibility"
                value={`${weather.visibility / 1000} km`}
                icon="👁️"
                bgColor="bg-blue-900/60"
              />
              <MetricCard
                label="Pressure"
                value={`${weather.main.pressure} hPa`}
                icon="🔽"
                bgColor="bg-yellow-200/60"
              />
            </div>
          </>
        )}

        {forecast && forecast.list && <ForecastCard forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;
