import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import ModalConnector from "../../components/ModalConnector";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StyledNewSplit = styled.div`
  .header {
    display: flex;
    gap: 10px;

    margin-bottom: 80px;

    .title.item {
      color: rgba(255, 255, 255, 0.7);
    }

    .item {
      color: rgba(255, 255, 255, 0.34);
      background-color: rgba(255, 255, 255, 0.06);

      padding: 5px 10px;
      border-radius: 4px;

      cursor: pointer;
    }
  }

  .details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px 10px;
    margin: 40px 0;
  }

  .group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .label {
    white-space: nowrap;
  }

  .options {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px 10px;
  }
`;

const Menu = () => {
  return <div className="menu">by sets</div>;
};

const NewSplit = () => {
  return (
    <StyledNewSplit>
      <div className="header">
        <div className="title item">Lunch</div>
        <div className="item">+ images</div>
        <div className="item">+ notes</div>
      </div>

      <div className="details">
        <ModalConnector
          value={useSelector((state) => state.currentSplit.total_amount)}
          label="Amount"
          property="total_amount"
          rounded={false}
          color="yellow"
        />
        <ModalConnector
          value={useSelector((state) => state.currentSplit.payer)}
          label="paid by"
          color="yellow"
          property="payer"
          rounded={false}
        />
        and
        <ModalConnector
          value={useSelector((state) => state.currentSplit.participants)}
          label={"split among"}
          color="yellow"
          property="participants"
          rounded={false}
        />
      </div>

      <div className="options">
        <div className="group">
          <Menu />
          <Link to="/new-split/sets">
            <Button text="edit sets" color="green" />
          </Link>
        </div>
        <div className="group">
          <div className="toggle">adjustments</div>
          <ModalConnector
            label=""
            color="cyan"
            property="adjustments"
            rounded={true}
          />
        </div>
      </div>
    </StyledNewSplit>
  );
};

export default NewSplit;
