import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TotalModal from "./modals/TotalModal";
import PayerModal from "./modals/PayerModal";
import ParticipantsModal from "./modals/ParticipantsModal";
import AdjustmentsModal from "./modals/AdjustmentsModal";
import SetExpressionModal from "./modals/SetExpressionModal";
import SetParticipantsModal from "./modals/SetParticipantsModal";
import { useSelector } from "react-redux";

const StyledModalConnector = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px 10px;

  .text {
    display: inline-block;
    color: rgba(209, 194, 139, 1);
    background-color: rgba(234, 214, 143, 0.13);

    color: var(--color);
    background-color: var(--background-color);

    padding: 4px 15px 5px;
    border-radius: 4px;

    cursor: pointer;
    border-radius: ${({ rounded }) => (rounded ? "30px" : "4px")};

    font-weight: 400;
  }
`;

const parsePayer = (payer) => {
  if (payer.length === 0) return ["payer"];
  if (payer[0]._id === "iubf39294uf") return ["You"];
  return [payer[0].name];
};

const parseParticipants = (participants) => {
  const n = 3;
  const o = 2;

  if (participants.length === 0) return ["participants"];
  let selfIncluded = false;
  const participantsNames = participants.map((participant) => {
    if (participant._id === "iubf39294uf") {
      selfIncluded = true;
      return "you";
    }
    return participant.name;
  });

  const withoutYou = participantsNames.filter((name) => name !== "you");

  const first = withoutYou.slice(0, n);
  const last = withoutYou.slice(n, n + o);
  const rest = withoutYou.slice(n + o);

  const res = [];
  res.push(`${selfIncluded ? "You, " : ""}${first.join(", ")}`);
  if (last.length > 0)
    res.push(
      `${last.join(", ")} ${rest.length > 0 ? `and ${rest.length} others` : ""}`
    );

  return res;
};

const parseValue = (value, property, user) => {
  switch (property) {
    case "total_amount":
      return value === 0 ? ["total"] : [value];
    case "payer":
      return parsePayer(value, user);
    case "participants":
      return parseParticipants(value, user);
    case "adjustments":
      return ["edit adjustments"];
    case "set_expression":
      return value === "" ? ["expression"] : [value];
    case "set_participants":
      return parseParticipants(value);
    default:
      return value;
  }
};

const ModalConnector = ({ value, label, property, color, rounded, index }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [textArray, setTextArray] = useState(parseValue(value, property));

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setTextArray(parseValue(value, property));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const modalSwitch = () => {
    switch (property) {
      case "total_amount":
        return <TotalModal closeModal={closeModal} color={color} />;
      case "payer":
        return <PayerModal closeModal={closeModal} color={color} />;
      case "participants":
        return <ParticipantsModal closeModal={closeModal} color={color} />;
      case "adjustments":
        return <AdjustmentsModal closeModal={closeModal} color={color} />;
      case "set_expression":
        return (
          <SetExpressionModal
            closeModal={closeModal}
            color={color}
            index={index}
          />
        );
      case "set_participants":
        return (
          <SetParticipantsModal
            closeModal={closeModal}
            color={color}
            index={index}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <StyledModalConnector
        rounded={rounded}
        style={{
          "--color": `var(--${color}-color)`,
          "--background-color": `var(--${color}-background-color)`,
        }}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {label !== "" && <div className="label">{label}</div>}
        {textArray.map((text) => (
          <div className="text" key={text}>
            {text}
          </div>
        ))}
      </StyledModalConnector>
      {modalOpen && modalSwitch()}
    </>
  );
};

export default ModalConnector;
