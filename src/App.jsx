import React, { useState, useEffect } from 'react';
import Temperature from './components/Temperature';
import Highlights from './components/Highlights';

export const App = () => {
  const [city, setCity] = useState('Rajasthan');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // For loader effect

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=b37b43550572422a9e661031240310&q=${city}&aqi=no`;

  useEffect(() => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching weather data');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setIsLoading(false); // Stop loader
      })
      .catch((error) => {
        console.error('Fetch error: ', error);
        setIsLoading(false);
      });
  }, [city]);

  return (
    <div className="bg-gradient-to-b from-cyan-600 to-cyan-900 h-screen flex justify-center items-center">
      <div className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur-lg">
        <Temperature setCity={setCity} />

        {isLoading ? (
          <div className="flex justify-center mt-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
          </div>
        ) : weatherData ? (
          <div className="mt-8 grid grid-cols-2 gap-6 animate-fadeIn">
            <p className="text-slate-300 text-2xl col-span-2 text-center mb-4">
              Today's Highlights for {city}
            </p>
            <Highlights title="Temperature" value={weatherData.current.temp_c} unit="°C" />
            <Highlights title="Humidity" value={weatherData.current.humidity} unit="%" />
            <Highlights title="Wind Status" value={weatherData.current.wind_kph} unit="kph" />
            <Highlights title="Visibility" value={weatherData.current.vis_km} unit="km" />
          </div>
        ) : (
          <div className="text-white mt-8">Error fetching data</div>
        )}
      </div>
    </div>
  );
};

export default App;
