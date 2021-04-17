import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loading-card">
        <img
          src="images/loading.gif"
          alt="loading"
          className="loading-card__img"
        />
        <h1 className="loading-card__title">Loading</h1>
      </div>
    </>
  );
};

export default Loading;
