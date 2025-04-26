import React from "react";

function DatePicker(props) {
  const {
    type,
    label,
    name,
    value,
    handleFormInput,
    handleCharacterLimitCheck,
    errors,
    warnings,
    required
  } = props;

  return (
    <React.Fragment>
      <label>{label}{required && (<span className="required-asterik">&nbsp;*</span>)}</label>
      <div className="form-input-container">
        <input
          className={`${errors ? "form-control invalid-field" : "form-control"}`}
          aria-label="Date"
          type={type}
          name={name}
          value={value}
          onChange={(e) => {
            handleFormInput(e);
            handleCharacterLimitCheck(e);
          }}
        />
        <div className="form-validation-wrapper">
          {errors && (
            <small className="form-field-error" aria-live="polite">{errors}</small>
          )}
          {warnings && (
            <small className="form-field-warning" aria-live="polite">{warnings}</small>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default DatePicker;