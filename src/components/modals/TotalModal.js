import React, { useState } from "react";
import ModalOverlay from "./../ModalOverlay";
import Input from "./../Input";
import { useSelector, useDispatch } from "react-redux";
import { setProperty } from "./../../store/currentsplit/currentsplit.slice";
import { evaluate } from "mathjs";

const TotalModal = ({ closeModal, color }) => {
  const value = useSelector((state) => state.currentSplit.total_amount);
  const dispatch = useDispatch();

  const handleClose = (value) => {
    dispatch(
      setProperty({
        key: "total_amount",
        value: value === "" ? 0 : evaluate(value),
      })
    );
    closeModal();
  };

  return (
    <ModalOverlay>
      <Input
        initialValue={value}
        placeholder="total"
        color={color}
        onClose={handleClose}
      />
    </ModalOverlay>
  );
};

export default TotalModal;
