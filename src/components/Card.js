import React, { useState } from "react";

const Card = ({
  svgPath,
  label,
  position,
  onCardSelect,
  isSelected,
  style = {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClassName = `card card-${position} ${
    isSelected ? "card-selected" : ""
  } ${isHovered ? "card-hovered" : ""}`;

  const handleClick = (e) => {
    e.stopPropagation();
    if (onCardSelect) onCardSelect(position);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={cardClassName}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
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
