import styled from "styled-components";
import { useState } from "react";

import CustomSelect from "@/styles/selectbox/CustomSelect";
import SearchInput from "@components/common/SearchInput";

import ShopDetail from "@components/ShopDetail";
import ShopBoard from "@/components/common/board/ShopBoard";
import { useForm, Resolver } from "react-hook-form";

import {
  eaOptions,
  dateFilter,
  memberFilter,
  memberBoardTitle,
  memberData,
} from "@data/member/memberData";
import BorderButton from "@/styles/button/BorderButton";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

type FormData = {
  shopName: string;
  businessNumber: number;
  ownerName: string;
  shopAddress: string;
  shopContact: number;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.shopName ? values : {},
    errors: !values.shopName
      ? {
          shopName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

function Shop() {
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

  const [isAddShopOpen, setAddShopOpen] = useState(false);
  const handleAddShop = () => {
    setAddShopOpen((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Shopbox>
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
        <Layout>
          <Title>상점 관리</Title>
          <Rightbox>
            <Addbutton onClick={handleAddShop}>상점 추가</Addbutton>
          </Rightbox>

          <ShopBoard
            boardMenu={memberBoardTitle}
            boardData={memberData}
            handleModalOpen={handleModalOpen}
          ></ShopBoard>
        </Layout>
      </Content>
      <ShopDetail onClose={handleModalClose} isModalOpen={isModalOpen} />

      {/* 상점등록 모달 */}
      <Wrapper
        onClick={handleModalClose}
        style={{ display: isAddShopOpen ? "flex" : "none" }}
      >
        <Modal onClick={(e) => e.stopPropagation()}>
          <Formbox>
            <div>
              <Title>상점등록</Title>
            </div>

            <Form onSubmit={onSubmit}>
              <div>
                <Inputbox>
                  <label>
                    상점명<Star>*</Star>
                  </label>{" "}
                  <Input type="text" {...register("shopName")}></Input>
                </Inputbox>

                <Inputbox>
                  <label>
                    사업자번호<Star>*</Star>
                  </label>{" "}
                  <Input type="number" {...register("businessNumber")}></Input>
                </Inputbox>

                <Inputbox>
                  <label>
                    대표자명<Star>*</Star>
                  </label>
                  <Input type="text" {...register("ownerName")}></Input>
                </Inputbox>

                <Inputbox>
                  <label>
                    주소<Star>*</Star>
                  </label>
                  <Input type="text" {...register("shopAddress")}></Input>
                </Inputbox>

                <Inputbox>
                  <label>
                    연락처<Star>*</Star>
                  </label>
                  <Input type="number" {...register("shopContact")}></Input>
                </Inputbox>
              </div>

              <Flex>
                <Canclebutton onClick={handleAddShop}>취소</Canclebutton>
                <Submitbutton type="submit" value="저장" />
              </Flex>
            </Form>
          </Formbox>
        </Modal>
      </Wrapper>
    </Shopbox>
  );
}

export default Shop;

const Shopbox = styled.div`
  box-sizing: border-box;
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

const Title = styled.div`
  margin-top: 10px;
  font-size: 25px;
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  width: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease; /* add transition property */
`;

const Form = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Formbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Inputbox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  label {
    width: 20%;
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #304ffd;
  width: 70%;
`;

const Canclebutton = styled.div`
  margin-top: 50px;
  border: none;
  width: 100px;
  height: 50px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #304ffd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1536f5;
  }
`;
const Submitbutton = styled.input`
  margin-top: 50px;
  border: none;
  width: 100px;
  height: 50px;
  color: #304ffd;
  font-size: 14px;
  letter-spacing: 0.2rem;
  border: 1px solid #304ffd;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #1536f5;
    color: #fff;
  }
`;

const Star = styled.p`
  display: inline;
  margin-left: 3px;
  color: red;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const Rightbox = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Addbutton = styled.span`
  line-height: 37px;
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  width: 100px;
  height: 37px;

  border: 1px solid #bbbbcf;
  background-color: #ffffff;
  cursor: pointer;
  margin-right: 0; // remove the margin on the last button
  border-color: #ff6622; // set border color to #ff6622 for active button
  color: #ff6622;
`;
