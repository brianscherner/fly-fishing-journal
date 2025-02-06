import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function SubmitLoader(props) {
  const { isLoading } = props;

  return (
    <button
      className={`btn app-buttons ${isLoading ? 'submit-loader' : ''}`}
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? <div className="submit-loader"></div>
      :
      (<span>Add Trip <AddCircleIcon/></span>)}
    </button>
  )

}

export default SubmitLoader;