import React from "react";

const EnterButton = ({ onClick }) => {
  return (
    <button className="input-hint" onClick={onClick}>
      <span className="hint-text">進入「匠藝幾何」世界 ➔</span>
    </button>
  );
};

export default EnterButton;
