import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const StyledBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  top: 40px;

  .back {
    display: flex;
    flex-direction: row;

    padding: 4px 10px 5px 10px;

    color: rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.06);

    cursor: pointer;
  }
`;

const handleClick = () => {
  window.history.back();
};

const Back = ({ path }) => {
  const location = useLocation();
  console.log(location);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [location]);

  return (
    show && (
      <StyledBack>
        <div className="back" onClick={handleClick}>
          <div className="arrow"></div>
          <div className="text">Go Back</div>
        </div>
      </StyledBack>
    )
  );
};

export default Back;
