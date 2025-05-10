import React, { useEffect, useState } from "react";
import DestinationInfo from "../cards/DestinationInfo";
import TripCosts from '../cards/TripCosts';
import GearRequirements from '../cards/GearRequirements';
import Miscellaneous from '../cards/Miscellaneous';
import TripNotes from '../cards/TripNotes';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ImageSlider from "./ImageSlider";
import DeletionModal from "../ui/DeletionModal";

function TripDetails(props) {
  const {
    trip,
    onClickingDelete,
    onClickingEdit,
    onMarkingTripAsPast,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    onOpeningDeleteModal,
    onClosingDeleteModal
  } = props;

  useEffect(() => {
    setIsDeleteModalOpen(false);
  }, [setIsDeleteModalOpen]);

  const [tripCostsToggled, setTripCostsToggled] = useState(false);
  const [gearRequirementsToggled, setGearRequirementsToggled] = useState(false);
  const [miscellaneousToggled, setMiscellaneousToggled] = useState(false);
  const [tripNotesToggled, setTripNotesToggled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const toggleTripCosts = () => {
    setTripCostsToggled(!tripCostsToggled);
  }

  const toggleGearRequirements = () => {
    setGearRequirementsToggled(!gearRequirementsToggled);
  }

  const toggleMiscellaneous = () => {
    setMiscellaneousToggled(!miscellaneousToggled);
  }

  const toggleTripNotes = () => {
    setTripNotesToggled(!tripNotesToggled);
  }

  const moveRight = () => {
    setCurrentImage(currentImage === trip.images.length - 1 ? 0 : currentImage + 1);
  }

  const moveLeft = () => {
    setCurrentImage(currentImage === 0 ? trip.images.length - 1 : currentImage - 1);
  }

  return (
    <div className="trip-details">
      {isDeleteModalOpen && (
        <DeletionModal
          onClickingDelete={onClickingDelete}
          open={onOpeningDeleteModal}
          closed={onClosingDeleteModal}
          trip={trip}
        />
      )}
      <div className="images-and-details-wrapper">
        <div className="images-carousel">
          <ImageSlider
            trip={trip}
            onMovingLeft={moveLeft}
            onMovingRight={moveRight}
            currentImage={currentImage}
          />
        </div>
        <div className="detail-categories">
          <DestinationInfo
            trip={trip}
          />
          {trip.tripType === "Future" && (
            <>
              <br/>
              <TripCosts
                trip={trip}
                onTogglingTripCosts={toggleTripCosts}
                tripCostsToggled={tripCostsToggled}
              />
              <br/>
              <GearRequirements
                trip={trip}
                onTogglingGearRequirements={toggleGearRequirements}
                gearRequirementsToggled={gearRequirementsToggled}
              />
            </>
          )}
          {trip.tripType === "Past" && (
            <>
              <br/>
              <TripNotes
                trip={trip}
                onTogglingTripNotes={toggleTripNotes}
                tripNotesToggled={tripNotesToggled}
              />
            </>
          )}
          <br/>
          <Miscellaneous
            trip={trip}
            onTogglingMiscellaneous={toggleMiscellaneous}
            miscellaneousToggled={miscellaneousToggled}
          />
        </div>
        <br/>
        <div className="trip-details-buttons">
          <button
            className="btn app-buttons"
            onClick={() => onClickingEdit(trip.id)}
          >
            <EditIcon/> Edit
          </button>
          {trip.tripType === "Future" && (
            <button
              className="btn app-buttons"
              onClick={() => onMarkingTripAsPast(trip.id)}
              id="mark-past-button"
            >
              <CheckCircleIcon/> Mark as Past
            </button>
          )}
          <button
            className="btn back-button"
            id="delete-button"
            onClick={onOpeningDeleteModal}
          >
            <DeleteIcon/> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;