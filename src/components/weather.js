import React from "react";
import ContentCard from './content-card'
import Loading from './loading'

const Weather = ({ weatherHidden, weather, loading, error }) => {
  return (
    <>
      {weatherHidden ? null : (
        <section className="weather">
            {loading ? <Loading /> : <ContentCard weather={weather} error={error} />}
        </section>
      )}
    </>
  );
};

export default Weather;
