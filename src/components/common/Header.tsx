import { FC, useState } from "react";
import styled from "styled-components";
import { RxAvatar } from "react-icons/rx";

import {
  MdDensityMedium,
  MdSearch,
  MdOutlineNotificationAdd,
} from "react-icons/md";

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <Headerbox>
      <Hamburger size="27" onClick={() => toggleMenu()} />
      <Rightbox>
        <Search size="26"></Search>
        <Notification size="26"></Notification>
        <RxAvatar size="26"></RxAvatar>
        <ProfileName>관리자</ProfileName>
      </Rightbox>
    </Headerbox>
  );
};

export default Header;

const Headerbox = styled.div`
  width: 90%;
  height: 66px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 9px;
`;

const Rightbox = styled.div`
  width: 200px;
  margin-right: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Hamburger = styled(MdDensityMedium)`
  margin-left: 30px;
  cursor: pointer;
`;
const Search = styled(MdSearch)`
  cursor: pointer;
`;
const Notification = styled(MdOutlineNotificationAdd)`
  cursor: pointer;
`;

const ProfileName = styled.p`
  font-size: 22px;
`;
