import React from "react";
import PropTypes from "prop-types";

function DeletionModal(props) {
  const {
    onClickingDelete,
    trip,
    onClosingDeleteModal
  } = props;

  return (
    <div className="deletion-modal-container">
      <div className="deletion-modal">
        <div className="deletion-modal-card">
          <h5>Are you sure you want to delete this trip?</h5>
          <div className="modal-buttons">
            <button
              className="btn app-buttons"
              onClick={() => onClosingDeleteModal()}
            >
              No
            </button>
            <button
              className="btn back-button"
              onClick={() => onClickingDelete(trip.id)}
            >
              Yes
            </button>
          </div>
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