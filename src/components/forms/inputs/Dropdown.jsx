import React from "react";

function Dropdown(props) {
  const {
    value,
    label,
    name,
    handleFormInput,
    options,
    type,
    errors,
    required
  } = props;

  return (
    <React.Fragment>
      <label>{label}{required && (<span className="required-asterik">&nbsp;*</span>)}</label>
      <select
        type={type}
        className={`${errors ? "form-select invalid-field" : "form-select"}`}
        name={name}
        value={value}
        onChange={(e) => handleFormInput(e)}
      >
        <option value="" disabled>Select one</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <div className="form-validation-wrapper">
        {errors && (
          <small className="form-field-error" aria-live="polite">{errors}</small>
        )}
      </div>
    </React.Fragment>
  )
}

export default Dropdown;