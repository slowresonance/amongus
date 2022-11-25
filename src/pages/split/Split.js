import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import ModalConnector from "../../components/ModalConnector";
import { useSelector } from "react-redux";
import ModalOverlay from "../../components/ModalOverlay";

const StyledSplit = styled.div`
  .header {
    display: flex;
    gap: 10px;

    margin: 80px 0;

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
    gap: 15px 10px;
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
  return <div className="menu">by groups</div>;
};

const Split = () => {
  return (
    <StyledSplit>
      <div className="header">
        <div className="title item">Lunch</div>
        <div className="item">+ images</div>
        <div className="item">+ notes</div>
      </div>

      <div className="details">
        <div className="group">
          <div className="label">Amount</div>
          <ModalConnector
            placeholder="total"
            color="yellow"
            modalType="number"
            property="amount"
            rounded={false}
          />
        </div>
        <div className="group">
          <div className="label">paid by</div>
          <ModalConnector
            type="single"
            placeholder="payer"
            color="yellow"
            modalType="contacts"
            property="payer"
            rounded={false}
          />
        </div>
        and
        <div className="group">
          <div className="label">split among</div>
          <ModalConnector
            type="multi"
            placeholder="add participants"
            color="yellow"
            modalType="contacts"
            property="participants"
            rounded={false}
          />
        </div>
      </div>

      <div className="options">
        <div className="group">
          <Menu />
          <Button text="edit groups" color="green" />
        </div>
        <div className="group">
          <div className="toggle">adjustments</div>
          <ModalConnector
            placeholder="edit adjustments"
            color="cyan"
            modalType="adjustments"
            property="adjustments"
            rounded={true}
          />
        </div>
      </div>
    </StyledSplit>
  );
};

export default Split;
