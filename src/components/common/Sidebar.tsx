import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import { sidebarMenu } from "@data/sidebar/sidebarData";
import { Link, useNavigate, useLocation } from "react-router-dom";

import avatar1 from "@images/sidebar/avatar/avatar1.png";

import { SidebarProps, BoxProps } from "@data/sidebar/sidebarData";

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
  align-items: center;
  background-color: #fff;

  position: fixed;
`;

const Profile = styled.div`
  width: 80%;
  height: 144px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;
const Info = styled.div`
  margin-left: 10px;
`;

const Logout = styled.div`
  cursor: pointer;
  text-decoration: underline;
  color: #898ea2;
`;

const Wrapper = styled.div`
  width: 80%;
  border-top: 1.5px solid #e3e6f2;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Menu = styled.div`
  width: 100%;
  height: 56px;

  font-family: "MinSans-Regular";
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
`;

const Box = styled.div<BoxProps>`
  margin-bottom: 10px;
  display: flex;
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
  margin-left: 10px;
  color: #7b829b;
  font-weight: 500;
`;
