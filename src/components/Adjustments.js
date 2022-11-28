import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAdjustment } from "../store/currentsplit/currentsplit.slice";

const StyledAdjustments = styled.div`
  width: 330px;
  background-color: #1d1d1d;
  border-radius: 8px;
  padding: 20px;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    .title {
      color: rgba(117, 117, 117, 1);
    }

    .done {
      cursor: pointer;
      margin-right: 8px;
    }
  }

  .people {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .details {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      margin: 8px 0;
    }

    .details:last-of-type {
      margin-bottom: 0;
    }

    .person {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;

      .total {
        font-family: "Fira Code", monospace;
        font-weight: 500;
        font-size: 14px;
        color: rgba(209, 194, 139, 1);
      }
    }

    .adjustment {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-family: "Fira Code", monospace;
      font-weight: 500;

      gap: 8px;

      .plus {
        color: rgba(255, 255, 255, 0.3);
      }

      .amount {
        input {
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 16px;
          font-family: "Fira Code", monospace;

          border-radius: 4px;
          text-align: center;

          color: rgba(139, 197, 209, 1);
          background-color: rgba(143, 212, 234, 0.13);
          height: 27px;
          width: 70px;

          cursor: text;

          border: none;
          outline: none;
        }
      }
    }
  }
  .message-board {
    text-align: center;
    padding: 2em 0;
    color: rgba(117, 117, 117, 1);
  }
`;

const Adjustments = ({ initialValue, onClose }) => {
  const adjustments = initialValue;
  const dispatch = useDispatch();

  const handleDone = () => {
    onClose();
  };

  const handleAdjustmentChange = (index, adjustment) => {
    adjustment = adjustment === "" ? 0 : parseInt(adjustment);
    dispatch(
      setAdjustment({
        index: index,
        key: "adjustment",
        value: adjustment,
      })
    );
  };

  return (
    <StyledAdjustments>
      <div className="header">
        <div className="title">Adjustments</div>
        <div className="done" onClick={handleDone}>
          Done
        </div>
      </div>
      <div className="body">
        {adjustments.length <= 0 ? (
          <div className="message-board">Add participants to get started</div>
        ) : (
          <div className="people">
            {adjustments.map((person, index) => (
              <div className="details" key={person._id}>
                <div className="person">
                  <div className="name">{person.name}</div>
                  {/* <div className="total">({person.amount})</div> */}
                </div>
                <div className="adjustment">
                  <div className="plus">+</div>
                  <div className="amount">
                    <input
                      type="text"
                      defaultValue={person.adjustment}
                      onKeyUp={(e) => {
                        handleAdjustmentChange(index, e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </StyledAdjustments>
  );
};

export default Adjustments;
