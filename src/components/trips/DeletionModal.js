import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function DeletionModal(props) {
  const {
    onClickingDelete,
    trip,
    closed
  } = props;

  return (
    <div className="modal-container">
      <div className="modal-card">
        <div className="modal-card-container">
          <h4>Delete trip? This action is irreversible!</h4>
          <br/>
          <span
            className="close-modal-button"
            onClick={closed}
          >
            &times;
          </span>
        </div>
        <div className="modal-buttons">
          <button
            className="btn app-buttons"
            onClick={closed}
          >
            No, Keep It
          </button>
          <button
            className="btn back-button"
            onClick={() => onClickingDelete(trip.id)}
            id="delete-button"
          >
            Yes, Delete It <DeleteIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletionModal;