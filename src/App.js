import React, { useState } from "react";
import "./css/style.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Weather from "./components/weather";
import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a21017d2f65b7002114cca6406d749df";

function App() {
  const [isWeatherDisplay, setWeatherDisplay] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const handleSearch = async () => {
    if (searchInput.length > 0) {
      setFetchError("");
      setWeatherDisplay(true);
      await axios
        .get(URL, {
          params: {
            q: searchInput,
            units: "metric",
            APPID: API_KEY,
          },
        })
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setFetchError("404 Nem található adat!");
        });
    }
  };
  const hideWeatherDisplay = () => {
    setWeatherDisplay(false);
  };
  return (
    <div className="App">
      <Header />
      <Hero
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        isWeatherDisplay={isWeatherDisplay}
        handleSearch={handleSearch}
        hideWeatherDisplay={hideWeatherDisplay}
      />
      <Weather
        isLoading={isLoading}
        weatherData={weatherData}
        fetchError={fetchError}
        isWeatherDisplay={isWeatherDisplay}
      />
    </div>
  );
}

export default App;
