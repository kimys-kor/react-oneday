import React from "react";
import { useNavigate } from "react-router-dom";

import QuestionTable from "../board/QuestionTable";
import { AiOutlineArrowLeft } from "react-icons/Ai";
import avatar1 from "@images/avatar1.png";

function QuestionDetail() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col w-full h-full p-4 gap-8 bg-[#fff]">
      <button
        className="w-8 p-2 text-xs text-center border border-normal hover:border-active hover:text-active "
        onClick={() => {
          navigate(-1);
        }}
      >
        <AiOutlineArrowLeft size={14}></AiOutlineArrowLeft>
      </button>

      <section className="flex flex-col gap-3 p-8 border border-slate-300">
        <article className="flex flex-col gap-3 border-b ">
          <p className="text-sm text-green-400">카테고리</p>
          <h1 className="text-lg font-semibold ">제목 1</h1>
          <div className="flex w-full gap-5 pb-3">
            <p className="text-sm ">글쓴이1</p>
            <p className="text-sm text-gray-400">2023-04-28</p>
          </div>
        </article>

        <article className="px-2 py-10">hhh</article>

        <article className="flex flex-col w-full gap-3 py-3 border-t">
          <div className="flex">
            <p className="text-[1rem] font-semibold"> 답변</p>
          </div>

          <div className="py-2 border-b">
            <div className="flex gap-3">
              <img src={avatar1} className="w-8" />
              <div>
                <p>
                  안녕하세요 운영진 입니다. 해당건 신속히 처리해 드리겠습니다.
                </p>
                <div className="flex gap-3">
                  <p className="text-sm ">운영자</p>
                  <p className="text-sm text-gray-400">2023-04-30</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-2 border-b">
            <div className="flex gap-3">
              <img src={avatar1} className="w-8" />
              <div>
                <p>
                  안녕하세요 운영진 입니다. 해당건 신속히 처리해 드리겠습니다.
                </p>
                <div className="flex gap-3">
                  <p className="text-sm ">운영자</p>
                  <p className="text-sm text-gray-400">2023-04-30</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <QuestionTable></QuestionTable>
    </main>
  );
}

export default QuestionDetail;
