import styled from "styled-components";
import { useState } from "react";
import { css } from "styled-components";

import CustomSelect from "@/styles/CustomSelect";
import SearchInput from "@components/common/SearchInput";
import Loading from "@components/common/Loading";
import MemberDetail from "@components/details/MemberDetail";
import MemberBoard from "@components/board/MemberBoard";
import { corpOptions, appOptions, eaOptions } from "@/data/common";

import { itemFilter } from "@/data/common";
import { memberBoardTitle, memberData } from "@/data/common";
import BorderButton from "@/styles/BorderButton";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import Summary from "../common/Summary";

function Member() {
  const [dateFilterIndex, setDateFilterIndex] = useState<number>(0);
  // 헤더 날짜필터
  const [dateIndex, setDateIndex] = useState<number | null>(0);
  const setDate = (index: number) => {
    setDateIndex(index === dateIndex ? null : index);
  };
  // 멤버 상태필터
  const [filterIndex, setFilterIndex] = useState<number | null>(0);
  const handleFilter = (index: number) => {
    setFilterIndex(index === filterIndex ? null : index);
  };
  // 헤더 날짜 필터
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  // 디테일 모달 상태
  const [isDetailOpen, setDetailOpen] = useState(false);
  const handleDetailOpen = (index: number) => {
    setDetailOpen(true);
    console.log(index);
  };
  const handleDetailClose = () => {
    setDetailOpen(false);
  };

  // 멤버상세창 넘길 멤버
  const [activeItem, setActiveItem] = useState(0);
  // ...클릭시 설정팝업
  const [openAnother, setOpenAnother] = useState(-1);
  // ...클릭시 팝업,멤버인덱스 설정
  const handleOpenIndex = (index: number) => {
    setActiveItem(openAnother);
    setOpenAnother(index);
  };

  const [currentEa, setCurrentEa] = useState(eaOptions[0].value);

  const [activeButton1, setActiveButton1] = useState<number>(1);
  const handleButtonClick1 = (id: number) => {
    setActiveButton1(id);
  };

  const [activeButton2, setActiveButton2] = useState<number>(1);
  const handleButtonClick2 = (id: number) => {
    setActiveButton2(id);
  };

  return (
    <Wrapper>
      <Headerbox>
        <Title>회원 관리</Title>
      </Headerbox>

      <Content>
        <Fillter>
          <div className="flex gap-5">
            <BorderButton
              title={"전체기간"}
              id={1}
              onClick={handleButtonClick1}
              activeId={activeButton1}
            ></BorderButton>

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
                  <DateInput
                    onClick={() => handleButtonClick1(2)}
                    activeId={activeButton1}
                  />
                }
              />

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
                  <DateInput
                    onClick={() => handleButtonClick1(2)}
                    activeId={activeButton1}
                  />
                }
              />
            </Datebox>
          </div>

          <div className="flex w-80">
            <BorderButton
              title={"전체"}
              id={1}
              onClick={handleButtonClick2}
              activeId={activeButton2}
            ></BorderButton>
            <BorderButton
              title={"활성"}
              id={2}
              onClick={handleButtonClick2}
              activeId={activeButton2}
            ></BorderButton>
            <BorderButton
              title={"비활성"}
              id={3}
              onClick={handleButtonClick2}
              activeId={activeButton2}
            ></BorderButton>
            <BorderButton
              title={"휴면"}
              id={4}
              onClick={handleButtonClick2}
              activeId={activeButton2}
            ></BorderButton>
          </div>

          <div className="flex gap-5">
            <SearchInput></SearchInput>

            <CustomSelect
              width={6}
              height={2.5}
              optionData={eaOptions}
              currentValue={currentEa}
              setCurrentValue={setCurrentEa}
            ></CustomSelect>
          </div>
        </Fillter>

        <MemberBoard
          boardMenu={memberBoardTitle}
          boardData={memberData}
          handleDetailOpen={handleDetailOpen}
          openAnother={openAnother}
          handleOpenIndex={handleOpenIndex}
        ></MemberBoard>
      </Content>

      {/* <MemberDetail
        onClose={handleDetailClose}
        isDetailOpen={isDetailOpen}
        member={memberData[activeItem]}
      /> */}
    </Wrapper>
  );
}

export default Member;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  gap: 0.75rem;
`;

const Headerbox = styled.div`
  width: 100%;
  display: flex;
  padding: 1.5rem 2.5rem;
  gap: 1.5rem;

  justify-content: space-between;
  background-color: #fff;

  box-sizing: border-box;

  @media (max-width: 1150px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  }
`;

const Content = styled.div`
  width: 100%;
  height: 85vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1.5rem 3rem;
`;

const Title = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: space-between;
`;

const Fillter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  .react-datepicker-wrapper {
    width: 10rem;
  }
  .react-datepicker__calendar-icon {
    fill: #bbbbcf;
  }
  .react-datepicker__calendar-icon {
    position: absolute;
    top: 3px;
  }

  @media (max-width: 1530px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Datebox = styled.div`
  display: flex;
  width: 14rem;
`;

interface inputProp {
  activeId: number;
}

const DateInput = styled.input<inputProp>`
  box-sizing: border-box;
  width: 7rem;
  height: 2.3125rem;
  padding: 5px 10px;
  background: #fff;
  border: 1px solid #bbbbcf;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  color: #bbbbcf;
  line-height: 37px;
  text-align: center;

  ${({ activeId }) =>
    activeId === 2 &&
    css`
      border: 1px solid #ff6622;
    `}

  &:focus {
    outline: none;
  }
`;
