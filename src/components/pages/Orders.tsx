import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import BorderButton from "@styles/button/BorderButton";

import { tabOrders, ordersData } from "@data/orders/ordersData";
import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

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
              titles={tabOrders}
              activeIndex={tabIndex}
              handleButtonClick={handleTab}
            ></BorderButton>
          </Tabbox>

          {tabIndex == 0 && (
            <>
              {ordersData.map((item, index) => (
                <Appbox key={index}>
                  <Flex>
                    <Status statusCode={item.statusCode}>{item.status}</Status>
                    <Info>
                      <CardTitle>{item.productName}</CardTitle>
                      <Detailbox>
                        <Detail>
                          <Greyfont4>담당기사 |</Greyfont4>{" "}
                          <span>{item.riderName}</span>
                        </Detail>
                        <Detail>
                          <Greyfont4>스토어 |</Greyfont4>{" "}
                          <span>{item.shopName}</span>
                        </Detail>
                        <Detail>
                          <Greyfont4>주문자 |</Greyfont4>{" "}
                          <span>{item.memberNickname}</span>
                        </Detail>
                        <Detail>
                          <Greyfont4>주문 금액 |</Greyfont4>{" "}
                          <span>{item.price}</span>
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
          {tabIndex == 1 && <></>}
          {tabIndex == 2 && <></>}
          {tabIndex == 3 && <></>}
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
  margin-left: 20px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
`;

const CardTitle = styled.div`
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

interface statusProps {
  statusCode: number;
}

const Status = styled.div<statusProps>`
  width: 100px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  border-radius: 7px;
  color: #fff;
  background-color: ${(statusProps) => {
    switch (statusProps.statusCode) {
      case 0:
        return "green";
      case 1:
        return "orange";
      case 2:
        return "blue";
      case 3:
        return "navy";
      case 4:
        return "red";
      default:
        return "red";
    }
  }};
`;
