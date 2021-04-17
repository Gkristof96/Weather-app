import React from "react";
import ErrorCard from "./errorcard";
import Current from "./current";

const ContentCard = ({ weatherData, fetchError }) => {
  return (
    <>
      {fetchError.length > 0 ? (
        <ErrorCard fetchError={fetchError} />
      ) : (
        <Current weather={weatherData} />
      )}
    </>
  );
};

export default ContentCard;
