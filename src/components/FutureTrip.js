import React from "react";
import PropTypes from "prop-types";

function FutureTrip(props) {
  return (
    <React.Fragment>
      <h3>{props.location}</h3>
      <p>{props.type}</p>
      <p>{props.fishSpecies}</p>
      <p>{props.climate}</p>
      <hr/>
    </React.Fragment>
  )
}

FutureTrip.propTypes = {
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fishSpecies: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  id: PropTypes.string
}

export default FutureTrip;