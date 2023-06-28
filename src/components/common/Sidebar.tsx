import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import { sidebarMenu } from "@/data/common";
import { Link, useNavigate, useLocation } from "react-router-dom";

import avatar1 from "@images/sidebar/avatar/avatar1.png";

export interface SidebarProps {
  xPosition: number;
}

function Sidebar({ xPosition }: SidebarProps) {
  let pathName = useLocation().pathname;
  let modifiedPathName = pathName.replace(/\/\d+$/, "");

  const navigate = useNavigate();

  const side = useRef<HTMLDivElement>(null);

  const logOut = () => {
    navigate("/");
  };

  return (
    <div
      className="fixed flex flex-col bg-white"
      ref={side}
      style={{
        width: "18.625rem",
        height: "100vh",
        transform: `translatex(${-xPosition}px)`,
      }}
    >
      <div className="h-[9rem] flex items-center p-8">
        <img className="w-16 h-16 rounded-[50%]" src={avatar1}></img>
        <div className="ml-[0.625rem] text-[1.0625rem] font-normal">
          <p>admin-01</p>
          <p
            className="text-gray-400 underline cursor-pointer underline-offset-4 hover:text-black"
            onClick={() => logOut()}
          >
            로그아웃
          </p>
        </div>
      </div>

      {sidebarMenu.map((item, index1) => (
        <div className="flex flex-col py-8 border-t-[1.5px]" key={index1}>
          {item.map((menu, index2) => (
            <Link to={menu.path} key={index2}>
              <div className="box-border pl-10 border border-transparent">
                <Box clicked={menu.pathname === modifiedPathName}>
                  {menu.logo}
                  <p className="color-[#7b829b] text-[1.15rem] font-medium">
                    {menu.name}
                  </p>
                </Box>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;

export interface BoxProps {
  clicked: boolean;
}
const Box = styled.div<BoxProps>`
  height: 3.75rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;

  transition: 0.3s ease-in-out;
  color: #7b829b;

  &:hover {
    transform: translateX(1rem);

    svg {
      color: #ff6622;
      transition: transform 0.2s ease-in-out;
    }
    p {
      color: #ff6622;
    }
  }

  ${({ clicked }) =>
    clicked &&
    css`
      color: #ff6622;

      svg {
        color: #ff6622;
      }

      p {
        color: #ff6622;
      }
    `}
`;
