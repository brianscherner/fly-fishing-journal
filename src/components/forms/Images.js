import React from "react";
import PropTypes from "prop-types";

// Firebase doesn't support custom file objects, so it currently can't upload the images
// also need a way to preview the images
// need a way to limit more than 6 images being uploaded
// need a way to delete images

function Images(props) {
  const { formData, setFormData } = props;

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Add Photos</h4>
      <p className="required-msg">Upload up to 6 photos from your trip!</p>
      <label>Photo Upload</label>
      <div className="photo-upload-container">
        <input
          type="file"
          name="image"
          defaultValue={formData.images ??= ''}
          onChange={(e) => setFormData({
            ...formData,
            images: [...(formData.images || []), ...e.target.files],
          })}
        />
      </div>
      <br/>
    </React.Fragment>
  )
}

Images.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func
}

export default Images;