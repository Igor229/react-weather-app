import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ua&appid=1dc346a4efd46fe2f3360458ab0fad08`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Уведи назви міста"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Знайти йопти бля</button>
      </form>
      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Температура нахуй: {weatherData.main.temp}°C</p>
          <p>Аби знав шо: {weatherData.weather[0].description}</p>
          <p>А відчувається блять як : {weatherData.main.feels_like}°C</p>
          <p>Вологість нахуй : {weatherData.main.humidity}%</p>
          <p>Тиск на банєк : {weatherData.main.pressure}</p>
          <p>Швидкість злоєбучого вітру : {weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>Рухайси...</p>
      )}
    </div>
  );
};

export default Weather;