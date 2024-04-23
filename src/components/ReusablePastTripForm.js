import React, { useState } from "react";
import PropTypes from "prop-types";

function ReusablePastTripForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          required/>
        <br/>
        <input
          type="text"
          name="timeOfYear"
          placeholder="Time of Year"
          required/>
        <br/>
        <input
          type="text"
          name="waterType"
          placeholder="Water Type"
          required/>
        <br/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusablePastTripForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusablePastTripForm;