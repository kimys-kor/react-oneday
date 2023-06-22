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
import { AiOutlineArrowLeft } from "react-icons/Ai";

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

  const [tab, setTab] = useState<number>(1);
  const handleTab = (tab: number) => {
    setTab(tab);
  };

  return (
    <main className="flex flex-col w-full h-full p-4 gap-4 bg-[#fff]">
      <button
        className="w-8 p-2 text-xs text-center border border-normal hover:border-active hover:text-active "
        onClick={() => {
          navigate(-1);
        }}
      >
        <AiOutlineArrowLeft size={14}></AiOutlineArrowLeft>
      </button>

      <h5 className="w-full p-2 overflow-hidden text-black bg-amber-50 ">
        회원 정보를 수정할 수 있습니다.
      </h5>

      <div className="mt-4 min-w-fit">
        <button
          onClick={() => setTab(1)}
          className={`w-24 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] ${
            tab === 1
              ? "border-active text-active"
              : "hover:border-active hover:text-active"
          }`}
        >
          회원정보
        </button>
        <button
          onClick={() => setTab(2)}
          className={`w-28 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] ${
            tab === 2
              ? "border-active text-active"
              : "hover:border-active hover:text-active"
          }`}
        >
          통합주문내역
        </button>
        <button
          onClick={() => setTab(3)}
          className={`w-24 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] ${
            tab === 3
              ? "border-active text-active"
              : "hover:border-active hover:text-active"
          }`}
        >
          적립금내역
        </button>
        <button
          onClick={() => setTab(4)}
          className={`w-24 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] ${
            tab === 4
              ? "border-active text-active"
              : "hover:border-active hover:text-active"
          }`}
        >
          예치금내역
        </button>
        <button
          onClick={() => setTab(5)}
          className={`w-28 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] ${
            tab === 5
              ? "border-active text-active"
              : "hover:border-active hover:text-active"
          }`}
        >
          1:1문의내역
        </button>
      </div>

      {tab === 1 && (
        <>
          <section className="flex flex-col w-full gap-1 ">
            <div className="flex w-full ">
              <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white">
                이름
              </p>
              <div className="flex items-center w-2/6 pl-1 border-b-2 min-w-30">
                <input
                  className="w-16 h-4/5 border shadow-[0px_1px_1px_0px_#dadce0_inset]"
                  defaultValue={"안녕"}
                ></input>
              </div>

              <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white">
                회원등급
              </p>
              <div className="w-2/6 px-2 pl-1 border-b-2 min-w-fit">
                <select className="w-20 shadow-[0px_1px_1px_0px_#dadce0_inset]">
                  <option value="플래티넘">플래티넘</option>
                  <option value="골드">골드</option>
                  <option value="실버">실버</option>
                </select>
              </div>
            </div>

            <div className="flex w-full">
              <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white">
                적립금
              </p>
              <div className="flex items-center w-2/6 gap-3 px-1 truncate border-b-2">
                1,000
                <form onSubmit={onSubmit} className="flex ">
                  <input
                    className="w-40 h-4/5 border shadow-[0px_1px_1px_0px_#dadce0_inset] text-[0.85rem]"
                    placeholder="적립 금액을 입력해 주세요."
                    type="number"
                    {...register("savingPoint")}
                  ></input>
                  <button
                    className="w-[2.5rem] h-3/5 bg-active text-[#fff] text-[0.84rem]
                    shadow-md
                    hover:bg-orange-600
                    "
                    type="submit"
                    value="point"
                  >
                    적립
                  </button>
                </form>
              </div>

              <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white">
                예치금
              </p>
              <p className="w-2/6 px-2 pl-1 border-b-2 min-w-fit">1,000</p>
            </div>

            <div className="flex w-full">
              <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white">
                누적총로그인
              </p>
              <div className="flex items-center w-2/6 pl-1 border-b-2">6</div>

              <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white">
                주문완료 상품/금액
              </p>
              <div className="flex items-center w-2/6 gap-1 gap-2 pl-1 border-b-2">
                0 / 0 원
                <button
                  className="w-[6.8rem] h-5/6 text-[0.9rem] border border-gray-300 shadow-sm flex flex-col items-center justify-center
                  hover:shadow-inner hover:bg-gray-200 transition-all duration-200"
                >
                  임시비밀번호생성
                </button>
              </div>
            </div>

            <div className="flex w-full">
              <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white ">
                가입일자
              </p>
              <div className="flex items-center w-2/6 pl-1 border-b-2 ">
                2023-06-20 17:13:00
              </div>

              <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white ">
                최종방문일
              </p>
              <p className="w-2/6 px-2 pl-1 border-b-2 min-w-fit">
                2023-06-20 17:13:00
              </p>
            </div>

            <div className="flex w-full">
              <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white">
                비밀번호
              </p>
              <div className="flex items-center w-2/6 pl-1 border-b-2">
                <button
                  className="w-[6.8rem] h-5/6 text-[0.9rem] border border-gray-300 shadow-sm flex flex-col items-center justify-center
                  hover:shadow-inner hover:bg-gray-200 transition-all duration-200"
                >
                  임시비밀번호생성
                </button>
              </div>

              <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white">
                강제탈퇴
              </p>
              <div className="flex items-center w-2/6 pl-1 border-b-2">
                <button
                  className="w-[4rem] h-5/6 text-[0.9rem] border border-gray-300 shadow-sm flex flex-col items-center justify-center
                  hover:shadow-inner hover:bg-gray-200 transition-all duration-200"
                >
                  강제탈퇴
                </button>
              </div>
            </div>
            <div className="flex w-full">
              <p className="w-1/6 min-w-fit pl-1  bg-[#EFEFEF] border-b-white">
                휴대폰
              </p>
              <div className="flex items-center w-2/6 pl-1 border-b-2">
                010-1234-1234
              </div>

              <p className="w-1/6 min-w-fit pl-1 min-w-10 bg-[#EFEFEF] border-b-white">
                이메일
              </p>
              <p className="w-2/6 px-2 pl-1 border-b-2 min-w-fit">
                wkek@naver.com
              </p>
            </div>
          </section>

          <div className="flex flex-row-reverse w-full">
            <button
              className={`w-28 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] 
              hover:text-active
              `}
            >
              회원정보저장
            </button>
          </div>

          <section className="flex flex-col w-full gap-2 mt-4">
            <div className="flex items-center justify-center w-full h-12">
              <p className="w-1/6 h-12 leading-10 min-w-fit pl-1  bg-[#EFEFEF] border-b-white ">
                회원 메모
              </p>
              <textarea className="w-5/6 pl-2 border shadow-[0px_1px_1px_0px_#dadce0_inset] focus:outline-none focus:shadow-none resize-none"></textarea>
            </div>
            <div className="flex flex-row-reverse w-full">
              <button
                className={`w-28 p-1 text-[1rem] shadow-[0px_1px_3px_0px_#dadce0] 
          hover:text-active
          `}
              >
                메모저장
              </button>
            </div>
          </section>
        </>
      )}
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
