import React from "react";

const ColorRadio = ({ color, index, onChange }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        key={index}
        className="form-check-input d-flex justify-content-center align-items-center"
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: `${color}`,
        }}
        type="radio"
        onChange={onChange}
        name="colors"
        id={`inlineRadio${index + 1}`}
        value={color}
      />
    </div>
  );
};

export default ColorRadio;
