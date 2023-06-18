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
    <div className="flex flex-col w-full h-full p-16 gap-12 bg-[#fff]">
      <div>
        <button
          className="p-2 border border-teal-300 w-8 text-center text-xs text-[#bbbbcf] hover:border-rose-500"
          onClick={() => {
            navigate(-1);
          }}
        >
          &lt;
        </button>
      </div>

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
    </div>
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
