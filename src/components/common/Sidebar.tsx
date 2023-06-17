import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import { sidebarMenu } from "@/data/common";
import { Link, useNavigate, useLocation } from "react-router-dom";

import avatar1 from "@images/sidebar/avatar/avatar1.png";

export interface SidebarProps {
  xPosition: number;
}

function Sidebar({ xPosition }: SidebarProps) {
  const pathName = useLocation().pathname;

  const navigate = useNavigate();

  const side = useRef<HTMLDivElement>(null);

  const logOut = () => {
    navigate("/");
  };

  return (
    <Flexbox
      ref={side}
      style={{
        width: "298px",
        height: "100vh",
        transform: `translatex(${-xPosition}px)`,
      }}
    >
      <Profile>
        <Avatar src={avatar1}></Avatar>
        <Info>
          <p>admin-jth</p>
          <Logout onClick={() => logOut()}>로그아웃</Logout>
        </Info>
      </Profile>

      {sidebarMenu.map((item, index1) => (
        <Wrapper key={index1}>
          {item.map((menu, index2) => (
            <Link to={menu.path} key={index2}>
              <Menu>
                <Box clicked={menu.pathname === pathName}>
                  {menu.logo}
                  <Font>{menu.name}</Font>
                </Box>
              </Menu>
            </Link>
          ))}
        </Wrapper>
      ))}
    </Flexbox>
  );
}

export default Sidebar;

const Flexbox = styled.div`
  transition: 0.19s ease;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  position: fixed;
`;

const Profile = styled.div`
  height: 9rem;
  display: flex;
  align-items: center;
  padding: 2rem;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
const Info = styled.div`
  margin-left: 0.625rem;
  font-size: 1.0625rem;
  font-weight: 400;
`;

const Logout = styled.p`
  cursor: pointer;
  text-decoration: underline;

  color: #898ea2;
`;

const Wrapper = styled.div`
  border-top: 1.5px solid #e3e6f2;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  box-sizing: border-box;
  padding-left: 2.5rem;

  cursor: pointer;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid transparent;

  &:hover {
    transform: scale(1.03);

    svg {
      fill: #ff6622;
      color: #ff6622;
      transition: transform 0.2s ease-in-out;
    }
    p {
      color: #ff6622;
    }
  }
`;
export interface BoxProps {
  clicked: boolean;
}
const Box = styled.div<BoxProps>`
  height: 3.75rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;

  ${({ clicked }) =>
    clicked &&
    css`
      color: #ff6622;

      svg {
        fill: #ff6622;
        color: #ff6622;
      }

      p {
        color: #ff6622;
      }
    `}
`;

const Font = styled.p`
  color: #7b829b;
  font-size: 1.15rem;
  font-weight: 500;
`;
