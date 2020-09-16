import React from "react";
import Current from "./current";

const Weather = ({ weatherHidden, weather, loading }) => {
  return (
    <>
      {weatherHidden ? null : (
        <section className="content">
          <div className="container">
            {loading ? <h1>Loading</h1> : <Current weather={weather} />}
          </div>
        </section>
      )}
    </>
  );
};

export default Weather;
