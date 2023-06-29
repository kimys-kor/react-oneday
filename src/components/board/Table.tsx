import React, { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

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

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="p-2 border">
        Rerender
      </button>
    </div>
  );
};

export default Table;
