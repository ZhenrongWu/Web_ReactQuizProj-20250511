import React, { useState, useRef, useEffect } from "react";
import "../styles/main.css";

const optionsDefault = ["無懼未來的自己", "勇於挑戰的自己", "珍惜每天的自己"];

const CustomDropdown = ({
  options = optionsDefault,
  value,
  onChange,
  placeholder = "請選擇...",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown-panel" ref={ref}>
      <div
        className={`custom-dropdown-selected${open ? " open" : ""}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{value || placeholder}</span>
        {/* 左右圓形裝飾 */}
        <span className="dropdown-circle left" />
        <span className="dropdown-circle right" />
        <span className={`dropdown-arrow${open ? " open" : ""}`}>▼</span>
      </div>
      {open && (
        <div className="custom-dropdown-options">
          <div className="dropdown-playon">PLAY ON WITH</div>
          {options.map((opt, idx) => (
            <div
              className={`custom-dropdown-option-border${
                value === opt ? " selected" : ""
              }`}
              key={opt}
              style={{ animationDelay: `${0.1 * idx}s` }}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              <span className="custom-dropdown-option-text">{opt}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
