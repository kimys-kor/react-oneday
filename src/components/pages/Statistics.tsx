import { useState } from "react";
import styled, { css } from "styled-components";

import BorderButtonLX from "@/styles/BorderButtonLX";

import { ReactComponent as Viewbar } from "@statics/images/viewbar.svg";
import { ReactComponent as Viewnumber } from "@statics/images/viewnumber.svg";

import HorizontalBarchart from "@components/chart/HorizontalBarchart";

import {
  horizontalData,
  horizontalModel,
} from "@/data/chartdata/HorizontalchartData";

import BorderButton from "@/styles/BorderButton";
import CustomDatePicker from "../common/DatePicker";

function Statistics() {
  const [statisticsIndex, setStatisticsIndex] = useState<number>(0);
  const handleStatisticsIndex = (index: number) => {
    setStatisticsIndex(index);
  };

  const [searchIndex, setSearchIndex] = useState<number>(0);
  const handleSearchIndex = (index: number) => {
    setSearchIndex(index);
  };

  const [viewIndex, setViewIndex] = useState<number>(0);
  const handleViewIndex = (index: number) => {
    setViewIndex(index);
  };

  const today = new Date();
  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(today);

  const formatAmounts = (data: Array<horizontalModel>) => {
    return data.map((item) => {
      const formattedAmount = item.amount.toLocaleString();
      return {
        ...item,
        amount: formattedAmount,
      };
    });
  };

  return (
    <Box>
      <Wrapper>
        <Layout>
          <Tabbox>
            <BorderButtonLX
              title={"주문건수 통계"}
              id={0}
              onClick={handleStatisticsIndex}
              activeId={statisticsIndex}
            ></BorderButtonLX>
            <BorderButtonLX
              title={"주문금액 통계"}
              id={1}
              onClick={handleStatisticsIndex}
              activeId={statisticsIndex}
            ></BorderButtonLX>
          </Tabbox>

          {statisticsIndex == 0 && (
            <>
              <Fillter>
                <Datewrapper>
                  <>
                    <CustomDatePicker
                      startDate={startDate}
                      setStartDate={setStartDate}
                      endDate={endDate}
                      setEndDate={setEndDate}
                      active={0}
                    />
                  </>

                  <Searchbox>
                    <BorderButton
                      title={"전체"}
                      id={0}
                      onClick={handleSearchIndex}
                      activeId={searchIndex}
                    ></BorderButton>
                    <BorderButton
                      title={"주문완료"}
                      id={1}
                      onClick={handleSearchIndex}
                      activeId={searchIndex}
                    ></BorderButton>
                    <BorderButton
                      title={"주문취소"}
                      id={2}
                      onClick={handleSearchIndex}
                      activeId={searchIndex}
                    ></BorderButton>
                  </Searchbox>
                  <Amount>기간통계 | 235건</Amount>
                </Datewrapper>
              </Fillter>

              <Viewbox>
                <View
                  onClick={() => handleViewIndex(0)}
                  active={viewIndex == 0}
                >
                  <Viewbar color="#BBBBCF"></Viewbar>
                </View>
                <View
                  onClick={() => handleViewIndex(1)}
                  active={viewIndex == 1}
                >
                  <Viewnumber color="#BBBBCF"></Viewnumber>
                </View>
              </Viewbox>

              <Content>
                {viewIndex == 0 ? (
                  <HorizontalBarchart></HorizontalBarchart>
                ) : (
                  <Board>
                    <Row>
                      <Appname>구분</Appname>
                      <Amountmoney>적립금액</Amountmoney>
                    </Row>
                    <Row style={{ backgroundColor: "#F4F5F9" }}>
                      <Appname>총합</Appname>
                      <Amountmoney>579,940</Amountmoney>
                    </Row>
                    {horizontalData.map((item, index) => (
                      <Row key={index}>
                        <Appname>{item.apps}</Appname>
                        <Amountmoney>{item.amount}</Amountmoney>
                      </Row>
                    ))}
                  </Board>
                )}
              </Content>
            </>
          )}

          {statisticsIndex == 1 && (
            <>
              <Fillter>
                <Datewrapper>
                  <>
                    <CustomDatePicker
                      startDate={startDate}
                      setStartDate={setStartDate}
                      endDate={endDate}
                      setEndDate={setEndDate}
                      active={0}
                    />
                  </>

                  <Searchbox>
                    <BorderButton
                      title={"전체"}
                      id={0}
                      onClick={handleSearchIndex}
                      activeId={searchIndex}
                    ></BorderButton>
                    <BorderButton
                      title={"주문완료"}
                      id={1}
                      onClick={handleSearchIndex}
                      activeId={searchIndex}
                    ></BorderButton>
                    <BorderButton
                      title={"주문취소"}
                      id={2}
                      onClick={handleSearchIndex}
                      activeId={searchIndex}
                    ></BorderButton>
                  </Searchbox>
                  <Amount>기간통계 | 579,940</Amount>
                </Datewrapper>
              </Fillter>

              <Viewbox>
                <View
                  onClick={() => handleViewIndex(0)}
                  active={viewIndex == 0}
                >
                  <Viewbar color="#BBBBCF"></Viewbar>
                </View>
                <View
                  onClick={() => handleViewIndex(1)}
                  active={viewIndex == 1}
                >
                  <Viewnumber color="#BBBBCF"></Viewnumber>
                </View>
              </Viewbox>

              <Content>
                {viewIndex == 0 ? (
                  <HorizontalBarchart></HorizontalBarchart>
                ) : (
                  <Board>
                    <Row>
                      <Appname>구분</Appname>
                      <Amountmoney>적립금액</Amountmoney>
                    </Row>
                    <Row style={{ backgroundColor: "#F4F5F9" }}>
                      <Appname>총합</Appname>
                      <Amountmoney>579,940</Amountmoney>
                    </Row>
                    {horizontalData.map((item, index) => (
                      <Row key={index}>
                        <Appname>{item.apps}</Appname>
                        <Amountmoney>{item.amount}</Amountmoney>
                      </Row>
                    ))}
                  </Board>
                )}
              </Content>
            </>
          )}
        </Layout>
      </Wrapper>
    </Box>
  );
}

export default Statistics;

const Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 1150px;
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
  border-bottom: 1px solid #bbbbcf;
`;

const Fillter = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .react-datepicker-wrapper {
    width: 156px;
  }
  .react-datepicker__calendar-icon {
    fill: #bbbbcf;
  }
  .react-datepicker__calendar-icon {
    position: absolute;
    top: 3px;
  }
`;

const Datewrapper = styled.div`
  display: flex;
`;

const DateFilter = styled.div`
  margin-top: 32px;
  margin-bottom: 20px;

  display: flex;
`;

const Datebox = styled.div``;

const Input = styled.input`
  box-sizing: border-box;
  width: 156px;
  height: 37px;
  padding: 5px 10px;
  background: #fff;
  border: 1px solid #bbbbcf;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  color: #bbbbcf;
  line-height: 37px;
  text-align: center;
`;

const Searchbox = styled.div`
  margin-left: 40px;
  display: flex;
`;

const Amount = styled.div`
  margin-left: 24px;
  font-weight: 500;
  color: #ff6622;
  border: 1px solid #ff6622;
  background-color: #ffffff;
  width: 235px;
  height: 37px;
  line-height: 37px;
  text-align: center;
`;

const Viewbox = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export interface ViewProps {
  active: boolean;
}

const View = styled.div<ViewProps>`
  width: 37px;
  height: 37px;

  background-color: #ffffff;
  border: 1px solid #bbbbcf;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ active }) =>
    active &&
    css`
      border: 1px solid #ff6622;
      background-color: #ff6622;
      svg {
        color: #fff;
      }
    `}
`;

const Content = styled.div`
  margin-top: 20px;
  min-height: 600px;
  width: 100%;
`;

const Board = styled.div`
  width: 100%;
  border: 1px solid #bbbbcf;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #bbbbcf;

  font-weight: 400;
  font-size: 15px;

  &:last-child {
    border-bottom: none;
  }
`;

const Appname = styled.div`
  width: 65%;
  height: 57px;
  text-align: center;
  line-height: 57px;
`;

const Amountmoney = styled.div`
  width: 35%;
  height: 57px;
  text-align: center;
  line-height: 57px;
`;

const Appname2 = styled.div`
  width: 60%;
  height: 57px;
  text-align: center;
  line-height: 57px;
`;

const Occupation = styled.div`
  width: 20%;
  height: 57px;
  text-align: center;
  line-height: 57px;
`;

const Number = styled.div`
  width: 20%;
  height: 57px;
  text-align: center;
  line-height: 57px;
`;

const ServiceContent = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 600px;
  min-height: 600px;
`;
