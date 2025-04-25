import React from "react";

function TextField(props) {
  const {
    type,
    value,
    placeholder,
    label,
    name,
    errors,
    handleFormInput,
    handleCharacterLimitCheck,
    warnings
  } = props;

  return (
    <React.Fragment>
      {label && <label>Fishing Location<span className="required-asterik">&nbsp;*</span></label>}
      <input
        type={type}
        className={`${errors ? "form-control invalid-field" : "form-control"}`}
        name={name}
        value={value}
        placeholder={placeholder}
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
    </React.Fragment>
  )
}

export default TextField;