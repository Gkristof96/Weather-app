import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "a21017d2f65b7002114cca6406d749df";

export const fetchWeather = async (query) => 
  await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  })
};
