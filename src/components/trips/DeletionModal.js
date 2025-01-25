import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from '@mui/icons-material/Delete';

function DeletionModal(props) {
  const {
    onClickingDelete,
    trip,
    onClosingDeleteModal
  } = props;

  return (
    <div className="deletion-modal-container">
      <div className="deletion-modal-card">
        <h4>Are you sure you want to delete this trip?</h4>
        {/* <br/> */}
        <span
          className="close-modal"
          onClick={() => onClosingDeleteModal()}
        >
          &times;
        </span>
        <div className="modal-buttons">
          <button
            className="btn app-buttons"
            onClick={() => onClosingDeleteModal()}
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

DeletionModal.propTypes = {
  onClickingDelete: PropTypes.func,
  trip: PropTypes.object,
  onClosingDeleteModal: PropTypes.func,
}

export default DeletionModal;