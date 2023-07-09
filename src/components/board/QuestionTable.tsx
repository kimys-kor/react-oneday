import React, { useState } from "react";

import Paging from "../common/Paging";
import { Link } from "react-router-dom";

import { boardData } from "@/data/common";

const QuestionTable = () => {
  const title = ["No", "제목", "글쓴이", "작성시간"];

  const setPage = function () {
    console.log("온체인지");
  };

  return (
    <div className="flex flex-col w-full gap-10 p-2">
      <table className="w-full ">
        <thead>
          <tr className="w-full h-10 text-lg text-left border-t border-slate-950">
            {title.map((title, index) => (
              <th key={index} className="p-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {boardData.map((data, index) => {
            return (
              <tr
                key={data.id}
                className="h-2 text-left border-t border-b border-slate-300 hover:bg-[#F3F3F3]"
              >
                <td className="p-2 text-lg ">{data.id}</td>

                <td className="p-2 text-lg  w-[60%]">
                  <Link
                    to={`/oneday/question/${data.id}`}
                    className="cursor-pointer"
                  >
                    {data.title}
                  </Link>
                </td>
                <td className="p-2 text-lg">{data.writer}</td>
                <td className="p-2 text-lg">{data.createdDt}</td>
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
