import React from "react";
import PropTypes from "prop-types";

// Firebase doesn't support custom file objects, so it currently can't upload the images
// need a way to delete images

function Images(props) {
  const { formData, onChangingFile } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Photos</h4>
      <p className="required-msg">Add up to 6 photos from your trip!</p>
      <div className="photo-upload-container">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="photo-upload-slot">
            {!formData.images[index] ? (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onChangingFile(e, index)}
              />
            ) : (
              <div className="photo-preview">
                <img
                  src={formData.images[index].preview}
                  alt={`Preview ${index}`}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover"
                  }}
                />
                {/* <button onClick={() => handleDelete(index)}>Delete</button> */}
              </div>
            )}
          </div>
        ))}
      </div>
      <br/>
    </React.Fragment>
  )
}

Images.propTypes = {
  formData: PropTypes.object,
  onChangingFile: PropTypes.func
}

export default Images;