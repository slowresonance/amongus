import React from "react";
import styled from "styled-components";

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3em;

    .title {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 0.5em;
    }

    .members {
      font-size: 14px;
      color: #999;
    }
  }

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4em;
    gap: 10px;

    .item {
      padding: 4px 19px 5px;
      border-radius: 30px;
    }

    #owed {
      color: var(--green-color);
      background-color: var(--green-background-color);
    }

    #owe {
      color: var(--red-color);
      background-color: var(--red-background-color);
    }
  }

  .entries {
    display: flex;
    flex-direction: column;
    gap: 32px;

    font-size: 18px;

    .split {
      display: flex;
      justify-content: space-between;

      .left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .date {
          font-size: 14px;
          color: rgba(238, 238, 238, 0.5);
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .amount {
          color: rgba(238, 238, 238, 0.5);
        }

        .involvement {
          font-size: 14px;
          color: rgba(238, 238, 238, 0.5);
        }

        .lent {
          color: var(--green-color);
        }

        .borrow {
          color: var(--red-color);
        }
      }
    }
  }
`;

const group = () => {
  return (
    <StyledGroup>
      <div className="header">
        <div className="title">A Short Kerala Trip</div>
        <div className="members">You, Rachana, Kavya & Joshua</div>
      </div>
      <div className="summary">
        <div className="item" id="owed">
          You are owed 1234
        </div>
        <div className="item" id="owe">
          You owe 1234
        </div>
      </div>
      <div className="entries">
        <div className="split">
          <div className="left">
            <div className="title">Breakfast</div>
            <div className="date">November 13, 2022</div>
          </div>
          <div className="right">
            <div className="amount">0</div>
            <div className="involvement">Not Involved</div>
          </div>
        </div>
        <div className="split">
          <div className="left">
            <div className="title">Breakfast</div>
            <div className="date">November 13, 2022</div>
          </div>
          <div className="right">
            <div className="amount borrow">250</div>
            <div className="involvement">Borrowed</div>
          </div>
        </div>
        <div className="split">
          <div className="left">
            <div className="title">Breakfast</div>
            <div className="date">November 13, 2022</div>
          </div>
          <div className="right">
            <div className="amount lent">250</div>
            <div className="involvement ">Lent</div>
          </div>
        </div>
        <div className="split">
          <div className="left">
            <div className="title">Breakfast</div>
            <div className="date">November 13, 2022</div>
          </div>
          <div className="right">
            <div className="amount lent">2500</div>
            <div className="involvement ">Lent</div>
          </div>
        </div>
      </div>
    </StyledGroup>
  );
};

export default group;
