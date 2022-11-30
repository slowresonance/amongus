import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import ModalConnector from "../../components/ModalConnector";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addSplit } from "./../../store/groups/groups.slice";

const StyledNewSplit = styled.div`
  .button-wrapper {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }

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

// FUNCTIONS START HERE!-----------------------------------------------------

// MAIN FUNCTION AT LINE 426

// Initialises split summary object with all needed info, but empty array of statements
// Returns new split summary
// Used in getSplitSummaryInfo() function directly
function getNewSplitSummary(expense, group, user) {
  let summary = {
    _id: expense._id,
    name: expense.name,
    is_group: expense.is_group,
    created_on: expense.created_on,
    group: {
      _id: group._id,
      name: group.name,
    },
    owed: 0,
    owe: 0,
    statements: [],
  };

  for (let participant of group.participants) {
    if (participant.name === user.name) {
      continue;
    }
    summary.statements.push({
      _id: participant._id,
      name: participant.name,
      owed: 0,
      owe: 0,
    });
  }

  return summary;
}

// Balances owe vs owed for each X owes Y
function balanceSummary(summary) {
  for (let state of summary) {
    if (state.owe > state.owed) {
      state.owe -= state.owed;
      state.owed = 0;
    } else {
      state.owed -= state.owe;
      state.owe = 0;
    }
  }
}

// Adds split summary amounts to group summary
// Modiifes original group object, does not return anything
function addToGroupSummary(split_sum, group) {
  for (let gsum of group.summary) {
    for (let ssum of split_sum.statements) {
      if (gsum.name === ssum.name) {
        gsum.owe += ssum.owe;
        gsum.owed += ssum.owed;
      }
    }
  }
  // console.log(group.summary);
  balanceSummary(group.summary);
  // console.log(group.summary);
}

// Checks if certain user is paying for an expense
function isPayer(name, expense) {
  console.log("PAY", expense.payer[0].name, name);
  return expense.payer[0].name === name;
}

// Checks if certain user is participating in a particular set of an expense
function isSpliterinSet(name, set) {
  for (let user of set.participants) {
    if (user.name === name) {
      return true;
    }
  }

  return false;
}

// Gets adjustment value of a user for an expense
function getAdjustment(name, expense) {
  for (let user of expense.participants) {
    if (user.name === name) {
      return user.adjustment;
    }
  }
}

// Creates new summary, gets split summary info, adds to empty settlement array, and balances owe/owed
// Returns split summary with complete information
function getSplitSummaryInfo(expense, group, user) {
  let split_summary = getNewSplitSummary(expense, group, user);
  let sets = expense.sets;
  let total_amt = expense.total_amount;
  let participants = expense.participants;

  console.log("💀", expense);

  let statement = split_summary.statements;

  for (let participant of participants) {
    total_amt -= participant.adjustment;
  }

  for (let set of sets) {
    let set_amt = set.amount;
    let set_split = set_amt / set.participants.length;

    for (let state of statement) {
      console.log("CHECK", expense);
      console.log("CCCCHECK", isPayer(user.name, expense));
      if (isPayer(user.name, expense) && isSpliterinSet(state.name, set)) {
        state.owed += set_split;
        // console.log("CHECK" + state.owed, set_split, user.name, state.name);
      } else if (
        isPayer(state.name, expense) &&
        isSpliterinSet(user.name, set)
      ) {
        // console.log("CHECK" + state.owed, set_split, user.name, state.name);

        state.owe += set_split;
      }
    }

    total_amt -= set_amt;
  }

  let remain_split = total_amt / participants.length;

  for (let state of statement) {
    if (isPayer(user.name, expense) && isSpliterinSet(state.name, expense)) {
      state.owed = Math.ceil(
        state.owed + remain_split + getAdjustment(state.name, expense)
      );
    } else if (
      isPayer(state.name, expense) &&
      isSpliterinSet(user.name, expense)
    ) {
      state.owe = Math.ceil(
        state.owe + remain_split + getAdjustment(user.name, expense)
      );
    }
  }

  balanceSummary(split_summary.statements);

  return split_summary;
}

const handleDone = (split, group, user) => {
  // Objects needed!
  // 1. Expense Object ( in place of "r" )
  // 2. Group Object ( in place of "dfwe" )
  // 3. User Object ( in place of "us ")

  // Get New Split Summary Object
  let summary = getSplitSummaryInfo(split, group, user);
  // Add Split Summary info to Group Summary
  addToGroupSummary(summary, group);

  return summary;
};

const Menu = () => {
  return <div className="menu">by sets</div>;
};

const NewSplit = () => {
  const group = useSelector((state) => state.groups)[1];
  const split = useSelector((state) => state.currentSplit);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  let group_dup = JSON.parse(JSON.stringify(group));
  let split_dup = JSON.parse(JSON.stringify(split));
  let user_dup = JSON.parse(JSON.stringify(user));

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

      <div
        className="button-wrapper"
        onClick={() => {
          dispatch(addSplit(handleDone(split_dup, group_dup, user_dup)));
        }}
      >
        <Button text="Done" color="white"></Button>
        <Link to="/groups/iubf39294uf/summary/thisone">View Summary</Link>
      </div>
    </StyledNewSplit>
  );
};

export default NewSplit;
