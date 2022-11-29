import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { abs } from "mathjs";

const StyledFriendSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;

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

  .header {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 0.5em;
  }

  .statement {
    .title {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
  }

  .balances {
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    color: rgba(238, 238, 238, 0.5);

    .balance {
      display: flex;
      flex-direction: row;
      gap: 8px;
      flex-wrap: wrap;

      .source {
        color: #eeeeee;
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

const FriendSummary = () => {
  const contacts = useSelector((state) => state.user.contacts);
  const groups = useSelector((state) => state.groups);

  const friendId = "2973yss922f2dsy";

  const spec = {};

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
    }
  }

  const contact = spec[friendId];

  const { name } = contact[0];

  let amount = 0;

  for (let item of contact) {
    amount += item.owed - item.owe;
  }

  return (
    <StyledFriendSummary>
      <div className="header">{name}</div>
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
      <div className="balances">
        {contact.map((item) => (
          <ContactBalance {...item} key={item.group_name} />
        ))}
      </div>
    </StyledFriendSummary>
  );
};

export default FriendSummary;
