import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  width: 380px;
  background-color: var(--background-color);

  border-radius: 6px;

  input {
    color: var(--color);
    background-color: transparent;

    font-size: 16px;
    font-family: "Fira Code", monospace;
    font-weight: 400;
    padding: 16px 20px;

    border: none;
    outline: none;

    width: 100%;

    ::placeholder {
      font-size: 16px;
      font-family: "Fira Code", monospace;
      font-weight: 400;
      color: var(--color);
      opacity: 60%;
    }
  }

  .submit {
    color: #ffffff;
    padding: 16px 20px;

    cursor: pointer;
  }
`;

const Input = ({ type, initialValue, placeholder, color, onClose }) => {
  const [value, setValue] = useState(initialValue || "");

  const handleClose = () => {
    onClose(String(value));
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      handleClose();
    }
    if (e.key === "Escape") {
      console.log("first");
      onClose(String(initialValue));
    }
  };

  return (
    <StyledInput
      style={{
        "--color": `var(--${color}-color)`,
        "--background-color": `var(--${color}-background-color)`,
      }}
    >
      <input
        autoFocus
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={handleKeydown}
      />
      <div className="submit" onClick={handleClose}>
        Done
      </div>
    </StyledInput>
  );
};

export default Input;
