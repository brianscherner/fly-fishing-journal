import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function SubmitLoader(props) {
  const { isLoading } = props;

  return (
    <div className={isLoading ? "disabled-wrapper" : ""}>
      <button
        className={`btn submit-button ${isLoading ? 'submit-loader' : ''}`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? <div className="submit-loader-animation"></div>
        :
        (<span><AddCircleIcon className="add-trip-icon"/> Add Trip</span>)}
      </button>
    </div>
  )

}

export default SubmitLoader;