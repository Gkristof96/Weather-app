import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const ErrorCard = ({ fetchError }) => {
  return (
    <>
      <div className="error">
        <h1 className="error__title">
          <FaTimesCircle></FaTimesCircle>
          {fetchError}
        </h1>
        <h2 className="error__subtitle">
          Előfordulhat hogy az alkalmazás nem tárol adatokat a településről,
          vagy elgépelte azt!
        </h2>
      </div>
    </>
  );
};

export default ErrorCard;
