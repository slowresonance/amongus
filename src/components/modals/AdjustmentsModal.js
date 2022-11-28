import React from "react";
import ModalOverlay from "../ModalOverlay";
import Adjustments from "./../Adjustments";
import { useSelector } from "react-redux";

const AdjustmentsModal = ({ closeModal, color }) => {
  const value = useSelector((state) => state.currentSplit.participants);

  const handleClose = () => {
    closeModal();
  };

  return (
    <ModalOverlay closeModal={closeModal}>
      <Adjustments initialValue={value} color={color} onClose={handleClose} />
    </ModalOverlay>
  );
};

export default AdjustmentsModal;
