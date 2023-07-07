import { useState } from "react";

import CustomSelect from "@/styles/CustomSelect";
import CustomDatePicker from "../common/DatePicker";
import { BiSearch } from "react-icons/bi";

import { eaOptions, rider, riderData } from "@/data/common";

import { createColumnHelper } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import RiderTable from "../board/RiderTable";

import useRiderModal from "../hooks/useRiderModal";
import RiderModal from "@/components/modal/RiderModal";

const columnHelper = createColumnHelper<rider>();

const columns: ColumnDef<rider>[] = [
  columnHelper.accessor("id", { header: "아이디" }),
  columnHelper.accessor("status", { header: "상태" }),
  columnHelper.accessor("phone", { header: "핸드폰" }),
  columnHelper.accessor("email", { header: "이메일" }),
  columnHelper.accessor("name", { header: "라이더명" }),
  columnHelper.accessor("lastorderDt", { header: "최근배달수행일" }),
  columnHelper.accessor("orderCount", { header: "총배달수행건수" }),
  columnHelper.accessor("orderAmount", { header: "총배달수행금액" }),
  columnHelper.accessor("point", { header: "포인트" }),
] as ColumnDef<rider>[];

function Rider() {
  // 헤더 날짜 필터
  const today = new Date();
  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(today);
  const [active, setActive] = useState<number>(1);

  const [currentEa, setCurrentEa] = useState(eaOptions[0]);

  const riderModal = useRiderModal();

  return (
    <main className="flex flex-col items-center w-full h-full gap-3 rounded-2xl">
      <h1 className="box-border flex justify-between w-full gap-6 px-6 py-4 bg-white text-[1.6rem]">
        기사 관리
        <button
          onClick={riderModal.onOpen}
          className="w-[5rem] bg-active text-[#fff] text-[0.84rem]
                    shadow-md
                    hover:bg-orange-600
                    "
          type="submit"
          value="point"
        >
          기사 추가
        </button>
      </h1>

      <section className="box-border flex flex-col items-start w-full gap-5 p-6 bg-white h-85vh">
        <div className="flex w-full gap-3">
          <button
            onClick={() => setActive(1)}
            className={`w-[5rem]  text-[0.84rem] truncate shadow-[0px_1px_3px_0px_#dadce0] ${
              active === 1
                ? "border border-active text-active"
                : "border border-[#e5e7eb] hover:border-active hover:text-active"
            }`}
          >
            전체기간
          </button>

          <div onClick={() => setActive(2)} className={`flex w-[14rem]`}>
            <CustomDatePicker
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              active={active}
            />
          </div>

          <div className="flex">
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
          </div>
        </div>

        <div className="flex justify-end w-full">
          <CustomSelect
            options={eaOptions}
            setCurrent={setCurrentEa}
          ></CustomSelect>
        </div>

        <RiderTable data={riderData} columns={columns}></RiderTable>
      </section>

      <RiderModal />
    </main>
  );
}

export default Rider;
