import React from "react";

function Dropdown(props) {
  const {
    value,
    label,
    name,
    handleFormInput,
    options,
    type
  } = props;

  return (
    <React.Fragment>
      {label && <label>Location Type</label>}
      <select
        type={type}
        className="form-select"
        name={name}
        value={value}
        onChange={(e) => handleFormInput(e)}
      >
        {/* make first option disabled & greyed out so its just instructional (make first index disabled) */}
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </React.Fragment>
  )
}

export default Dropdown;