import styled from "styled-components";
import { useState } from "react";

import CustomSelect from "@/styles/CustomSelect";

import useShopModal from "@/components/hooks/useShopModal";
import ShopModal from "@/components/modal/ShopModal";

import {
  eaOptions,
  cityOptions,
  guOptions,
  dongOptions,
  shopOptions,
  shop,
  shopData,
} from "@/data/common";

import { BiSearch } from "react-icons/bi";

import { createColumnHelper } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import ShopTable from "../board/ShopTable";

const columnHelper = createColumnHelper<shop>();

const columns: ColumnDef<shop>[] = [
  columnHelper.accessor("id", { header: "아이디" }),
  columnHelper.accessor("shopName", { header: "가게명" }),
  columnHelper.accessor("owner", { header: "점주명" }),
  columnHelper.accessor("phone", { header: "핸드폰" }),
  columnHelper.accessor("createdDt", { header: "가게등록일" }),
  columnHelper.accessor("productNumber", { header: "상품수" }),
  columnHelper.accessor("orderCount", { header: "주문횟수" }),
  columnHelper.accessor("businessNumber", { header: "사업자번호" }),
] as ColumnDef<shop>[];

function Shop() {
  const [tab, setTab] = useState<number>(1);

  // 상점 추가 팝업 상태
  const [currentEa, setCurrentEa] = useState(eaOptions[0]);
  const [currentCity, setCurrentCity] = useState(cityOptions[0]);
  const [currentGu, setCurrentGu] = useState(guOptions[0]);
  const [currentDong, setCurrentDong] = useState(dongOptions[0]);
  const [currentShop, setCurrentShop] = useState("");

  // 상점 추가 모달
  const shopModal = useShopModal();

  return (
    <main className="flex flex-col items-center w-full h-full gap-3 rounded-2xl">
      <h1 className="box-border flex justify-between w-full gap-6 px-6 py-4 bg-white text-[1.6rem]">
        상점 관리
        <button
          onClick={shopModal.onOpen}
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
        </div>

        {tab === 1 && (
          <article className="flex flex-col w-full gap-3">
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

            <ShopTable data={shopData} columns={columns}></ShopTable>
          </article>
        )}

        {tab === 2 && <div>준비중입니다</div>}
      </section>

      {/* 상점등록 모달 */}
      <ShopModal />
    </main>
  );
}

export default Shop;

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
