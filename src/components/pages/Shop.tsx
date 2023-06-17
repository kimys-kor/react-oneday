import styled from "styled-components";
import { useState } from "react";

import CustomSelect from "@/styles/CustomSelect";
import SearchInput from "@components/common/SearchInput";

import ShopDetail from "@components/details/ShopDetail";
import ShopBoard from "@components/board/ShopBoard";
import { useForm, Resolver } from "react-hook-form";

import { shopData, shopBoardTitle } from "@/data/common";
import { eaOptions } from "@/data/common";

import ShopForm from "@components/Form/ShopForm";

import BorderButton from "@/styles/BorderButton";
import {
  cityOptions,
  guOptions,
  dongOptions,
  shopOptions,
} from "@/data/common";
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
  const [tabIndex, setTabIndex] = useState<number>(0);
  const handleTab = (index: number) => {
    setTabIndex(index);
  };

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
  // ...클릭시 팝업,상점인덱스 설정
  const handleOpenIndex = (index: number) => {
    setActiveItem(openAnother);
    setOpenAnother(index);
  };

  // 상점 추가 팝업 상태
  const [isAddShopOpen, setAddShopOpen] = useState(false);
  const handleAddShop = () => {
    setAddShopOpen((prev) => !prev);
  };

  const [currentEa, setCurrentEa] = useState(eaOptions[0].value);
  const [currentCity, setCurrentCity] = useState(cityOptions[0].value);
  const [currentGu, setCurrentGu] = useState(guOptions[0].value);
  const [currentDong, setCurrentDong] = useState(dongOptions[0].value);
  const [currentShop, setCurrentShop] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [isAddAppOpen, setAddAppOpen] = useState(false);
  const handleAddForm = () => {
    setAddAppOpen((prev) => !prev);
  };

  return (
    <Shopbox>
      <Headerbox>
        <Title>상점 관리</Title>
        <Addbutton onClick={handleAddForm}>상점 추가</Addbutton>
      </Headerbox>

      <Content>
        <Layout>
          <Tabbox>
            <BorderButton
              width={152}
              titles={["지역선택", "검색하기"]}
              activeIndex={tabIndex}
              handleButtonClick={handleTab}
            ></BorderButton>
          </Tabbox>
          <Filterbox>
            {tabIndex == 0 ? (
              <Selectbox>
                <CustomSelect
                  width={200}
                  height={53}
                  title={"지역"}
                  optionData={cityOptions}
                  currentValue={currentCity}
                  setCurrentValue={setCurrentCity}
                ></CustomSelect>
                <CustomSelect
                  width={200}
                  height={53}
                  title={"구"}
                  optionData={guOptions}
                  currentValue={currentGu}
                  setCurrentValue={setCurrentGu}
                ></CustomSelect>
                <CustomSelect
                  width={200}
                  height={53}
                  title={"동"}
                  optionData={dongOptions}
                  currentValue={currentDong}
                  setCurrentValue={setCurrentDong}
                ></CustomSelect>

                <CustomSelect
                  width={200}
                  height={53}
                  title={"상점선택"}
                  optionData={shopOptions}
                  currentValue={currentShop}
                  setCurrentValue={setCurrentShop}
                ></CustomSelect>
              </Selectbox>
            ) : (
              <SearchInput></SearchInput>
            )}
          </Filterbox>
          <Betweenbox>
            <Title>{}</Title>
            <CustomSelect
              width={90}
              height={37}
              optionData={eaOptions}
              currentValue={currentEa}
              setCurrentValue={setCurrentEa}
            ></CustomSelect>
          </Betweenbox>

          <ShopBoard
            boardMenu={shopBoardTitle}
            boardData={shopData}
            handleDetailOpen={handleDetailOpen}
            openAnother={openAnother}
            handleOpenIndex={handleOpenIndex}
          ></ShopBoard>
        </Layout>
      </Content>
      <ShopDetail
        onClose={handleDetailClose}
        isDetailOpen={isDetailOpen}
        shop={shopData[activeItem]}
      />

      {/* 상점등록 모달 */}
      <ShopForm
        isAddAppOpen={isAddAppOpen}
        handleAddForm={handleAddForm}
      ></ShopForm>
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
  margin-top: 50px;
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

const Flex = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
`;

const Rightbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

const Filterbox = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Selectbox = styled.div`
  width: 100%;
  height: 53px;

  display: flex;
  gap: 36px;
  justify-content: flex-start;
  align-items: center;
`;

const Betweenbox = styled.div`
  margin-top: 30px;
  box-sizing: border-box;

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Tabbox = styled.div`
  height: 70px;
  display: flex;
  border-bottom: 1px solid #bbbbcf;
`;
