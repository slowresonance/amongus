import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { abs } from "mathjs";

const StyledSplitSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;

  .header {
    .title {
      font-size: 20px;
      margin-bottom: 8px;
    }
    .date {
      font-size: 14px;
      color: rgba(238, 238, 238, 0.5);
    }
  }
  .summary {
    .title {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.3px;
      color: rgba(238, 238, 238, 0.5);
      text-transform: uppercase;
      margin-bottom: 1em;
    }

    .paid-by {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5em;
    }
  }

  .balances {
    display: flex;
    flex-direction: column;
    gap: 6px;

    .balance {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }

    .involvement {
      font-weight: 400;
      color: rgba(238, 238, 238, 0.5);
    }

    .lent {
      color: var(--green-color);
    }

    .borrow {
      color: var(--red-color);
    }
  }
`;

const GroupBalance = (person) => {
  const { _id, name, owed, owe } = person;
  const amount = owed - owe;

  if (amount === 0) {
    return;
  }

  return (
    <div className="balance">
      {amount === 0 && <></>}
      {amount > 0 && (
        <>
          {name} owes you
          <div className="involvement lent">{abs(amount)}</div>
        </>
      )}
      {amount < 0 && (
        <>
          You owe {name}
          <div className="involvement borrow">{abs(amount)}</div>
        </>
      )}
    </div>
  );
};

const SplitSummary = () => {
  const [groupId, splitId] = ["iubf39294uf", "wefef2342fef32"];
  const groups = useSelector((state) => state.groups);

  const group = groups.find((group) => group._id === groupId);
  const split = group.splits.find((split) => split._id === splitId);

  console.log(split);

  return (
    <StyledSplitSummary>
      <div className="header">
        <div className="title">Breakfast</div>
        <div className="date">November 13, 2022</div>
      </div>
      <div className="summary">
        <div className="title">Summary</div>
        <div className="paid-by">
          {`${split.payer.name} paid`}
          <div className="amount">{split.amount}</div>
        </div>
      </div>
      <div className="balances">
        {split.statements.map((statement) => (
          <GroupBalance key={statement._id} {...statement} />
        ))}
      </div>
    </StyledSplitSummary>
  );
};

export default SplitSummary;
