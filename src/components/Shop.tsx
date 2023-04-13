import axios from "axios";
import { useState, useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { shoplocation } from "@/data/shop/shopData";
import { useForm, Resolver } from "react-hook-form";
import vector from "@images/app/Vector.png";

import Board from "@/components/common/board/MemberBoard";

type FormData = {
  firstName: string;
  lastName: string;
  shopName: string;
  businessNumber: number;
  ownerName: string;
  shopAddress: string;
  shopContact: number;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

function Shop() {
  return (
    <Shopbox>
      <MenuTable>
        <tr>
          <AppInfoMenu>앱 정보 관리</AppInfoMenu>
          <LimitPriceMenu>목표 금액 관리</LimitPriceMenu>
          <AdvMenu>노출 대행사 관리</AdvMenu>
          {/*서비스 추가하기 노출 대행사 관리 간격 설정하는 부분*/}
          <td width="35%"></td>
          <AddAppButton>+서비스 추가하기</AddAppButton>
        </tr>
      </MenuTable>
    </Shopbox>
  );
}

export default Shop;

const AppContent = styled.div`
  margin-left: 8px;
  font-family: "Minsans-Regular";
  font-size: 16px;
  color: #43454b;
`;

const Line = styled.div`
  margin-left: 8px;
  background: #dbddeb;
  width: 1px;
  height: 14px;
`;

const AppNumberTitle = styled.div`
  margin-left: 20px;
  font-family: "Minsans-Regular";
  font-size: 16px;
  color: #a8adc0;
`;

const AppName = styled.div`
  margin-left: 20px;
  display: inline-block;
  white-space: nowrap;
  color: #1e2026;
  font-family: "Minsans-Regular";
  font-size: 16px;
`;

const AppIconLayout = styled.div`
  display: flex;
  margin-left: 24px;
  align-items: center;
  width: 60px;
  height: 60px;
`;

const AppLayout = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  border-width: 1px;
  border-color: #bbbbcf;
  background: #ffffff;
  width: 100%;
  height: 108px;
`;

const Shopbox = styled.div`
  margin-top: 20px;
  width: 90%;
  height: 66px;
`;

const Title = styled.p`
  font-size: 35px;
`;

const MenuTable = styled.table`
  margin-top: 63px;
  text-align: center;
  line-height: 37px;
  font-size: 16px;
  font-family: "Minsans-Regular";
`;

const AppInfoMenu = styled.td`
  margin-left: 5px;
  width: 152px;
  height: 37px;
  border-style: solid;
  border-width: 1px;
  border-color: #ff6622;
  color: #ff6622;
  background: #ffffff;
`;

const LimitPriceMenu = styled.td`
  width: 152px;
  height: 37px;
  border-style: solid;
  border-width: 1px;
  border-color: #bbbbcf;
  color: #bbbbcf;
  background: #ffffff;
`;

const AdvMenu = styled.td`
  width: 152px;
  height: 37px;
  border-style: solid;
  border-width: 1px;
  border-color: #bbbbcf;
  color: #bbbbcf;
  background: #ffffff;
`;

const AddAppButton = styled.td`
  width: 183px;
  height: 37px;
  color: #ffffff;
  background: #ff6622;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const Fillterbox = styled.div`
  height: 52px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Fillterbutton = styled.div`
  color: #8a9099;
  width: 70px;
  height: 50px;
  color: #8a9099;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #304ffd;
  }
`;

const Addbutton = styled.span`
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #304ffd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1536f5;
  }
`;

const Plus = styled(AiOutlinePlus)`
  margin-right: 5px;
`;

const Card = styled.div`
  margin-top: 50px;
  width: 100%;

  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Formbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inputbox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  label {
    width: 20%;
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #304ffd;
  width: 70%;
`;

const Canclebutton = styled.div`
  margin-top: 50px;
  border: none;
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #304ffd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1536f5;
  }
`;
const Submitbutton = styled.input`
  margin-top: 50px;
  border: none;
  width: 100px;
  height: 50px;
  color: #304ffd;
  font-size: 14px;
  letter-spacing: 0.2rem;
  border: 1px solid #304ffd;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1536f5;
    color: #fff;
  }
`;

const Star = styled.p`
  display: inline;
  margin-left: 3px;
  color: red;
`;
