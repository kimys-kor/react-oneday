import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import CustomSelect from "@/styles/selectbox/CustomSelect";
import BorderButton from "@/styles/button/BorderButton";

import { adv } from "@/data/application/applicationData";
import { corpOptions } from "@/data/dashboard/dashboardData";
import {
  titleApplication,
  appData,
  advBoardMenu,
  advBoardData,
} from "@/data/application/applicationData";
import { adminBoardTitle, adminBoardData } from "@data/admin/adminData";
import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

import appicon from "@statics/images/application/appicon.png";

function Orders() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const handleTab = (index: number) => {
    setTabIndex(index);
  };

  const [anotherIndex, setAnotherIndex] = useState(-1);
  const handleOpenIndex = (index: number) => {
    setActiveApp(anotherIndex);
    setAnotherIndex(index);
  };

  const optionRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionRef.current &&
      !optionRef.current.contains(event.target as Node)
    ) {
      handleOpenIndex(-1);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isDetailOpen, setDetailOpen] = useState(false);
  const handleDetail = (index: number) => {
    setDetailOpen(true);
    console.log(index);
  };
  const handleDetailClose = () => {
    setDetailOpen(false);
  };

  const [isAddAppOpen, setAddAppOpen] = useState(false);
  const handleAddForm = () => {
    setAddAppOpen((prev) => !prev);
  };
  const [activeApp, setActiveApp] = useState(0);

  const [openAnother, setOpenAnother] = useState(-1);
  const handleAnother = (index: number) => {
    setOpenAnother(index);
  };

  return (
    <Box>
      <Headerbox>
        <Title>주문 현황</Title>
        {/* <Addbutton onClick={handleAddShop}>상점 추가</Addbutton> */}
      </Headerbox>

      <Wrapper>
        <Layout>
          <Tabbox>
            <BorderButton
              width={152}
              titles={titleApplication}
              activeIndex={tabIndex}
              handleButtonClick={handleTab}
            ></BorderButton>
          </Tabbox>

          {tabIndex == 0 && (
            <>
              <Addbox>
                <Addbutton onClick={handleAddForm}>+서비스 추가하기</Addbutton>
              </Addbox>
              {appData.map((item, index) => (
                <Appbox key={index}>
                  <Flex>
                    <Img src={appicon}></Img>
                    <Info>
                      <Title>{item.name}</Title>
                      <Detailbox>
                        <Detail>
                          <Greyfont4>앱 번호 |</Greyfont4>{" "}
                          <span>{item.id}</span>
                        </Detail>
                        <Detail>
                          <Greyfont4>활성 유저 |</Greyfont4>{" "}
                          <span>{item.user}</span>
                        </Detail>
                        <Detail>
                          <Greyfont4>누적 적립금액 |</Greyfont4>{" "}
                          <span>{item.savedPoint}</span>
                        </Detail>
                        <Detail>
                          <Greyfont4>스토어 | </Greyfont4>
                          {item.store.map((item, index) => (
                            <Store key={index}>{item}</Store>
                          ))}
                        </Detail>
                      </Detailbox>
                    </Info>
                  </Flex>

                  <Iconbox>
                    <AnotherIcon
                      onClick={() =>
                        handleOpenIndex(anotherIndex === index ? -1 : index)
                      }
                    />
                    {anotherIndex === index && (
                      <Optionbox
                        ref={optionRef}
                        onClick={() =>
                          handleOpenIndex(anotherIndex === index ? -1 : index)
                        }
                      >
                        <Option onClick={() => handleDetail(index)}>
                          상세정보
                        </Option>
                        <Option>수정</Option>
                        <Option>삭제</Option>
                      </Optionbox>
                    )}
                  </Iconbox>
                </Appbox>
              ))}
            </>
          )}
          {tabIndex == 1 && (
            <>
              {appData.map((item, index) => (
                <Appbox key={index}>
                  <Flexbox>
                    <Info>
                      <Title>{item.name}</Title>
                      <AppContent>
                        {adv.map((item, index) => (
                          <Inputbox key={index}>
                            <Greyfont4>{item.name}</Greyfont4>{" "}
                            <Input defaultValue={item.amount}></Input>
                          </Inputbox>
                        ))}
                      </AppContent>
                    </Info>
                    <div>
                      <Submitbutton type="submit" value="저장" />
                    </div>
                  </Flexbox>
                </Appbox>
              ))}
            </>
          )}

          {tabIndex == 2 && (
            <>
              <Addbox>
                <Addbutton onClick={handleAddForm}>+가맹점 추가하기</Addbutton>
              </Addbox>
            </>
          )}
          {tabIndex == 3 && <>노출대행사관리</>}
        </Layout>
      </Wrapper>
    </Box>
  );
}

export default Orders;

const Box = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
`;

const Headerbox = styled.div`
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
`;

const Selectbox = styled.div`
  margin-left: 68px;
  width: 586px;

  display: flex;
  gap: 36px;
  justify-content: flex-start;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 12px;
  width: 100%;
  min-height: 1000px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

const Layout = styled.div`
  margin-top: 54px;
  width: 91%;
`;

const Tabbox = styled.div`
  height: 70px;
  display: flex;
`;

const Appbox = styled.div`
  box-sizing: border-box;
  padding-left: 24px;
  padding-right: 40px;
  margin-top: 20px;
  width: 100%;
  height: 108px;

  border: 1px solid #bbbbcf;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Flexbox = styled(Flex)`
  width: 100%;
`;

const Iconbox = styled.div`
  box-sizing: border-box;

  width: 30px;
  height: 15px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Img = styled.img`
  width: 60px;
  height: 60px;
`;

const Info = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  color: #1e2026;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.04em;
`;

const Greyfont4 = styled.span`
  color: #a8adc0;
  width: 180px;
  height: 30px;

  line-height: 100%;
  font-size: 16px;
  letter-spacing: -0.04em;
`;

const Detailbox = styled.div`
  display: flex;
  gap: 3rem;
`;

const Detail = styled.span`
  margin-top: 16px;
`;

const Store = styled.span`
  margin-left: 15px;
`;

const Addbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const Addbutton = styled.div`
  width: 183px;
  height: 37px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #ff6622;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: #f1520e;
  }
`;

const Optionbox = styled.div`
  width: 99px;

  border: 1px solid #bbbbcf;
  box-shadow: 0px 12px 12px rgba(30, 32, 38, 0.1);
  text-align: center;
  background-color: #fff;

  position: relative;
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

const AppContent = styled.span`
  display: flex;
  gap: 1.5rem;
`;

const Inputbox = styled.span`
  margin-top: 10px;
  width: 107px;
`;

const Input = styled.input`
  width: 100%;
  height: 28px;
  text-align: center;

  border: 1px solid #7b829b;
  &:focus {
    outline: none;
  }
`;

const Submitbutton = styled.input`
  border: none;
  width: 85px;
  height: 37px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #ff6622;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #ff6622;
    border: 1px solid #ff6622;
  }
`;
