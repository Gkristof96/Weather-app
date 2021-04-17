import React from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations/animations";

const Search = ({
  setSearchInput,
  searchInput,
  handleSearch,
  hideWeatherDisplay,
}) => {
  return (
    <>
      <div className="search">
        <motion.div
          className="search__input"
          initial="out"
          animate="in"
          exit="out"
          variants={animationOne}
          transition={transition}
        >
          <FaSearch className="icon" />
          <input
            value={searchInput}
            className="field"
            type="text"
            placeholder="Type city..."
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => {
              setSearchInput("");
              hideWeatherDisplay();
            }}
          />
        </motion.div>

        <motion.button
          onClick={() => handleSearch()}
          className="search__btn"
          initial="out"
          animate="in"
          exit="out"
          variants={animationOne}
          transition={transition}
        >
          Search
        </motion.button>
      </div>
    </>
  );
};

export default Search;
