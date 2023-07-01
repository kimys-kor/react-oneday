import React, { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Paging from "../common/Paging";
import { Link } from "react-router-dom";
import { member } from "@/data/common";

type ReactTableProps<T extends Object> = {
  data: T[];
  columns: ColumnDef<T>[];
};

const Table = <T extends object>({ data, columns }: ReactTableProps<T>) => {
  const rerender = React.useReducer(() => ({}), {})[1];

  // useReactTable로 테이블 구조 정의
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const setPage = function () {
    console.log("온체인지");
  };

  return (
    <div className="p-2 w-full flex flex-col gap-10">
      <table className="w-full ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 font-bold bg-[#e5eef8] text-center"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
              <th className="p-2 font-bold bg-[#e5eef8] text-center">더보기</th>
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => {
            const rowData = row.original as member; // Cast row.original to the appropriate type
            return (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "bg-white" : "bg-[#EFF3FB]"}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td>
                  <Link to={`/oneday/member/${rowData.id}`}>
                    <button>상세정보</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Paging page={1} count={15} setPage={setPage}></Paging>
    </div>
  );
};

export default Table;
