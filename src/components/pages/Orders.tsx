import { useState } from "react";
import styled from "styled-components";

import BorderButtonLX from "@/styles/BorderButtonLX";

import { ordersData } from "@/data/common";
import { ReactComponent as AnotherIcon } from "@statics/images/anothericon.svg";

function Orders() {
  const tab = ["주문 현황", "일자별 주문 검색"];

  const [tabIndex, setTabIndex] = useState<number>(0);
  const handleTab = (id: number) => {
    setTabIndex(id);
  };

  return (
    <Box>
      <Headerbox>
        <Title>주문 관리</Title>
        {/* <Addbutton onClick={handleAddShop}>상점 추가</Addbutton> */}
      </Headerbox>

      <Wrapper>
        <Layout>
          <div className="flex gap-[1px]">
            {tab.map((item, index) => (
              <BorderButtonLX
                title={item}
                id={index}
                onClick={handleTab}
                activeId={tabIndex}
              ></BorderButtonLX>
            ))}
          </div>

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
                    <AnotherIcon />
                  </Iconbox>
                </Appbox>
              ))}
            </>
          )}
          {tabIndex == 1 && <></>}
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
