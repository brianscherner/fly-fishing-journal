import React from "react";
import PropTypes from "prop-types";

function Images(props) {
  const { formData, onChangingImage, isImageTotalExceeded } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Photos</h4>
      <p className="required-msg">Add up to 6 photos from your trip!</p>
      {/* need to give a more modern appearance - looks ugly */}
      <div className="photo-upload-slot">
        <input
          type="file"
          accept="image/*"
          multiple onChange={(e) => onChangingImage(e)}
          disabled={isImageTotalExceeded}
        />
      </div>
      <br/>
      <div className="photo-upload-container">
        {formData.images.map((image, index) => (
          // need to style so that they're centered and can be responsive to other screen sizes
          // hard coding with px values makes them overflow
          <div key ={index} className="photo-preview">
            <img
              src={image.preview}
              alt={`Preview ${index}`}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "0.45rem"
              }}
            />
          </div>
        ))}
        </div>
      <br/>
    </React.Fragment>
  )
}

Images.propTypes = {
  formData: PropTypes.object,
  onChangingImage: PropTypes.func,
  isImageTotalExceeded: PropTypes.bool
}

export default Images;