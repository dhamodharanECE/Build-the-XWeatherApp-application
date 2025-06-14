import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleWeather = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!input.trim()) return;

    setLoading(true);
    setPlace(null); // Clear previous results

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=be9d9bf0854e4ceaa6921539251406&q=${input}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status ${response.status}`);
      }

      const data = await response.json();
      setPlace(data);
    } catch (err) {
      alert('Failed to fetch weather data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>X-WeatherApp Application</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={handleWeather}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading message with exact text match */}
      {loading && <p className="loading-message">Loading data...</p>}
      
      {place && place.current && (
        <div className="weather-cards">
          <div className="weather-card">
            <h3>Temperature</h3>
            <p>{place.current.temp_c} °C</p>
          </div>
          <div className="weather-card">
            <h3>Humidity</h3>
            <p>{place.current.humidity} %</p>
          </div>
          <div className="weather-card">
            <h3>Condition</h3>
            <p>{place.current.condition.text}</p>
            <img 
              src={place.current.condition.icon} 
              alt={place.current.condition.text}
            />
          </div>
          <div className="weather-card">
            <h3>Wind Speed</h3>
            <p>{place.current.wind_kph} kph</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;