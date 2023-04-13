import { useState } from "react";
import styled from "styled-components";

import { Resolver } from "react-hook-form";

import AdminLogBoard from "@common/board/AdminLogBoard";

import Checkbox from "@/styles/checkbox/Checkbox";

import {
  adminLogBoardTitle,
  adminLogBoardData,
  adminAuthority,
} from "@data/admin/adminData";

import { admin } from "@/models/admin/adminModel";

interface MemberDetailProps {
  onClose: () => void;
  isDetailOpen: boolean;
  admin: admin | undefined;
}

type FormData = {
  savingPoint: number;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.savingPoint ? values : {},
    errors: !values.savingPoint
      ? {
          savingPoint: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

function AdminUserDetail({ onClose, isDetailOpen, admin }: MemberDetailProps) {
  const handleModalClose = () => {
    onClose();
  };

  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    // check if the item is already selected
    const isChecked: boolean = checkedItems.includes(value);
    // add or remove the item from the checkedItems array
    if (isChecked) {
      setCheckedItems(checkedItems.filter((item) => item !== value));
    } else {
      setCheckedItems([...checkedItems, value]);
    }
  };

  return (
    <Wrapper isDetailOpen={isDetailOpen}>
      <Modal isDetailOpen={isDetailOpen} onClick={(e) => e.stopPropagation()}>
        <Layout>
          <Headerbox>
            <Button onClick={handleModalClose}>&lt;</Button>
          </Headerbox>

          <Content>
            <Left>
              <Titlebox>
                <LeftButton>어드민 정보</LeftButton>
              </Titlebox>

              <LeftContent>
                <Row>
                  <Greyfont1>직책</Greyfont1>
                  <Blackfont1>{admin?.position}</Blackfont1>
                </Row>
                <Row>
                  <Greyfont1>이름</Greyfont1>
                  <Blackfont1>{admin?.name}</Blackfont1>
                </Row>
                <Row>
                  <Greyfont1>계정 ID</Greyfont1>
                  <Blackfont1>{admin?.id}</Blackfont1>
                </Row>
                <Row>
                  <Greyfont1>최초 등록일</Greyfont1>
                  <Blackfont1>{admin?.creteadDt}</Blackfont1>
                </Row>
                <Row>
                  <Greyfont1>최근 접속일</Greyfont1>
                  <Blackfont1>{admin?.lastloginDt}</Blackfont1>
                </Row>

                <Divide></Divide>
                <Row>
                  <Greyfont4>권한</Greyfont4>
                </Row>
                {adminAuthority.map((item, index) => (
                  <AuthorRow key={index}>
                    <Checkbox
                      text={item}
                      checked={true}
                      handleChange={handleChange}
                    ></Checkbox>
                  </AuthorRow>
                ))}
              </LeftContent>
            </Left>

            <Right>
              <Titlebox>
                <Buttonbox>
                  <LeftButton>작업이력</LeftButton>
                </Buttonbox>
              </Titlebox>
              <RightContent>
                <AdminLogBoard
                  index={0}
                  boardMenu={adminLogBoardTitle}
                  boardData={adminLogBoardData}
                ></AdminLogBoard>
              </RightContent>
            </Right>
          </Content>
        </Layout>
      </Modal>
    </Wrapper>
  );
}

export default AdminUserDetail;

interface WrapperProps {
  isDetailOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;

  /* add transition and transform properties */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  opacity: ${({ isDetailOpen }) => (isDetailOpen ? "1" : "0")};
  transform: ${({ isDetailOpen }) =>
    isDetailOpen ? "translateX(0%)" : "translateX(100%)"};
`;

const Modal = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-color: ${({ isDetailOpen }) =>
    isDetailOpen ? "#fff" : "#3e4042"};
  transition: opacity 1.5s ease-out;
`;

const Layout = styled.div`
  width: 85%;
`;

const Headerbox = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border-bottom: 1px solid #bbbbcf;
`;

const LeftButton = styled.div`
  line-height: 37px;
  text-align: center;
  font-family: "MinSans-Regular";
  font-size: 16px;
  font-weight: 300;
  width: 151px;
  height: 37px;

  border: 1px solid #ff6622;
  background-color: #ffffff;
  color: #ff6622;
  margin-right: 0;
`;

const Button = styled.div`
  box-sizing: border-box;
  border: 1px solid #bbbbcf;
  width: 37px;
  height: 37px;
  background-color: #fff;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  cursor: pointer;
  :hover {
    border-color: #ff6622;
    color: #ff6622;
  }
`;

const Content = styled.div`
  margin-top: 12px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 33%;
`;

const Titlebox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  width: 63%;
`;

const Buttonbox = styled.div`
  display: flex;
`;

const LeftContent = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  border: 1px solid #bbbbcf;
  padding: 32px 36px 47px 36px;
`;

const Row = styled.div`
  margin-top: 14px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
`;

const AuthorRow = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-start;
`;

const Greyfont1 = styled.div`
  color: #a8adc0;
  width: 100px;
  height: 21px;

  line-height: 100%;
  font-family: "MinSans-Bold";
  font-size: 16px;
  letter-spacing: -0.04em;

  &::after {
    content: "|";
    font-family: "MinSans-Regular";
    float: right;
  }
`;

const Greyfont4 = styled.div`
  color: #a8adc0;
  width: 180px;
  height: 30px;

  font-family: "MinSans-Bold";
  line-height: 100%;
  font-size: 16px;
  letter-spacing: -0.04em;
`;

const Blackfont1 = styled.div`
  margin-left: 16px;
  color: #43454b;
  height: 30px;

  line-height: 100%;
  font-size: 16px;
  letter-spacing: -0.04em;
`;

const Divide = styled.div`
  width: 100%;
  height: 17px;
  border-bottom: 1px solid #e3e6f2;
  margin-bottom: 32px;
`;

const RightContent = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
`;

// const Checkbox = styled.input`
//   width: 21px;
//   height: 21px;

//   color: #ff6622;
//   background-color: #fff;
// `;
