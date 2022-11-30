import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { abs } from "mathjs";

const StyledGroupFeed = styled.div`
  display: flex;
  flex-direction: column;

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
        gap: 0.3em;

        .date {
          font-size: 14px;
          color: rgba(238, 238, 238, 0.5);
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.3em;

        .amount {
          color: rgba(238, 238, 238, 0.5);
        }

        .involvement {
          color: rgba(238, 238, 238, 0.5);
        }

        .involvement-status {
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

const parseParticipants = (participants) => {
  const n = 3;

  if (participants.length === 0) return ["participants"];
  const participantsNames = participants.map((participant) => {
    return participant.name;
  });

  const withoutYou = participantsNames.filter((name) => name !== "you");

  const first = withoutYou.slice(0, n);
  const rest = withoutYou.slice(n);

  const res = [];
  res.push(`You, ${first.join(", ")}`);
  if (rest.length > 0)
    res.push(`${rest.length > 0 ? `& ${rest.length} others` : ""}`);

  return res.join(", ");
};

const parseOwedOwe = (summary) => {
  let owed = 0;
  let owe = 0;
  for (let split of summary) {
    owed += split.owed;
    owe += split.owe;
  }

  return [owed, owe];
};

const Split = (split) => {
  const { _id, name, owe, owed } = split;
  const amount = owe - owed;
  return (
    <Link to={`/groups/${split.groupId}/summary/${_id}`}>
      <div className="split">
        <div className="left">
          <div className="title">{name}</div>
          <div className="date">November 30, 2022</div>
          {/* <div className="date">{created_on}</div> */}
        </div>
        <div className="right">
          <div className="amount">
            {amount === 0 && <></>}
            {amount > 0 && (
              <>
                <div className="involvement lent">{abs(amount)}</div>
              </>
            )}
            {amount < 0 && (
              <>
                <div className="involvement borrow">{abs(amount)}</div>
              </>
            )}
          </div>
          <div className="involvement-status">Not Involved</div>
        </div>
      </div>
    </Link>
  );
};

const GroupFeed = ({ id }) => {
  const groupId = id;
  const groups = useSelector((state) => state.groups);

  const group = groups.find((group) => group._id === groupId);

  const { name, participants, splits, summary } = group;
  const participantsString = parseParticipants(participants);

  const [owed, owe] = parseOwedOwe(summary);

  return (
    <StyledGroupFeed>
      <div className="header">
        <div className="title">{name}</div>
        {group._id !== "non-group" && (
          <div className="members">{participantsString}</div>
        )}
      </div>
      <div className="summary">
        <div className="item" id="owed">
          You are owed {owed}
        </div>
        <div className="item" id="owe">
          You owe {owe}
        </div>
      </div>
      <div className="entries">
        {splits.map((split) => (
          <Split {...split} key={split._id} />
        ))}
      </div>
    </StyledGroupFeed>
  );
};

export default GroupFeed;
