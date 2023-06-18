import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import BorderButton from "@styles/BorderButton";
import CustomSelect from "@styles/CustomSelect";
import { useForm, Resolver } from "react-hook-form";
import { eaOptions } from "@/data/common";

import { member } from "@/data/common";
import MemberPointBoard from "@components/board/MemberPointBoard";
import { memberPointBoardTitle, memberPointBoardData } from "@/data/common";

type FormData = {
  savingPoint: number;
};

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values.savingPoint ? values : {},
    errors: !values.savingPoint
      ? {
          savingPoint: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

function MemberDetail() {
  const [member, setMember] = useState<member>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const [activeButton1, setActiveButton1] = useState<number>(1);
  const handleButtonClick1 = (id: number) => {
    setActiveButton1(id);
  };

  const navigate = useNavigate();

  return (
    <main className="flex flex-col w-full h-full p-4 gap-12 bg-[#fff]">
      <button
        className="p-2 border border-normal w-8 text-center text-xs 
           hover:border-active
           hover:text-active
           "
        onClick={() => {
          navigate(-1);
        }}
      >
        &lt;
      </button>

      <h5 className="w-full p-2  text-black bg-amber-50 whitespace-nowrap overflow-hidden text-ellipsis">
        회원 정보를 수정할 수 있습니다.
      </h5>

      <section className="w-full flex flex-col gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
        <div className="w-full flex">
          <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white">
            이름
          </p>
          <div className="w-2/6 pl-1 flex items-center border-b-2">
            <input
              className="w-16 h-4/5 border shadow-[0px_1px_1px_0px_#dadce0_inset]"
              defaultValue={"안녕"}
            ></input>
          </div>

          <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white">
            회원등급
          </p>
          <p className="w-2/6 min-w-fit pl-1  px-2 border-b-2">vip</p>
        </div>

        <div className="w-full flex">
          <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white">
            이름
          </p>
          <div className="w-2/6 pl-1 flex items-center border-b-2">
            <input
              className="w-16 h-4/5 border shadow-[0px_1px_1px_0px_#dadce0_inset]"
              defaultValue={"안녕"}
            ></input>
          </div>

          <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white">
            회원등급
          </p>
          <p className="w-2/6 min-w-fit pl-1  px-2 border-b-2">vip</p>
        </div>

        <div className="w-full flex">
          <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white">
            이름
          </p>
          <div className="w-2/6 pl-1 flex items-center border-b-2">
            <input
              className="w-16 h-4/5 border shadow-[0px_1px_1px_0px_#dadce0_inset]"
              defaultValue={"안녕"}
            ></input>
          </div>

          <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white">
            회원등급
          </p>
          <p className="w-2/6 min-w-fit pl-1  px-2 border-b-2">vip</p>
        </div>
      </section>

      <form onSubmit={onSubmit} className="flex">
        <input
          className="w-52 border"
          placeholder="적립 금액을 입력해 주세요..."
          type="number"
          {...register("savingPoint")}
        ></input>
        <button
          className="w-24 p-1 bg-active text-[#fff]"
          type="submit"
          value="적립"
        >
          적립
        </button>
      </form>
    </main>
  );
}

export default MemberDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  gap: 0.75rem;

  background-color: #fff;
  min-height: 80rem;
`;
