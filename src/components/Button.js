import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  max-width: max-content;

  padding: 4px 15px 5px;
  border-radius: 30px;

  cursor: pointer;

  color: var(--color);
  background-color: var(--background-color);
`;

const Button = ({ text, color }) => {
  return (
    <StyledButton
      style={{
        "--color": `var(--${color}-color)`,
        "--background-color": `var(--${color}-background-color)`,
      }}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
