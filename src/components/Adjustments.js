import React from "react";
import styled from "styled-components";

const people = [
  {
    name: "Mohan",
    amount: 100,
    adjustment: 0,
  },
  {
    name: "Rachana",
    amount: 100,
    adjustment: 20,
  },
  {
    name: "Manisha",
    amount: 100,
    adjustment: 150,
  },
  {
    name: "Sonika",
    amount: 100,
    adjustment: 0,
  },
  {
    name: "Bhargav",
    amount: 100,
    adjustment: 0,
  },
  {
    name: "Lakshit",
    amount: 100,
    adjustment: 0,
  },
  {
    name: "Satya",
    amount: 100,
    adjustment: 0,
  },
  {
    name: "Suprith",
    amount: 100,
    adjustment: 0,
  },
];

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
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 4px;

        color: rgba(139, 197, 209, 1);
        background-color: rgba(143, 212, 234, 0.13);
        height: 27px;
        width: 70px;

        cursor: text;
      }
    }
  }
`;

const Adjustments = () => {
  return (
    <StyledAdjustments>
      <div className="header">
        <div className="title">Adjustments</div>
        <div className="done">Done</div>
      </div>
      <div className="body">
        <div className="people">
          {people.map((person) => (
            <div className="details" key={person.name}>
              <div className="person">
                <div className="name">{person.name}</div>
                <div className="total">({person.amount})</div>
              </div>
              <div className="adjustment">
                <div className="plus">+</div>
                <div className="amount">{person.adjustment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledAdjustments>
  );
};

export default Adjustments;
