import styled from "styled-components";
import { useState } from "react";

import CustomSelect from "@/styles/CustomSelect";
import SearchInput from "@components/common/SearchInput";

import ShopDetail from "@components/details/ShopDetail";
import ShopBoard from "@components/board/ShopBoard";
import { useForm, Resolver } from "react-hook-form";

import { shopData, shopBoardTitle } from "@/data/common";

import ShopForm from "@components/Form/ShopForm";

import BorderButtonLX from "@/styles/BorderButtonLX";
import {
  eaOptions,
  cityOptions,
  guOptions,
  dongOptions,
  shopOptions,
} from "@/data/common";
import "react-datepicker/dist/react-datepicker.css";
import { BiSearch } from "react-icons/bi";

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
  const [tab, setTab] = useState<number>(1);

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

  const [currentEa, setCurrentEa] = useState(eaOptions[0]);
  const [currentCity, setCurrentCity] = useState(cityOptions[0]);
  const [currentGu, setCurrentGu] = useState(guOptions[0]);
  const [currentDong, setCurrentDong] = useState(dongOptions[0]);
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
    <main className="flex flex-col items-center w-full h-full gap-3 rounded-2xl">
      <h1 className="box-border flex justify-between w-full gap-6 px-6 py-4 bg-white text-[1.6rem]">
        상점 관리
        <button
          onClick={handleAddForm}
          className="w-[5rem] bg-active text-[#fff] text-[0.84rem]
                    shadow-md
                    hover:bg-orange-600
                    "
          type="submit"
          value="point"
        >
          상점 추가
        </button>
      </h1>

      <section className="box-border flex flex-col items-start w-full gap-5 p-6 bg-white h-85vh">
        <div className="mt-4 min-w-fit">
          <button
            onClick={() => setTab(1)}
            className={`w-24 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] ${
              tab === 1
                ? "border-active text-active"
                : "hover:border-active hover:text-active"
            }`}
          >
            상점목록
          </button>
          <button
            onClick={() => setTab(2)}
            className={`w-32 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] ${
              tab === 2
                ? "border-active text-active"
                : "hover:border-active hover:text-active"
            }`}
          >
            상점별 주문 순위
          </button>
          <button
            onClick={() => setTab(3)}
            className={`w-32 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] ${
              tab === 3
                ? "border-active text-active"
                : "hover:border-active hover:text-active"
            }`}
          >
            상점1:1문의
          </button>
        </div>

        {tab === 1 && (
          <article className="flex flex-col gap-3">
            <Filterbox>
              <Selectbox>
                <CustomSelect
                  options={cityOptions}
                  setCurrent={setCurrentCity}
                ></CustomSelect>

                <CustomSelect
                  options={guOptions}
                  setCurrent={setCurrentGu}
                ></CustomSelect>

                <CustomSelect
                  options={dongOptions}
                  setCurrent={setCurrentDong}
                ></CustomSelect>

                <CustomSelect
                  options={shopOptions}
                  setCurrent={setCurrentShop}
                ></CustomSelect>
              </Selectbox>
            </Filterbox>

            <div className="flex justify-between w-full">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <BiSearch
                    size={19}
                    className="cursor-pointer fill-slate-300 hover:fill-active"
                    viewBox="0 0 20 20"
                  ></BiSearch>
                </span>
                <input
                  className="block w-full py-2 pr-3 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-active focus:ring-active focus:ring-1 sm:text-sm"
                  placeholder="검색어 입력"
                  type="text"
                  name="search"
                />
              </label>
              <CustomSelect
                options={eaOptions}
                setCurrent={setCurrentEa}
              ></CustomSelect>
            </div>

            <ShopBoard
              boardMenu={shopBoardTitle}
              boardData={shopData}
              handleDetailOpen={handleDetailOpen}
              openAnother={openAnother}
              handleOpenIndex={handleOpenIndex}
            ></ShopBoard>
          </article>
        )}

        {tab === 2 && <div>준비중입니다</div>}
        {tab === 3 && <div>준비중입니다</div>}
      </section>

      {/* 상점등록 모달 */}
      <ShopForm
        isAddAppOpen={isAddAppOpen}
        handleAddForm={handleAddForm}
      ></ShopForm>
    </main>
  );
}

export default Shop;

const Title = styled.div`
  margin-left: 20px;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
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
