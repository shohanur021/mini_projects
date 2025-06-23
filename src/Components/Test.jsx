import { FaSearch, FaWind, FaWater } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Weather = () => {
  const inputRef = useRef(null);
  const [city, setCity] = useState("Dhaka");
  const [weatherdata, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const cityName = inputRef.current.value.trim();
    if (cityName) {
      setCity(cityName);
    }
    
    try {
      const url = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_KEY}&q=${city}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        alert("City not found. Try again.");
        return;
      }

      setWeatherData({
        icon: data.current.condition.icon,
        city: data.location.name,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
      });
    } catch (error) {
      alert("Failed to fetch weather. Please try again.");
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-200 to-purple-100 px-4">
      <div>
        <h2 className="font-bold text-gray-950 text-4xl font-serif text-center mb-6">
          Weather News
        </h2>

        <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white w-80 sm:w-full sm:max-w-md md:max-w-lg min-h-[400px] sm:min-h-[500px] md:min-h-[550px] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Search Bar */}
          <div className="flex items-center space-x-2 sm:space-x-4 mb-6 sm:mb-10">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter City/Town"
              className="flex-1 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg text-gray-800 outline-none shadow-inner transition-all duration-300 focus:ring-2 focus:ring-indigo-300 bg-gradient-to-r from-white via-gray-100 to-white placeholder-gray-500"
            />
            <button
              onClick={fetchWeather}
              className="bg-white text-indigo-700 p-2 sm:p-3 md:p-4 rounded-full shadow-md hover:bg-indigo-100 transition text-xl"
            >
              <FaSearch />
            </button>
          </div>

          {/* Weather Info */}
          {weatherdata && (
            <>
              <div className="flex justify-center mb-4 sm:mb-5">
                <img
                  className="w-24 h-24 sm:w-32 sm:h-32"
                  src={weatherdata.icon}
                  alt="weather icon"
                />
              </div>

              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  {weatherdata.temperature}°C
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl">
                  {weatherdata.city}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-sm sm:text-base md:text-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <FaWater className="text-2xl sm:text-3xl" />
                  <div>
                    <p>{weatherdata.humidity}%</p>
                    <span className="text-xs sm:text-sm text-white/70">
                      Humidity
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <FaWind className="text-2xl sm:text-3xl" />
                  <div>
                    <p>{weatherdata.windSpeed} Km/h</p>
                    <span className="text-xs sm:text-sm text-white/70">
                      Wind Speed
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;