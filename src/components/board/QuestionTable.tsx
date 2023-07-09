import React, { useState } from "react";

import Paging from "../common/Paging";
import { Link } from "react-router-dom";

import { boardData } from "@/data/common";

const QuestionTable = () => {
  const setPage = function () {
    console.log("온체인지");
  };

  return (
    <div className="flex flex-col w-full gap-10 p-2">
      <table className="w-full ">
        <thead>
          <tr className="w-full h-10 text-lg text-left border-t border-slate-950">
            <th className="p-2 text-center">NO</th>
            <th className="p-2">제목</th>
            <th className="p-2 text-center">글쓴이</th>
            <th className="p-2 text-center">작성시간</th>
          </tr>
        </thead>
        <tbody>
          {boardData.map((data, index) => {
            return (
              <tr
                key={data.id}
                className="h-2 text-left border-t border-b border-slate-300 hover:bg-[#F3F3F3]"
              >
                <td className="p-2 text-[1rem] text-center">{data.id}</td>

                <td className="p-2 text-[1rem]  w-[60%] ">
                  <div className="flex justify-between w-full">
                    <Link
                      to={`/oneday/question/${data.id}`}
                      className="cursor-pointer"
                    >
                      {data.title}
                    </Link>
                    <div className="w-[80px] px-1 border text-sm text-purple-500 text-center flex items-center justify-center">
                      답변대기
                    </div>
                  </div>
                </td>
                <td className="p-2 text-[1rem] text-center">{data.writer}</td>
                <td className="p-2 text-[1rem] text-center">
                  {data.createdDt}
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

export default QuestionTable;
