import React from "react";
import styled from "styled-components";

const StyledSummary = styled.div`
  .header {
    margin: 7em 0 3em;
    .title {
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .date {
      font-size: 14px;
      font-weight: 400;
      color: rgba(117, 117, 117, 1);
    }
  }
  .body {
    .title {
      font-size: 12px;
      font-weight: 500;
      color: rgba(117, 117, 117, 1);
      text-transform: uppercase;

      margin-bottom: 1em;
    }

    .paid {
      display: flex;
      flex-direction: row;
      gap: 8px;

      .amount {
        font-weight: 400;
        color: var(--cyan-color);
      }
      margin-bottom: 2em;
    }

    .owes {
      display: flex;
      flex-direction: column;
      gap: 12px;
      .item {
        display: flex;
        flex-direction: row;
        gap: 8px;

        .involvement {
          font-weight: 400;
          color: var(--green-color);
        }
      }
    }
  }
`;

const Summary = () => {
  return (
    <StyledSummary>
      <div className="header">
        <div className="title">Breakfast</div>
        <div className="date">November 13, 2022</div>
      </div>
      <div className="body">
        <div className="title">Summary</div>
        <div className="paid">
          You paid <div className="amount">1232</div>
        </div>
        <div className="owes">
          <div className="item">
            Rachana owes you <div className="involvement">280</div>
          </div>
          <div className="item">
            Kavya owes you <div className="involvement">231</div>
          </div>
          <div className="item">
            Joshua owes you <div className="involvement">231</div>
          </div>
        </div>
      </div>
    </StyledSummary>
  );
};

export default Summary;
