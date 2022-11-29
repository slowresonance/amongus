import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { abs } from "mathjs";
import Button from "../../components/Button";

const StyledFriendsSummary = styled.div`
  display: flex;
  flex-direction: column;

  .button-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
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

  .balance {
    flex-wrap: wrap;
    font-size: 14px;
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

    .contacts {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .contact {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .top {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

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

        .bottom {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: rgba(238, 238, 238, 0.5);

          .balances {
            margin-left: 14px;
            display: flex;
            flex-direction: column;
            gap: 6px;

            .balance {
              display: flex;
              flex-direction: row;
              gap: 8px;

              .source {
                color: #eeeeee;
              }
            }
          }
        }
      }
    }
  }
`;

const ContactBalance = ({ group_name, name, owe, owed }) => {
  const amount = owed - owe;

  if (amount === 0) {
    return;
  }

  return (
    <div className="balance">
      {amount === 0 && <></>}
      {amount > 0 && (
        <>
          <span>{name} owes you</span>
          <span className="involvement lent">{abs(amount)}</span>
          <span>from</span> <span className="source">{group_name} </span>
        </>
      )}
      {amount < 0 && (
        <>
          <span>You owe {name}</span>
          <div className="involvement borrow">{abs(amount)}</div>
          <span>from</span> <span className="source">{group_name} </span>
        </>
      )}
    </div>
  );
};

const ContactsSummary = (contact) => {
  contact = contact.contact;
  if (contact.length === 0) return;

  const { name } = contact[0];

  let amount = 0;

  for (let item of contact) {
    amount += item.owed - item.owe;
  }

  return (
    <div className="contact">
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
          {contact.map((item) => (
            <ContactBalance {...item} key={item.group_name} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FriendsSummary = () => {
  const contacts = useSelector((state) => state.user.contacts);
  const groups = useSelector((state) => state.groups);

  const spec = {};
  let amount = 0;

  for (let contact of contacts) {
    spec[contact._id] = [];
  }

  for (let group of groups) {
    for (let person of group.summary) {
      spec[person._id].push({
        group_name: group.name,
        _id: person._id,
        name: person.name,
        owe: person.owe,
        owed: person.owed,
      });
      amount += person.owed - person.owe;
    }
  }

  return (
    <StyledFriendsSummary>
      <div className="summary">
        <div className="statement">
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
      </div>
      <div className="details">
        <div className="title">Outstanding Balances</div>
        <div className="contacts">
          {Object.keys(spec).map((key) => (
            <ContactsSummary contact={spec[key]} key={key} />
          ))}
        </div>
      </div>
      <div className="button-wrapper">
        <Button text="Add Friend" color="white"></Button>
      </div>
    </StyledFriendsSummary>
  );
};

export default FriendsSummary;
