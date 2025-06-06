import React, { useEffect } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import MobileStepper from '@mui/material/MobileStepper';

function ImageSlider(props) {
  const {
    trip,
    onMovingLeft,
    onMovingRight,
    currentImage
  } = props;

  useEffect(() => {
    trip.images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className="image-wrapper">
      {trip.images.map((activeImage, index) =>
        <div
          key={index}
          className={index === currentImage ? "active-current-image" : 'current-image'}
        >
          {index === currentImage && (
            <React.Fragment>
              <img
                src={activeImage}
                alt="Trip image"
                className="trip-details-img"
              />
              {trip.images.length >= 2 && (
                <React.Fragment>
                  <div className="move-left">
                    <NavigateBeforeIcon
                      onClick={onMovingLeft}
                      fontSize="medium"/>
                  </div>
                  <div className="move-right">
                    <NavigateNextIcon
                      onClick={onMovingRight}
                      fontSize="medium"/>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </div>
      )}

      {trip.images.length >= 2 && (
        <div className="mobile-stepper">
          <MobileStepper
            variant="dots"
            steps={trip.images.length}
            position="static"
            activeStep={currentImage}
            sx={{
              maxWidth: '100%',
              flexGrow: 1,
              borderRadius: '0.45rem',
              backgroundColor: '#e8f8fe',
              justifyContent: 'center'
            }}
          />
        </div>
      )}

      {trip.images.length >= 1 && (
        <br/>
      )}
    </div>

  )
}

export default ImageSlider;