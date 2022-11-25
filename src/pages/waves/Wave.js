import React from "react";
import styled from "styled-components";
import Editable from "../../components/Editable";

const StyledWave = styled.div`
  margin-bottom: 40px;
  .group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    margin-bottom: 16px;
  }

  .label {
    white-space: nowrap;
  }

  .title {
    color: rgba(117, 117, 117, 1);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    text-align: center;

    margin-bottom: 32px;
  }
`;

const Wave = ({ wave, index }) => {
  return (
    <StyledWave>
      <div className="title">Group {index + 1}</div>
      <div className="body">
        <div className="group">
          <div className="label">Amount</div>
          <Editable text={wave.breakdown} color="green" />
        </div>
        <div className="group">
          <div className="label">to be split among</div>
          <Editable text={"Rachana, Mohan, Sonika"} color="yellow" />
        </div>
      </div>
    </StyledWave>
  );
};

export default Wave;
