import DatePicker from "react-datepicker";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { getMonth, getYear } from "date-fns";

import styled from "styled-components";

interface IProps {
  startDate: string;
  setStartDate: Dispatch<SetStateAction<string>>;
  endDate: string;
  setEndDate: Dispatch<SetStateAction<string>>;
}

const CustomDatePicker = (props: IProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

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

  return (
    <Wrapper>
      <div className="custom-react-datepicker__wrapper">
        <span className="custom-react-datepicker__label-span">일자</span>
        {/* 시작 날짜를 지정하는 데이트 피커 */}
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="custom-react-datepicker__select-wrapper">
              {/* 이전 월로 이동하는 버튼 */}
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <img src="/datePicker/decreaseMonth.png" />
              </button>
              <div className="custom-react-datepicker__select-item">
                {/* 연도 선택 select box */}
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) =>
                    changeYear(Number(value))
                  }
                ></select>
                <span>년</span>
              </div>
              <div className="custom-react-datepicker__select-item">
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
                <img src="/datePicker/increaseMonth.png" />
              </button>
            </div>
          )}
          locale={ko} // (월~일 부분) 한국어로 변환
          dateFormat="yyyy.MM.dd" // 선택된 날짜를 input box에 나타내는 형식
          selected={new Date(props.startDate)}
          onChange={(date) => setStartDate(date)} // 선택한 날짜를 state에 저장
          selectsStart
          startDate={new Date(props.startDate)}
          endDate={new Date(props.endDate)}
        />
        <span className="custom-react-datepicker__split-span">~</span>
        {/* 종료 날짜를 지정하는 데이트 피커 */}
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="custom-react-datepicker__select-wrapper">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <img src="/datePicker/decreaseMonth.png" />
              </button>
              <div className="custom-react-datepicker__select-item">
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) =>
                    changeYear(Number(value))
                  }
                ></select>
                <span>년</span>
              </div>
              <div className="custom-react-datepicker__select-item">
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
                <img src="/datePicker/increaseMonth.png" />
              </button>
            </div>
          )}
          locale={ko}
          dateFormat="yyyy.MM.dd"
          selected={new Date(props.endDate)}
          onChange={(date) => setStartDate(date)}
          selectsEnd
          startDate={new Date(props.startDate)}
          endDate={new Date(props.endDate)}
          minDate={new Date(props.startDate)}
        />
      </div>
    </Wrapper>
  );
};

export default CustomDatePicker;

const Wrapper = styled.div`
  .custom-react-datepicker__wrapper {
    display: flex;
    font-display: row;
    justify-content: space-between;
    align-items: center;
    width: 272px;
  }
  .custom-react-datepicker__label-span {
    font-size: 15px;
    width: 100%;
    color: #2b2b2b;
  }
  .react-datepicker__input-container input {
    width: 82px;
    height: 19px;
    padding: 5px 10px;
    background: #f5f5f5;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    color: #2b2b2b;
  }
  .react-datepicker-ignore-onclickoutside {
    border: 1px solid #6400ff !important;
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
    width: 102px;
  }
  .react-datepicker__header {
    height: 36px !important;
    padding: 0 !important;
    background-color: #6400ff !important;
    border: none !important;
    position: relative;
    text-align: center;
  }
  .custom-react-datepicker__select-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 198px;
    height: 36px;
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
    width: 20px !important;
    font-size: 8px;
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
    background-color: #6400ff !important;
    border-radius: 7px !important;
    color: white !important;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: white !important;
    color: #2b2b2b !important;
  }
  .react-datepicker__day--today {
    background-color: white;
    color: #2b2b2b;
  }
  .react-datepicker__day--range-start {
    background-color: #6400ff !important;
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
