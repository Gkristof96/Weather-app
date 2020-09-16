import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  WiHumidity,
  WiBarometer,
  WiWindy,
  WiHorizonAlt,
  WiHorizon,
} from "react-icons/wi";

const Current = ({ weather }) => {
  return (
    <>
      <div className="weather-card">
        <div className="weather-card__current">
          <div className="header">
            <h1>
              <FaMapMarkerAlt />
              {`${weather.name}, ${weather.sys && weather.sys.country}`}
            </h1>
            <h2>{`${new Date(
              weather.dt * 1000
            ).toLocaleTimeString()} ${new Date(weather.dt * 1000)
              .toLocaleDateString()
              .slice(6)}`}</h2>
          </div>
          <div className="main">
            {weather.main && weather.weather && (
              <>
                <h1>{`${Math.round(weather.main.temp)} °C`}</h1>
                <img
                  src={`images/weather-icons/${weather.weather[0].icon}.png`}
                  alt={`${weather.weather[0].icon}`}
                />{" "}
                <h2>{`Feels like: ${Math.round(
                  weather.main.feels_like
                )} °C`}</h2>
              </>
            )}
          </div>
          <div className="other-data">
            {weather.main && weather.wind && weather.sys && (
              <div>
                <ul>
                  <li>
                    <WiHumidity size="40" />
                    {weather.main.humidity}
                  </li>
                  <li>
                    <WiBarometer size="40" />
                    {weather.main.pressure}
                  </li>
                  <li>
                    <WiWindy size="40" />
                    {weather.wind.speed}
                  </li>
                  <li>
                    <WiHorizonAlt size="40" />
                    {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                  </li>
                  <li>
                    <WiHorizon size="40" />
                    {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Current;
