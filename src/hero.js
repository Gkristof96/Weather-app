import React from "react";
import Search from "./search";
import { BsArrowBarDown } from "react-icons/bs";

const Hero = ({ input, setInput, open, handleSearch, handleClose }) => {
  let heroClass = "hero";
  if (!open) {
    heroClass = "hero open";
  }
  return (
    <>
      <section className={heroClass}>
        <div className="container">
          <Search
            input={input}
            setInput={setInput}
            handleSearch={handleSearch}
          />
        </div>
        <div className="close-btn">
          <BsArrowBarDown size="25" onClick={() => handleClose()} />
        </div>
      </section>
    </>
  );
};

export default Hero;
