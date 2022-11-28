import React from "react";
import ModalOverlay from "../ModalOverlay";
import Input from "../Input";
import { useSelector, useDispatch } from "react-redux";
import { setSetProperty } from "../../store/currentsplit/currentsplit.slice";
import { evaluate } from "mathjs";

const SetExpressionModal = ({ closeModal, color, index }) => {
  const value = useSelector(
    (state) => state.currentSplit.sets[index].expression
  );
  const dispatch = useDispatch();

  const handleClose = (value) => {
    dispatch(
      setSetProperty({
        index: index,
        key: "expression",
        value: value,
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

export default SetExpressionModal;
