import {
  corpOption,
  appOption,
  eaOption,
} from "@/models/selectbox/selectboxModel";

export const corpOptions: Array<corpOption> = [
  { key: 0, value: "주식회사 에스와이컴퍼니" },
  { key: 1, value: "주식회사 아이티앱스" },
  { key: 2, value: "코비&클러스터랩" },
  { key: 3, value: "이노소프트" },
  { key: 4, value: "윤컴퍼니" },
  { key: 5, value: "해피케엘비" },
];

export const appOptions: Array<appOption> = [
  { key: 0, value: "로또서치" },
  { key: 1, value: "모이리" },
  { key: 2, value: "프리수" },
  { key: 3, value: "펫포션" },
];

export const eaOptions: Array<eaOption> = [
  { key: 0, value: "10개 씩" },
  { key: 1, value: "20개 씩" },
  { key: 2, value: "30개 씩" },
  { key: 3, value: "40개 씩" },
  { key: 4, value: "50개 씩" },
];

export const memberBoardTitle = [
  "구분",
  "핸드폰",
  "이메일",
  "가입일",
  "보유 포인트",
  "상태",
  "상세 정보",
];

export const memberBoardData = [
  {
    key: 1,
    phone: "010-1111-1111",
    email: "wefk@gmail.com",
    creteadDt: "2022-12-19",
    point: 0,
    stats: 0,
    detail: "null",
  },
  {
    key: 1,
    phone: "010-1111-1111",
    email: "wefk@gmail.com",
    creteadDt: "2022-12-19",
    point: 0,
    stats: 0,
    detail: "null",
  },
  {
    key: 1,
    phone: "010-1111-1111",
    email: "wefk@gmail.com",
    creteadDt: "2022-12-19",
    point: 0,
    stats: 0,
    detail: "null",
  },
];

export const savePointBoardTitle = [
  "구분",
  "적립계정메일",
  "적립일",
  "광고명",
  "적립대행사",
  "적립금액",
];

export const savePointBoardData = [
  {
    key: 1,
    email: "wefk@gmail.com",
    creteadDt: "2022-12-19",
    advName: "쿠팡 특가 확인만 해도 바로적립",
    agencyName: "POINTCLICK",
    point: 150,
  },
  {
    key: 2,
    email: "wefk@gmail.com",
    creteadDt: "2022-12-19",
    advName: "쿠팡 특가 확인만 해도 바로적립",
    agencyName: "POINTCLICK",
    point: 150,
  },
  {
    key: 3,
    email: "wefk@gmail.com",
    creteadDt: "2022-12-19",
    advName: "쿠팡 특가 확인만 해도 바로적립",
    agencyName: "POINTCLICK",
    point: 150,
  },
];

export const usePointBoardTitle = [
  "구분",
  "신청일",
  "신청핸드폰번호",
  "상품권명",
  "신청상태",
  "승인/거부",
];

export const usePointBoardData = [
  {
    key: 1,
    creteadDt: "2022-12-19",
    phone: "010-9894-6022",
    giftLetter: "컬쳐랜드PIN5천원권컬쳐랜드컬쳐랜드컬쳐랜드",
    status: "대기 중",
    agencyName: "POINTCLICK",
  },
];

export const dateFilter: Array<string> = ["전체"];

export const memberFilter: Array<string> = ["전체", "활성", "비활성", "휴면"];
