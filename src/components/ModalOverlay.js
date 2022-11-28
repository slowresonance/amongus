import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const StyledModalOverlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(14px);

  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 10vh;
`;

const ModalOverlay = ({ children }) => {
  return ReactDom.createPortal(
    <StyledModalOverlay>{children}</StyledModalOverlay>,
    document.getElementById("overlay-portal")
  );
};

export default ModalOverlay;
