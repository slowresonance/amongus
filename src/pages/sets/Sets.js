import React from "react";
import styled from "styled-components";
import ModalConnector from "../../components/ModalConnector";
import { useSelector, useDispatch } from "react-redux";
import {
  addSet,
  deleteSet,
} from "./../../store/currentsplit/currentsplit.slice";

const StyledSets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledSet = styled.div`
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    letter-spacing: 0.3px;

    .title {
      font-weight: 500;
      color: #ffffff;
      text-transform: uppercase;
    }
    .delete-set {
      font-weight: 400;
      color: var(--red-color);
      background-color: var(--red-background-color);
      padding: 4px 15px 5px;
      border-radius: 20px;
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
`;

const Set = ({ index, expression, participants }) => {
  const dispatch = useDispatch();

  const handleDeleteSet = () => {
    dispatch(
      deleteSet({
        index: index,
      })
    );
  };

  return (
    <StyledSet>
      <div className="header">
        <div className="title">Set {index + 1}</div>
        <div className="delete-set" onClick={handleDeleteSet}>
          Delete Set
        </div>
      </div>
      <div className="details">
        <ModalConnector
          label="Amount"
          color="green"
          index={index}
          value={expression}
          property="set_expression"
          rounded={false}
        />
        <ModalConnector
          label="to be split among"
          color="yellow"
          index={index}
          value={participants}
          property="set_participants"
          rounded={false}
        />
      </div>
    </StyledSet>
  );
};

const Sets = () => {
  const sets = useSelector((state) => state.currentSplit.sets);
  const dispatch = useDispatch();

  const handleNewSet = () => {
    dispatch(
      addSet({
        id: "ffiwrgir",
      })
    );
  };

  return (
    <StyledSets>
      {sets.length <= 0 ? (
        <>Start by adding a set</>
      ) : (
        sets.map((set, index) => (
          <Set
            index={index}
            expression={set.expression}
            participants={set.participants}
            key={set._id}
          />
        ))
      )}
      <div
        className="menu"
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <div
          className="add-set item"
          style={{
            cursor: "pointer",
          }}
          onClick={handleNewSet}
        >
          + New Set
        </div>
        <div
          className="item"
          style={{
            cursor: "pointer",
          }}
        >
          Done
        </div>
      </div>
    </StyledSets>
  );
};

export default Sets;
