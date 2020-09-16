import React, { useState } from "react";
import "./css/style.css";
import Header from "./header";
import Hero from "./hero";
import Weather from "./weather";
import { fetchWeather } from "./fetch";

function App() {
  const [weatherHidden, setWeatherHidden] = useState(true);
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSearch = async () => {
    if (input.length > 0) {
      setWeatherHidden(false);
      let data = await fetchWeather(input);
      setWeather(data);
      setLoading(false);
      setInput("");
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
        handleSearch={handleSearch}
        handleClose={handleClose}
      />
      <Weather
        loading={loading}
        weather={weather}
        weatherHidden={weatherHidden}
      />
    </div>
  );
}

export default App;
