import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { abs } from "mathjs";

import { Link } from "react-router-dom";

import Button from "../../components/Button";

const StyledGroupsSummary = styled.div`
  display: flex;
  flex-direction: column;

  .button-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
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

  .summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;

    .title {
      display: flex;
      gap: 6px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .title {
      font-size: 14px;
      font-weight: 500;
      color: rgba(238, 238, 238, 0.5);
      letter-spacing: 0.3px;
      text-transform: uppercase;
      text-align: center;
    }

    .groups {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .group {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .bottom {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: rgba(238, 238, 238, 0.5);

          .balances {
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 6px;

            .balance {
              display: flex;
              flex-direction: row;
              gap: 8px;
              font-size: 14px;
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
        }
      }
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

const GroupShortSummary = (group) => {
  const { _id, name, owed, owe, summary } = group;
  const amount = owed - owe;

  return (
    <Link to={`/groups/${_id}`}>
      <div className="group">
        <div className="top">
          <div className="name">{name}</div>
          <div
            className={`involvement ${
              amount !== 0 && amount > 0 ? "lent" : "borrow"
            }`}
          >
            {abs(amount)}
          </div>
        </div>
        <div className="bottom">
          <div className="balances">
            {summary.map((person) => (
              <GroupBalance key={person._id} {...person} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const GroupsSummary = () => {
  const groups = useSelector((state) => state.groups);

  let amount = 0;

  for (let group of groups) {
    amount += group.owed - group.owe;
  }

  return (
    <StyledGroupsSummary>
      <div className="summary">
        {amount === 0 && <div className="title">You are all settled up!</div>}
        {amount > 0 && (
          <div className="title">
            Overall you are owed
            <span className="involvement lent">{abs(amount)}</span>
          </div>
        )}
        {amount < 0 && (
          <div className="title">
            Overall you owe
            <span className="involvement borrow">{abs(amount)}</span>
          </div>
        )}
      </div>
      <div className="details">
        <div className="title">Outstanding Balances</div>
        <div className="groups">
          {groups.map((group) => (
            <GroupShortSummary key={group._id} {...group} />
          ))}
        </div>
      </div>
      <div className="button-wrapper">
        <Button text="Add Group" color="white"></Button>
      </div>
    </StyledGroupsSummary>
  );
};

export default GroupsSummary;
