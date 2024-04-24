import React from "react";
import PropTypes from "prop-types";

function ReusableFutureTripForm(props) {
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
          name="type"
          placeholder="Type"
          required/>
        <br/>
        <input
          type="text"
          name="fishSpecies"
          placeholder="Fish Species"
          required/>
        <br/>
        <input
          type="text"
          name="climate"
          placeholder="Climate"
          required/>
        <br/>
        <button type="submit">{props.buttonText}</button>
      </form>
      <br/>
    </React.Fragment>
  )
}

ReusableFutureTripForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableFutureTripForm;