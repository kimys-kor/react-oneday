import { useState } from "react";
import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";

import CustomSelect from "@/styles/CustomSelect";
import BorderButton from "@/styles/BorderButton";

import { ReactComponent as Viewbar } from "@statics/images/statistics/viewbar.svg";
import { ReactComponent as Viewnumber } from "@statics/images/statistics/viewnumber.svg";

import Piechart from "@components/chart/Piechart";
import HorizontalBarchart from "@components/chart/HorizontalBarchart";

import {
  titleStatistics,
  dateFilter,
  searchFilter,
  chartFilter,
  yearOptions,
  monthOptions,
} from "@/data/common";

import {
  horizontalData,
  horizontalModel,
} from "@/data/chartdata/HorizontalchartData";

import {
  memberOccupationData,
  pointOccupationData,
  color,
} from "@/data/chartdata/piechartData";

function Statistics() {
  const [statisticsIndex, setStatisticsIndex] = useState<number>(0);
  const handleStatisticsIndex = (index: number) => {
    setStatisticsIndex(index);
  };

  const [dateIndex, setDateIndex] = useState<number>(0);
  const handleDateIndex = (index: number) => {
    setDateIndex(index);
  };

  const [searchIndex, setSearchIndex] = useState<number>(0);
  const handleSearchIndex = (index: number) => {
    setSearchIndex(index);
  };

  const [chartIndex, setChartIndex] = useState<number>(0);
  const handleChartIndex = (index: number) => {
    setChartIndex(index);
  };

  const [viewIndex, setViewIndex] = useState<number>(0);
  const handleViewIndex = (index: number) => {
    setViewIndex(index);
  };

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [currentYear, setCurrentYear] = useState(yearOptions[0].value);
  const [currentMonth, setCurrentMonth] = useState(monthOptions[0].value);

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
            <BorderButton
              width={152}
              titles={titleStatistics}
              activeIndex={statisticsIndex}
              handleButtonClick={handleStatisticsIndex}
            ></BorderButton>
          </Tabbox>

          {statisticsIndex == 0 && (
            <>
              <DateFilter>
                <BorderButton
                  width={152}
                  title={dateFilter}
                  activeIndex={dateIndex}
                  handleButtonClick={handleDateIndex}
                ></BorderButton>
              </DateFilter>

              <Fillter>
                <Datewrapper>
                  {dateIndex == 0 && (
                    <Datebox>
                      <DatePicker
                        locale={ko}
                        closeOnScroll={(e) => e.target === document}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        dateFormat="yyyy-MM-dd"
                        customInput={
                          // 날짜 뜨는 인풋 커스텀
                          <Input />
                        }
                      />
                    </Datebox>
                  )}
                  {dateIndex == 1 && (
                    <>
                      <Flexbox>
                        <CustomSelect
                          width={151}
                          height={37}
                          title={"연도"}
                          optionData={yearOptions}
                          currentValue={currentYear}
                          setCurrentValue={setCurrentYear}
                        ></CustomSelect>
                        <CustomSelect
                          width={151}
                          height={37}
                          title={"월"}
                          optionData={monthOptions}
                          currentValue={currentMonth}
                          setCurrentValue={setCurrentMonth}
                        ></CustomSelect>
                      </Flexbox>
                    </>
                  )}
                  {dateIndex == 2 && (
                    <>
                      <Datebox>
                        <DatePicker
                          locale={ko}
                          closeOnScroll={(e) => e.target === document}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          dateFormat="yyyy-MM-dd"
                          customInput={
                            // 날짜 뜨는 인풋 커스텀
                            <Input />
                          }
                        />
                      </Datebox>
                      ~
                      <Datebox>
                        <DatePicker
                          locale={ko}
                          closeOnScroll={(e) => e.target === document}
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          minDate={startDate}
                          dateFormat="yyyy-MM-dd"
                          customInput={
                            // 날짜 뜨는 인풋 커스텀
                            <Input />
                          }
                        />
                      </Datebox>
                    </>
                  )}

                  <Searchbox>
                    <BorderButton
                      width={152}
                      titles={searchFilter}
                      activeIndex={searchIndex}
                      handleButtonClick={handleSearchIndex}
                    ></BorderButton>
                  </Searchbox>
                  <Amount>기간통계 | 579,940</Amount>
                </Datewrapper>

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
              </Fillter>

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
                <Flexbox>
                  <BorderButton
                    width={152}
                    titles={chartFilter}
                    activeIndex={chartIndex}
                    handleButtonClick={handleChartIndex}
                  ></BorderButton>
                </Flexbox>

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
              </Fillter>

              {viewIndex == 0 ? (
                <Content>
                  {chartIndex == 0 ? (
                    <Board>
                      <Row>
                        <Appname2>구분</Appname2>
                        <Occupation>점유율</Occupation>
                        <Number>회원수</Number>
                      </Row>
                      {memberOccupationData.map((item, index) => (
                        <Row key={index}>
                          <Appname2>{item.id}</Appname2>
                          <Occupation>{item.occupation}</Occupation>
                          <Number>{item.value}</Number>
                        </Row>
                      ))}
                    </Board>
                  ) : (
                    <Board>
                      <Row>
                        <Appname2>구분</Appname2>
                        <Occupation>점유율</Occupation>
                        <Number>적립금</Number>
                      </Row>
                      {pointOccupationData.map((item, index) => (
                        <Row key={index}>
                          <Appname2>{item.id}</Appname2>
                          <Occupation>{item.occupation}</Occupation>
                          <Number>{item.value}</Number>
                        </Row>
                      ))}
                    </Board>
                  )}
                </Content>
              ) : (
                <ServiceContent>
                  <Piechart
                    Data={
                      chartIndex == 0
                        ? memberOccupationData
                        : pointOccupationData
                    }
                    color={color}
                  ></Piechart>
                </ServiceContent>
              )}
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
  display: flex;
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
  border: 1px solid #bbbbcf;
`;
