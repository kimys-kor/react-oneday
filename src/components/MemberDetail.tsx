import { useState } from "react";
import styled from "styled-components";

import BorderButton from "@/styles/button/BorderButton";
import CustomSelect from "@/styles/selectbox/CustomSelect";
import { useForm, Resolver } from "react-hook-form";
import { eaOptions } from "@data/member/memberData";
import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

import MemberPointBoard from "@common/board/MemberPointBoard";
import {
  savePointBoardData,
  savePointBoardTitle,
  usePointBoardData,
  usePointBoardTitle,
} from "@data/member/memberData";

interface MemberDetailProps {
  onClose: () => void;
  isModalOpen: boolean;
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

function MemberDetail({ onClose, isModalOpen }: MemberDetailProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const handleButtonClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleModalClose = () => {
    onClose();
  };

  const [showHideDiv, setShowHideDiv] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Wrapper isModalOpen={isModalOpen}>
      <Modal isModalOpen={isModalOpen} onClick={(e) => e.stopPropagation()}>
        <Layout>
          <Headerbox>
            <Button onClick={handleModalClose}>&lt;</Button>
          </Headerbox>

          <Content>
            <Left>
              <Titlebox>
                <LeftButton>회원 정보</LeftButton>
              </Titlebox>
              <LeftContent>
                <Row>
                  <Greyfont1>상태</Greyfont1>
                  <Blackfont1>휴면</Blackfont1>
                  <Iconbox>
                    <AnotherIcon
                      onClick={() => setShowHideDiv((prev) => !prev)}
                    ></AnotherIcon>
                    {showHideDiv && (
                      <Optionbox>
                        <Option>활성화</Option>
                        <Option>비활성화</Option>
                      </Optionbox>
                    )}
                  </Iconbox>
                </Row>
                <Row>
                  <Greyfont1>고유 ID</Greyfont1>
                  <Blackfont1>1</Blackfont1>
                </Row>

                <Row>
                  <Greyfont1>핸드폰 번호</Greyfont1>
                  <Blackfont1>010-9894-6022</Blackfont1>
                </Row>

                <Row>
                  <Greyfont1>이메일</Greyfont1>
                  <Emailbox>
                    <Blackfont1>hajogngod50@kakao.com</Blackfont1>
                  </Emailbox>
                </Row>
                <Row>
                  <Greyfont1>최초 가입일</Greyfont1>
                  <Blackfont1>2023-03-06 17:39:32</Blackfont1>
                </Row>
                <Row>
                  <Greyfont1>최근 접속일</Greyfont1>
                  <Blackfont1>2023-03-06 17:39:32</Blackfont1>
                </Row>

                <Divide></Divide>

                <Row>
                  <Greyfont2>총 주문 횟수</Greyfont2>
                  <Blackfont1>1000P</Blackfont1>
                </Row>

                <Row>
                  <Greyfont2>총 주문 금액</Greyfont2>
                  <Blackfont1>100000</Blackfont1>
                </Row>

                <Row>
                  <Greyfont2>등급</Greyfont2>
                  <Blackfont1>플레티넘</Blackfont1>
                </Row>

                <Divide></Divide>

                <Row>
                  <Greyfont3>현재 보유 포인트</Greyfont3>
                  <Blackfont1>3250P</Blackfont1>
                </Row>

                <Row>
                  <Greyfont3>포인트 적립하기</Greyfont3>
                </Row>

                <Row>
                  <Form onSubmit={onSubmit}>
                    <PointInput
                      placeholder="적립 금액을 입력해 주세요..."
                      type="number"
                      {...register("savingPoint")}
                    ></PointInput>
                    <Submitbutton type="submit" value="적립" />
                  </Form>
                </Row>
              </LeftContent>
            </Left>

            <Right>
              <Titlebox>
                <Buttonbox>
                  <BorderButton
                    width={151}
                    titles={["주문내역"]}
                    activeIndex={activeIndex}
                    handleButtonClick={handleButtonClick}
                  ></BorderButton>
                </Buttonbox>
                <CustomSelect
                  width={99}
                  height={37}
                  optionData={eaOptions}
                ></CustomSelect>
              </Titlebox>
              <RightContent>
                <MemberPointBoard
                  index={0}
                  boardMenu={savePointBoardTitle}
                  boardData={savePointBoardData}
                ></MemberPointBoard>
              </RightContent>
            </Right>
          </Content>
        </Layout>
      </Modal>
    </Wrapper>
  );
}

export default MemberDetail;

interface WrapperProps {
  isModalOpen: boolean;
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
  opacity: ${({ isModalOpen }) => (isModalOpen ? "1" : "0")};
  transform: ${({ isModalOpen }) =>
    isModalOpen ? "translateX(0%)" : "translateX(100%)"};
`;

const Modal = styled.div<WrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-color: ${({ isModalOpen }) => (isModalOpen ? "#fff" : "#3e4042")};
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

const RightContent = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;

  overflow: hidden;
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
  justify-content: space-between;
`;

const Emailbox = styled.div`
  width: 60%;
`;

const Iconbox = styled.div`
  width: 20px;
  cursor: pointer;
  position: relative;
  top: -6px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Greyfont1 = styled.div`
  color: #a8adc0;
  width: 100px;
  height: 30px;

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

const Greyfont2 = styled.div`
  color: #a8adc0;
  width: 180px;
  height: 30px;

  font-family: "MinSans-Bold";
  line-height: 100%;
  font-size: 16px;
  letter-spacing: -0.04em;

  &::after {
    content: "|";
    font-family: "MinSans-Regular";
    float: right;
  }
`;

const Greyfont3 = styled.div`
  color: #a8adc0;
  width: 130px;
  height: 30px;

  font-family: "MinSans-Bold";
  line-height: 100%;
  font-size: 16px;
  letter-spacing: -0.04em;

  &::after {
    content: "|";
    font-family: "MinSans-Regular";
    float: right;
  }
`;

const Blackfont1 = styled.div`
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

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
`;

const PointInput = styled.input`
  width: 80%;
  border: 1px solid #bbbbcf;

  text-align: center;
  font-family: "MinSans-Regular";
  font-size: 16px;
`;

const Submitbutton = styled.input`
  border: none;
  width: 20%;
  height: 50px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #ff6622;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Optionbox = styled.div`
  width: 99px;
  height: 81px;
  border: 1px solid #bbbbcf;
  box-shadow: 0px 12px 12px rgba(30, 32, 38, 0.1);
  text-align: center;
  background-color: #fff;

  position: absolute;
  left: -80px;
  z-index: 10;
`;

const Option = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #bbbbcf;

  &:hover {
    color: #ff6622;
  }
`;
