import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ setInput, input, handleSearch, setApiError}) => {
  return (
    <>
      <div className="search">
        <div className="search__input">
          <FaSearch className="icon" />
          <input
            value={input}
            className="field"
            type="text"
            placeholder="Type city..."
            onClick={() => {
              setInput('')
              setApiError(false)
            }}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button onClick={() => handleSearch()} className="search__btn">
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
