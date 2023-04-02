import React, { useState, useRef } from "react";
import styled from "styled-components";

import { sidebarMenu } from "@data/sidebar/sidebarData";
import { Link } from "react-router-dom";

interface SidebarProps {
  xPosition: number;
}

const Flexbox = styled.div`
  transition: 0.19s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #304ffd;

  position: fixed;
`;

const Title = styled.div`
  font-size: 24px;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Menu = styled.div`
  width: 100%;
  height: 56px;

  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #4f69fd;
  }
`;
const Box = styled.div`
  margin-bottom: 10px;
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Font = styled.p`
  margin-left: 10px;
  color: #fff;
  font-family: "pretendardL";
  font-weight: 500;
`;

function Sidebar({ xPosition }: SidebarProps) {
  const side = useRef<HTMLDivElement>(null);

  return (
    <Flexbox
      ref={side}
      style={{
        width: "300px",
        height: "100vh",
        transform: `translatex(${-xPosition}px)`,
      }}
    >
      <Title>원데이배달플랫폼</Title>

      {sidebarMenu.map((menu, index) => (
        <Link to={menu.path} key={index}>
          <Menu>
            <Box>
              {menu.logo}
              <Font>{menu.name}</Font>
            </Box>
          </Menu>
        </Link>
      ))}
    </Flexbox>
  );
}

export default Sidebar;
