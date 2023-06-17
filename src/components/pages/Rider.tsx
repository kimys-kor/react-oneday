import styled from "styled-components";
import { useState } from "react";

import CustomSelect from "@/styles/CustomSelect";
import SearchInput from "@components/common/SearchInput";

import RiderDetail from "@components/details/RiderDetail";
import RiderBoard from "@components/board/RiderBoard";
import { eaOptions } from "@/data/common";
import RiderForm from "@components/Form/RiderForm";

import { dateFilter, itemFilter } from "@/data/common";
import { riderBoardTitle, riderData } from "@/data/common";
import BorderButton from "@/styles/BorderButton";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

function Rider() {
  // 헤더 날짜필터
  const [dateIndex, setDateIndex] = useState<number | null>(0);
  const setDate = (index: number) => {
    setDateIndex(index === dateIndex ? null : index);
  };
  // 헤더 상태필터
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

  const [isAddAppOpen, setAddAppOpen] = useState(false);
  const handleAddForm = () => {
    setAddAppOpen((prev) => !prev);
  };

  return (
    <Memberbox>
      <Headerbox>
        <Title>기사 관리</Title>
        <Addbutton onClick={handleAddForm}>기사 둥록</Addbutton>
      </Headerbox>

      <Content>
        <Layout>
          <FilterContent>
            {/* <BorderButton
              width={76}
              title={"전체"}
              activeIndex={dateIndex}
              handleButtonClick={setDate}
            ></BorderButton> */}

            <Flexbox>
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
                    <DateInput />
                  }
                />
              </Datebox>
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
                    <DateInput />
                  }
                />
              </Datebox>
            </Flexbox>

            <Buttonbox>
              {/* <BorderButton
                width={80}
                titles={itemFilter}
                activeIndex={filterIndex}
                handleButtonClick={handleFilter}
              ></BorderButton> */}
            </Buttonbox>
            <SearchInput></SearchInput>

            <CustomSelect
              width={13}
              height={2.5}
              optionData={eaOptions}
              currentValue={currentEa}
              setCurrentValue={setCurrentEa}
            ></CustomSelect>
          </FilterContent>

          <RiderBoard
            boardMenu={riderBoardTitle}
            boardData={riderData}
            handleDetailOpen={handleDetailOpen}
            openAnother={openAnother}
            handleOpenIndex={handleOpenIndex}
          ></RiderBoard>
        </Layout>
      </Content>
      <RiderDetail
        onClose={handleDetailClose}
        isDetailOpen={isDetailOpen}
        rider={riderData[activeItem]}
      />

      <RiderForm
        isAddAppOpen={isAddAppOpen}
        handleAddForm={handleAddForm}
      ></RiderForm>
    </Memberbox>
  );
}

export default Rider;

const Memberbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
`;

const Headerbox = styled.div`
  box-sizing: border-box;
  padding-right: 50px;
  width: 100%;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.div`
  margin-left: 20px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
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
  box-sizing: border-box;
  margin-top: 54px;
  width: 95%;
`;

const FilterContent = styled.div`
  width: 100%;
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

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Datebox = styled.div`
  margin-left: 12px;
`;

const DateInput = styled.input`
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

const Buttonbox = styled.div`
  margin-left: 24px;
  display: flex;
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
