import styled from "styled-components";
import { useState } from "react";

import CustomSelect from "@/styles/CustomSelect";
import SearchInput from "@components/common/SearchInput";

import ProductDetail from "@components/details/ProductDetail";
import { useForm, Resolver } from "react-hook-form";
import { productData, productBoardTitle } from "@data/product/productData";
import { eaOptions } from "@data/selectbox/selectboxData";

import ProductForm from "@components/Form/ProductForm";

import BorderButton from "@/styles/BorderButton";
import {
  cityOptions,
  guOptions,
  dongOptions,
  shopOptions,
} from "@data/selectbox/selectboxData";
import "react-datepicker/dist/react-datepicker.css";
import ProductBoard from "@components/board/ProductBoard";

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

function Product() {
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

  return (
    <Shopbox>
      <Headerbox>
        <Title>상품 관리</Title>
        {/* <Addbutton onClick={handleAddShop}>상점 추가</Addbutton> */}
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
                  width={220}
                  height={53}
                  title={"상점선택"}
                  optionData={shopOptions}
                  currentValue={currentShop}
                  setCurrentValue={setCurrentShop}
                ></CustomSelect>
              </Selectbox>
            ) : (
              <SearchInput width={"400px"} height={"53px"}></SearchInput>
            )}
          </Filterbox>

          {currentShop && (
            <>
              <Betweenbox>
                <Addbutton onClick={handleAddShop}>상품 추가</Addbutton>

                <CustomSelect
                  width={90}
                  height={37}
                  optionData={eaOptions}
                  currentValue={currentEa}
                  setCurrentValue={setCurrentEa}
                ></CustomSelect>
              </Betweenbox>

              <ProductBoard
                boardMenu={productBoardTitle}
                boardData={productData}
                handleDetailOpen={handleDetailOpen}
                openAnother={openAnother}
                handleOpenIndex={handleOpenIndex}
              ></ProductBoard>
            </>
          )}
        </Layout>
      </Content>
      <ProductDetail
        onClose={handleDetailClose}
        isDetailOpen={isDetailOpen}
        product={productData[activeItem]}
      />

      {/* 상품등록 모달 */}

      {/* 상점등록 모달 */}
      <ProductForm
        isAddAppOpen={isAddShopOpen}
        handleAddForm={handleAddShop}
      ></ProductForm>
    </Shopbox>
  );
}

export default Product;

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
  margin-bottom: 10px;
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
