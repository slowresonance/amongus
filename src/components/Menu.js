import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  position: absolute;
  bottom: 30px;

  left: 50%;
  transform: translate(-50%, 0);

  .item {
    padding: 8px 20px;
    border-radius: 30px;
    background-color: #282828;

    white-space: nowrap;
  }

  .new-split {
    color: #151515;
    background-color: #ffffff;
    font-weight: 400;
  }
`;

const Menu = () => {
  const { menu } = useSelector((state) => state.ui);
  return (
    <StyledMenu>
      {menu.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            <div
              className={`item  ${item.path === "/new-split" && "new-split"}`}
              key={index}
            >
              {item.name}
            </div>
          </Link>
        );
      })}
    </StyledMenu>
  );
};

export default Menu;
