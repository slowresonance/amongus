import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import ModalOverlay from "./ModalOverlay";
import Input from "./Input";
import ContactsSelector from "./ContactsSelector";
import Adjustments from "./Adjustments";

import { setProperty } from "../store/currentsplit/currentsplit.slice";

const StyledModalConnector = styled.div`
  white-space: nowrap;
  padding: 4px 15px 5px;
  border-radius: 4px;

  color: rgba(209, 194, 139, 1);
  background-color: rgba(234, 214, 143, 0.13);

  color: var(--color);
  background-color: var(--background-color);

  cursor: pointer;
  border-radius: ${({ rounded }) => (rounded ? "30px" : "4px")};
`;

const parseProperty = (property, value, placeholder) => {
  switch (property) {
    case "amount":
      return value === 0 ? placeholder : value;
    case "payer":
      return value === "" ? placeholder : value;
    case "participants":
      return value.length === 0 ? placeholder : value;
    case "adjustments":
      return value.length === 0 ? placeholder : value;
    default:
      return value === "" ? placeholder : value;
  }
};

const ModalConnector = ({
  placeholder,
  color,
  modalType,
  property,
  type,
  rounded,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const value = useSelector((state) => state.currentSplit[property]);
  const [text, setText] = useState(parseProperty(property, value, placeholder));

  const handleClose = (value) => {
    setModalOpen(false);
    dispatch(
      setProperty({
        key: property,
        value: value,
      })
    );
  };

  useEffect(() => {
    setText(parseProperty(property, value, placeholder));
  }, [value]);

  const modalSwitch = () => {
    switch (modalType) {
      case "number":
        return (
          <ModalOverlay onClose={() => setModalOpen(false)}>
            <Input
              initialValue={value}
              placeholder={placeholder}
              color={color}
              onClose={handleClose}
            />
          </ModalOverlay>
        );
      case "contacts":
        return (
          <ModalOverlay onClose={() => setModalOpen(false)}>
            <ContactsSelector
              initialValue={value}
              color={color}
              onClose={handleClose}
              type={type}
            />
          </ModalOverlay>
        );
      case "adjustments":
        return (
          <ModalOverlay onClose={() => setModalOpen(false)}>
            <Adjustments
              initialValue={value}
              color={color}
              onClose={handleClose}
            />
          </ModalOverlay>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <StyledModalConnector
        rounded={rounded}
        style={{
          "--color": `var(--${color}-color)`,
          "--background-color": `var(--${color}-background-color)`,
        }}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {text}
      </StyledModalConnector>
      {modalOpen && modalSwitch()}
    </>
  );
};

export default ModalConnector;
