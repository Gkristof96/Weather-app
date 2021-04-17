import React from "react";
import ContentCard from "./content-card";
import Loading from "./loading";

const Weather = ({ isWeatherDisplay, weatherData, isLoading, fetchError }) => {
  return (
    <>
      {isWeatherDisplay && (
        <section className="weather">
          {isLoading ? (
            <Loading />
          ) : (
            <ContentCard weatherData={weatherData} fetchError={fetchError} />
          )}
        </section>
      )}
    </>
  );
};

export default Weather;
