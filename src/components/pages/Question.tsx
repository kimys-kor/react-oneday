import React from "react";
import QuestionTable from "../board/QuestionTable";

import { board, boardData } from "@/data/common";

function Question() {
  return (
    <main className="flex flex-col items-center w-full h-full gap-3 rounded-2xl">
      <h1 className="box-border flex w-full gap-6 px-6 py-4 bg-white text-[1.6rem]">
        상점 문의
      </h1>

      <section className="box-border flex flex-col items-start w-full gap-5 p-6 bg-white h-85vh">
        <QuestionTable></QuestionTable>
      </section>
    </main>
  );
}

export default Question;
