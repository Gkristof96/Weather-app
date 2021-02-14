import React, { useState} from "react";
import "./css/style.css";
import Header from './components/header'
import Hero from './components/hero'
import Weather from './components/weather'
import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a21017d2f65b7002114cca6406d749df";

function App() {
  const [weatherHidden, setWeatherHidden] = useState(true);
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false)

  const handleSearch = async () => {
    if (input.length > 0) {
      setWeatherHidden(false);
      await axios.get(URL, {
        params: {
          q: input,
          units: "metric",
          APPID: API_KEY,
        },
      })
      .then((response) => { 
        setWeather(response.data)
        setLoading(false)
      })
      .catch((error) => setApiError(true));
    }
  };
  const handleClose = () => {
    setWeatherHidden(true);
  };
  return (
    <div className="App">
      <Header />
      <Hero
        input={input}
        setInput={setInput}
        open={weatherHidden}
        setApiError={setApiError}
        handleSearch={handleSearch}
        handleClose={handleClose}
      />
      <Weather
        loading={loading}
        weather={weather}
        error={apiError}
        weatherHidden={weatherHidden}
      />
    </div>
  );
}

export default App;
