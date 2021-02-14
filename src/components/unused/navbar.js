import React from "react";

const Navbar = ({ step, setStep }) => {
  return (
    <>
      <nav>
        <ul>
          <li
            className={`${step === 1 && "active"}`}
            onClick={() => setStep(1)}
          >
            Current
          </li>
          <li
            className={`${step === 2 && "active"}`}
            onClick={() => setStep(2)}
          >
            Hourly
          </li>
          <li
            className={`${step === 3 && "active"}`}
            onClick={() => setStep(3)}
          >
            Daily
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
