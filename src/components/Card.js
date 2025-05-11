import React from "react";

const Card = ({ svgPath, label }) => {
  return (
    <div className="card">
      <div className="card-content">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="card-svg"
        >
          {svgPath}
        </svg>
      </div>
      <div className="card-label">{label}</div>
    </div>
  );
};

export default Card;
