import React from "react";
import Search from "./search";
import { BsArrowBarDown } from "react-icons/bs";

const Hero = ({
  searchInput,
  setSearchInput,
  isWeatherDisplay,
  handleSearch,
  hideWeatherDisplay,
}) => {
  return (
    <>
      <section className={`hero ${isWeatherDisplay && "open"}`}>
        <div className="container">
          <Search
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearch={handleSearch}
            hideWeatherDisplay={hideWeatherDisplay}
          />
        </div>
        <div className="close-btn">
          <BsArrowBarDown size="25" onClick={() => hideWeatherDisplay()} />
        </div>
      </section>
    </>
  );
};

export default Hero;
