import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../assets/icons/SearchIcon";
import CloseIcon from "../assets/icons/CloseIcon";

const StyledContactsSelector = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1d1d1d;

  width: 380px;
  border-radius: 8px;

  .search {
    display: flex;
    align-items: center;
    padding: 10px 24px;
    gap: 12px;

    .search-icon {
      width: 16px;
      height: 16px;
    }

    input {
      color: #ffffff;
      background-color: transparent;

      font-size: 16px;
      font-family: "lars", sans-serif;
      font-weight: 300;
      padding: 10px 0;

      border: none;
      outline: none;

      width: 100%;

      ::placeholder {
        font-size: 16px;
        font-family: "lars", sans-serif;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.3);
      }
    }

    .done {
      color: #ffffff;
      padding: 10px;

      cursor: pointer;
    }
  }

  .selected {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding: 0 14px;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;

      padding: 8px 16px;
      border-radius: 30px;

      color: rgba(255, 255, 255, 0.6);
      background-color: rgba(255, 255, 255, 0.1);

      cursor: pointer;
    }

    path {
      stroke: var(--color);
    }

    .contact {
      padding: 8px 12px 8px 16px;
      color: var(--color);
      background-color: var(--background-color);
    }
  }

  .results {
    display: flex;
    flex-direction: column;

    .title {
      color: rgba(255, 255, 255, 0.3);
      margin: 20px 24px 12px 24px;
    }

    .result {
      padding: 8px 40px;
      cursor: pointer;
    }

    .result:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .results-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 14px;
    }
  }
`;

const ContactsSelector = ({ type, initialValue, color, onClose }) => {
  const [value, setValue] = useState(initialValue || []);

  const contacts = [
    "Mohan",
    "Rachana",
    "Manisha",
    "Lakshit",
    "Sonika",
    "Satya",
    "Bhargav",
    "Suprith",
  ];

  const results = [
    "Joshua Kingston",
    "Kavya Muktha",
    "Dominos: Rachana, Lakshit & 3 others",
  ];

  console.log(type);

  const handleClose = () => {
    onClose(value);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleClose();
    }
    if (e.key === "Escape") {
      onClose(initialValue);
    }
  };

  return (
    <StyledContactsSelector
      style={{
        "--color": `var(--${color}-color)`,
        "--background-color": `var(--${color}-background-color)`,
      }}
    >
      <div className="search">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input
          autoFocus
          type="text"
          placeholder="Search contacts"
          onKeyDown={handleKeydown}
        />
        <div className="done">Done</div>
      </div>
      {type === "multi" && (
        <div className="selected">
          {contacts.map((contact) => (
            <div className="contact item" key={contact}>
              <div className="name">{contact}</div>
              <div className="close-icon">
                <CloseIcon />
              </div>
            </div>
          ))}
          <div className="item">Clear all</div>
        </div>
      )}

      <div className="results">
        {type === "multi" && <div className="title">Results:</div>}
        <div className="results-container">
          {results.map((result) => (
            <div className="result" key={result}>
              {result}
            </div>
          ))}
        </div>
      </div>
    </StyledContactsSelector>
  );
};

export default ContactsSelector;
