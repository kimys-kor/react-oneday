import DatePicker from "react-datepicker";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { getMonth, getYear } from "date-fns";

import {
  BsArrowLeft,
  BsArrowRight,
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";

import styled from "styled-components";

interface IProps {
  startDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  endDate: string;
  setEndDate: Dispatch<SetStateAction<string>>;
}

const CustomDatePicker = (props: IProps) => {
  // 연도 선택 select box에 보여질 데이터 : range(시작 연도, 끝 연도, 연도 간격)

  // 월 선택 select box에 보여질 데이터
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const currentYear = new Date().getFullYear();
  const years = [
    currentYear - 5,
    currentYear - 4,
    currentYear - 3,
    currentYear - 2,
    currentYear - 1,
    currentYear,
    currentYear + 1,
    currentYear + 2,
    currentYear + 3,
    currentYear + 4,
    currentYear + 5,
  ];

  return (
    <Wrapper>
      <div className="flex justify-between items-center w-[13rem]">
        {/* 시작 날짜를 지정하는 데이트 피커 */}
        <DatePicker
          locale={ko} // (월~일 부분) 한국어로 변환
          dateFormat="yyyy.MM.dd" // 선택된 날짜를 input box에 나타내는 형식
          selected={new Date(props.startDate)}
          onChange={(date) => props.setStartDate(date?.toISOString() ?? "")} // 선택한 날짜를 state에 저장
          selectsStart
          startDate={new Date(props.startDate)}
          endDate={new Date(props.endDate)}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="px-4 flex justify-between items-center w-[13rem] h-[2.25rem]">
              {/* 이전 월로 이동하는 버튼 */}
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <BsArrowLeftCircleFill
                  size={18}
                  className="fill-white"
                ></BsArrowLeftCircleFill>
              </button>

              <div className="flex justify-between items-center w-[4rem]">
                {/* 연도 선택 select box */}
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) =>
                    changeYear(Number(value))
                  }
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>년</span>
              </div>
              <div className="flex justify-between items-center w-[3rem]">
                {/* 월 선택 select box */}
                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>월</span>
              </div>
              {/* 다음 월로 이동하는 버튼 */}
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <BsArrowRightCircleFill
                  size={18}
                  className="fill-white"
                ></BsArrowRightCircleFill>
              </button>
            </div>
          )}
          customInput={
            // 날짜 뜨는 인풋 커스텀
            <input
              className={`box-border px-2 text-sm font-normal leading-9 text-center
              text-gray-500 bg-white border-[1px] border-gray-300  w-28
              shadow-[0px_1px_3px_0px_#dadce0]
              "hover:border-active hover:text-active"
              `}
            />
          }
        />

        {/* 종료 날짜를 지정하는 데이트 피커 */}
        <DatePicker
          locale={ko}
          dateFormat="yyyy.MM.dd"
          selected={new Date(props.endDate)}
          onChange={(date) => props.setStartDate(date?.toISOString() ?? "")}
          selectsEnd
          startDate={new Date(props.startDate)}
          endDate={new Date(props.endDate)}
          minDate={new Date(props.startDate)}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="px-4 flex justify-between items-center w-[13rem] h-[2.25rem]">
              <button
                onClick={decreaseMonth}
                // disabled={prevMonthButtonDisabled}
              >
                <BsArrowLeftCircleFill
                  size={18}
                  className="fill-white"
                ></BsArrowLeftCircleFill>
              </button>

              <div className="flex justify-between items-center w-[4rem]">
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) =>
                    changeYear(Number(value))
                  }
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>년</span>
              </div>
              <div className="flex justify-between items-center w-[3rem]">
                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <span>월</span>
              </div>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <BsArrowRightCircleFill
                  size={18}
                  className="fill-white"
                ></BsArrowRightCircleFill>
              </button>
            </div>
          )}
          customInput={
            // 날짜 뜨는 인풋 커스텀
            <input
              className={`box-border px-2 text-sm font-normal leading-9 text-center
              text-gray-500 bg-white border-[1px] border-gray-300  w-28
              shadow-[0px_1px_3px_0px_#dadce0]
              "hover:border-active hover:text-active"
              `}
            />
          }
        />
      </div>
    </Wrapper>
  );
};

export default CustomDatePicker;

const Wrapper = styled.div`
  .react-datepicker-ignore-onclickoutside {
    border: 1px solid #ff6622 !important;
    outline: none;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border: none !important;
    border-radius: 4px;
  }
  .react-datepicker-wrapper {
    width: 152px;
  }
  .react-datepicker__header {
    height: 36px !important;
    padding: 0 !important;
    background-color: #ff6622 !important;
    border: none !important;
    position: relative;
    text-align: center;
  }

  .react-datepicker__month-container {
    /* width: 300px;
    height: 200px; */
  }
  .react-datepicker__month {
    /* width: 100%; */
  }

  .custom-react-datepicker__select-wrapper button {
    background-color: transparent;
    border: none;
  }
  .custom-react-datepicker__select-item {
    display: flex;
    font-display: row;
    justify-content: space-between;
    align-items: center;
    width: 64px;
  }
  .custom-react-datepicker__select-wrapper select {
    width: 54px;
    height: 18px;
    background: #ffffff;
    border-radius: 3px;
    font-weight: 400;
    font-size: 12px;
  }
  .custom-react-datepicker__select-wrapper span {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 18px;
    margin-left: 3px;
    font-weight: 500;
    font-size: 8px;
    color: white;
  }
  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 97px;
    margin-top: 25px !important;
  }
  .react-datepicker__week {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 14px;
    margin: 0.5px 0;
  }
  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 10% !important;
    font-size: 12px;
    line-height: 14px !important;
    color: #7a7a7a !important;
  }
  .react-datepicker__day--selected {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 19px;
    height: 14px;
    background-color: white !important;
    border-radius: 7px !important;
    line-height: 14px;
  }
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background-color: #ff6622 !important;
    border-radius: 7px !important;
    color: white !important;
  }
  .react-datepicker__day--keyboard-selected {
    color: white !important;
  }
  .react-datepicker__day--today {
    background-color: white;
    color: #2b2b2b;
  }
  .react-datepicker__day--range-start {
    background-color: #ff6622 !important;
    border-radius: 7px !important;
    color: white !important;
  }
  .custom-react-datepicker__split-span {
    display: flex;
    font-display: row;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    width: 11px;
    margin: 0 10px;
    color: #2b2b2b;
  }
`;
