import React from "react";
import ModalOverlay from "./../ModalOverlay";
import ContactsSelector from "./../ContactsSelector";
import { useSelector, useDispatch } from "react-redux";
import { setProperty } from "./../../store/currentsplit/currentsplit.slice";

const PayerModal = ({ closeModal, color }) => {
  const value = useSelector((state) => state.currentSplit.payer);
  const dispatch = useDispatch();

  const handleClose = (value) => {
    dispatch(
      setProperty({
        key: "payer",
        value: value,
      })
    );
    closeModal();
  };

  return (
    <ModalOverlay>
      <ContactsSelector
        type="single"
        initialValue={value}
        placeholder="Search Contacts"
        color={color}
        onClose={handleClose}
      />
    </ModalOverlay>
  );
};

export default PayerModal;
