import React from "react";
import ModalOverlay from "./../ModalOverlay";
import ContactsSelector from "./../ContactsSelector";
import { useSelector, useDispatch } from "react-redux";
import { setSetProperty } from "./../../store/currentsplit/currentsplit.slice";

const PayerModal = ({ closeModal, color, index }) => {
  const value = useSelector(
    (state) => state.currentSplit.sets[index].participants
  );
  const dispatch = useDispatch();

  const handleClose = (value) => {
    dispatch(
      setSetProperty({
        index: index,
        key: "participants",
        value: value,
      })
    );
    closeModal();
  };

  return (
    <ModalOverlay>
      <ContactsSelector
        type="multi"
        initialValue={value}
        placeholder="Search Contacts"
        color={color}
        onClose={handleClose}
      />
    </ModalOverlay>
  );
};

export default PayerModal;
