import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import { useLoading } from "../context/LoadingContext";

function Images(props) {
  const {
    formData,
    onChangingImage,
    onDeletingImage,
  } = props;
  const { isLoading } = useLoading();

  return (
    <React.Fragment>
      <h4 className="form-section-heading">Photos</h4>
      <p className="required-msg">Add up to 6 photos from your trip!</p>
      <div className="photo-upload-slot">
        <label className={`upload-button ${isLoading ? 'is-disabled' : ''}`}>
          <UploadIcon fontSize="medium" className="upload-icon"/>
          <span className="upload-text">Upload</span>
          <input
            type="file"
            accept="image/*"
            multiple onChange={(e) => onChangingImage(e)}
            disabled={isLoading}
          />
        </label>
      </div>
      <br/>
      <div className="photo-upload-container">
        {formData.images.map((image, index) => (
          <div key ={index} className="photo-preview">
            <div className="photo-preview-container">
              <img
                src={(typeof image === "string") ? image : image.preview}
                alt={`Preview ${index}`}
                className="photo"
              />
              {!isLoading && (
                <DeleteIcon
                  className="photo-delete-icon"
                  onClick={() => onDeletingImage(index)}
                  fontSize="large"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <br/>
    </React.Fragment>
  )
}

export default Images;