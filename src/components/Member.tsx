import styled from "styled-components";
import { useState } from "react";

import CustomSelect from "@/styles/selectbox/CustomSelect";
import SearchInput from "@components/common/SearchInput";

import MemberDetail from "@components/MemberDetail";
import MemberBoard from "@/components/common/board/MemberBoard";

import {
  corpOptions,
  appOptions,
  eaOptions,
  dateFilter,
  memberFilter,
  memberBoardTitle,
  memberBoardData,
} from "@data/member/memberData";
import BorderButton from "@/styles/button/BorderButton";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

function Member() {
  const [dateIndex, setDateIndex] = useState<number | null>(0);
  const setDate = (index: number) => {
    setDateIndex(index === dateIndex ? null : index);
  };

  const [memberFilterIndex, setMemberFilterIndex] = useState<number | null>(0);
  const handleMemberFilter = (index: number) => {
    setMemberFilterIndex(index === memberFilterIndex ? null : index);
  };

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    console.log("헬로");
    setModalOpen(false);
  };

  return (
    <Memberbox>
      <Headerbox>
        <Layout>
          <HeaderContent>
            <BorderButton
              width={76}
              titles={dateFilter}
              activeIndex={dateIndex}
              handleButtonClick={setDate}
            ></BorderButton>

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
              <BorderButton
                width={80}
                titles={memberFilter}
                activeIndex={memberFilterIndex}
                handleButtonClick={handleMemberFilter}
              ></BorderButton>
            </Buttonbox>
            <SearchInput></SearchInput>

            <CustomSelect
              width={90}
              height={37}
              optionData={eaOptions}
            ></CustomSelect>
          </HeaderContent>
        </Layout>
      </Headerbox>

      <Content>
        <Title>회원 관리</Title>
        <Layout>
          <MemberBoard
            boardMenu={memberBoardTitle}
            boardData={memberBoardData}
            handleModalOpen={handleModalOpen}
          ></MemberBoard>
        </Layout>
      </Content>
      <MemberDetail onClose={handleModalClose} isModalOpen={isModalOpen} />
    </Memberbox>
  );
}

export default Member;

const Memberbox = styled.div`
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
  align-items: center;
  background-color: #fff;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 25px;
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

const HeaderContent = styled.div`
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
