import styled from "styled-components";
import { useState, useEffect } from "react";
import { css } from "styled-components";

import CustomSelect from "@/styles/CustomSelect";

import Loading from "@components/common/Loading";
import MemberBoard from "@components/board/MemberBoard";
import { corpOptions, appOptions, eaOptions } from "@/data/common";

import { itemFilter } from "@/data/common";
import { memberBoardTitle, memberData } from "@/data/common";
import BorderButton from "@/styles/BorderButton";

import CustomDatePicker from "../common/DatePicker";

import { BiSearch } from "react-icons/bi";

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
  const today = new Date();
  const [startDate, setStartDate] = useState<string>(today.toString());
  const [endDate, setEndDate] = useState<string>(today.toString());

  // 멤버상세창 넘길 멤버
  const [activeItem, setActiveItem] = useState(0);
  // ...클릭시 설정팝업
  const [openAnother, setOpenAnother] = useState(-1);
  // ...클릭시 팝업,멤버인덱스 설정
  const handleOpenIndex = (index: number) => {
    setActiveItem(openAnother);
    setOpenAnother(index);
  };

  const [currentEa, setCurrentEa] = useState(eaOptions[0]);

  const [active, setActive] = useState<number>(1);
  useEffect(() => console.log("하이하이", startDate), [startDate]);

  return (
    <main className="flex flex-col items-center w-full h-full gap-3 rounded-2xl">
      <h1 className="box-border flex w-full gap-6 px-6 py-4 bg-white text-[1.6rem]">
        회원 관리
      </h1>

      <section className="box-border flex flex-col items-start w-full p-6 bg-white h-85vh">
        <div className="flex w-full gap-3">
          <button
            onClick={() => setActive(1)}
            className={`w-[5rem]  text-[0.84rem] truncate shadow-[0px_1px_3px_0px_#dadce0] ${
              active === 1
                ? "border border-active text-active"
                : "hover:border-active hover:text-active"
            }`}
          >
            전체기간
          </button>

          <div onClick={() => setActive(2)} className={`flex`}>
            <CustomDatePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>

          <div className="flex">
            <input
              className="w-[15rem] border shadow-[0px_1px_1px_0px_#dadce0_inset] text-[0.82rem] truncate rounded-lg"
              placeholder="검색어 입력"
              type="text"
            ></input>
            <BiSearch
              size={19}
              className="relative h-full left-[-1.5625rem] hover:cursor-pointer hover:fill-active"
            ></BiSearch>
          </div>
        </div>

        <div className="flex justify-end w-full">
          <CustomSelect
            options={eaOptions}
            setCurrent={setCurrentEa}
          ></CustomSelect>
        </div>

        <MemberBoard
          boardMenu={memberBoardTitle}
          boardData={memberData}
          openAnother={openAnother}
          handleOpenIndex={handleOpenIndex}
        ></MemberBoard>
      </section>
    </main>
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

const Headerbox = styled.h1`
  width: 100%;
  display: flex;
  padding: 1.5rem 2.5rem;
  gap: 1.5rem;

  justify-content: space-between;
  background-color: #fff;

  box-sizing: border-box;
`;

const Content = styled.div`
  width: 100%;
  height: 85vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  padding: 1.5rem 3rem;
`;

const Title = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: space-between;
`;

const Fillter = styled.div`
  max-width: 130rem;
  display: flex;
  justify-content: flex-start;
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
