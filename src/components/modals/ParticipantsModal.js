import React from "react";
import ModalOverlay from "./../ModalOverlay";
import ContactsSelector from "./../ContactsSelector";
import { useSelector, useDispatch } from "react-redux";
import { setProperty } from "./../../store/currentsplit/currentsplit.slice";

const PayerModal = ({ closeModal, color }) => {
  const value = useSelector((state) => state.currentSplit.participants);
  const dispatch = useDispatch();

  const handleClose = (value) => {
    dispatch(
      setProperty({
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
