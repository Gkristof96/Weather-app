import React from "react";
import Weather from "./weather";
import Current from "./current";
import Hourly from "./hourly";
import Daily from "./daily";

const WeatherPage = ({ step, input, setInput }) => {
  switch (step) {
    case 1:
      return <Current setInput={setInput} input={input} />;
    case 2:
      return <Hourly input={input} />;
    case 3:
      return <Daily input={input} />;
    default:
  }
};

export default WeatherPage;
