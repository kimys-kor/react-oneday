import styled from "styled-components";
import { useState, useEffect } from "react";
import { css } from "styled-components";

import CustomSelect from "@/styles/CustomSelect";

import Loading from "@components/common/Loading";
import MemberBoard from "@components/board/MemberBoard";
import { corpOptions, appOptions, eaOptions } from "@/data/common";

import { itemFilter } from "@/data/common";
import { memberBoardTitle, memberData } from "@/data/common";
import BorderButton from "@/styles/BorderButton";

import CustomDatePicker from "../common/DatePicker";

import { BiSearch } from "react-icons/bi";

import { createColumnHelper } from "@tanstack/react-table";
import { ColumnDef } from "@tanstack/react-table";
import Table from "../board/Table";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];
const columnHelper = createColumnHelper<Person>();

const columns: ColumnDef<Person>[] = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
  }),
] as ColumnDef<Person>[];

function Member() {
  const [dateFilterIndex, setDateFilterIndex] = useState<number>(0);
  // 헤더 날짜필터
  const [dateIndex, setDateIndex] = useState<number | null>(0);
  const setDate = (index: number) => {
    setDateIndex(index === dateIndex ? null : index);
  };
  // 멤버 상태필터
  const [filterIndex, setFilterIndex] = useState<number | null>(0);
  const handleFilter = (index: number) => {
    setFilterIndex(index === filterIndex ? null : index);
  };
  // 헤더 날짜 필터
  const today = new Date();
  const [startDate, setStartDate] = useState<Date>(today);
  const [endDate, setEndDate] = useState<Date>(today);
  const [active, setActive] = useState<number>(1);

  // 멤버상세창 넘길 멤버
  const [activeItem, setActiveItem] = useState(0);
  // ...클릭시 설정팝업
  const [openAnother, setOpenAnother] = useState(-1);
  // ...클릭시 팝업,멤버인덱스 설정
  const handleOpenIndex = (index: number) => {
    setActiveItem(openAnother);
    setOpenAnother(index);
  };

  const [currentEa, setCurrentEa] = useState(eaOptions[0]);

  return (
    <main className="flex flex-col items-center w-full h-full gap-3 rounded-2xl">
      <h1 className="box-border flex w-full gap-6 px-6 py-4 bg-white text-[1.6rem]">
        회원 관리
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

        <Table data={defaultData} columns={columns}></Table>
        {/* <MemberBoard
          boardMenu={memberBoardTitle}
          boardData={memberData}
          openAnother={openAnother}
          handleOpenIndex={handleOpenIndex}
        ></MemberBoard> */}
      </section>
    </main>
  );
}

export default Member;
