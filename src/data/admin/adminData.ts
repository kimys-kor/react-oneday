import { admin } from "@/models/admin/adminModel";

export const adminAuthority = [
  "대시보드",
  "멤버관리",
  "기프트레터",
  "적립이력",
  "통계",
  "어드민관리",
];

export const adminLogBoardTitle = ["번호", "작업일", "작업 내용"];

export const adminLogBoardData = [
  {
    key: 1,
    creteadDt: "2022-12-19",
    log: "010-9233-1255 회원 활성화",
  },
  {
    key: 2,
    creteadDt: "2022-12-19",
    log: "010-9233-1255 회원 비 활성화",
  },
  {
    key: 3,
    creteadDt: "2022-12-19",
    log: "010-9233-1255 회원 100포인트 적립",
  },
];

export const adminBoardTitle = [
  "직책",
  "이름",
  "계정ID",
  "등록일",
  "최근 접속일",
  "상세정보",
];

export const adminBoardData: admin[] = [
  {
    key: 0,
    position: "사원",
    name: "김영승",
    id: "sycompany1234",
    creteadDt: "2022-12-19",
    lastloginDt: "2022-12-19",
  },
  {
    key: 1,
    position: "사원",
    name: "홍진석",
    id: "sycompany1234",
    creteadDt: "2022-12-19",
    lastloginDt: "2022-12-19",
  },
  {
    key: 2,
    position: "사원",
    name: "나태윤",
    id: "sycompany1234",
    creteadDt: "2022-12-19",
    lastloginDt: "2022-12-19",
  },
  {
    key: 3,
    position: "사원",
    name: "정희원",
    id: "sycompany1234",
    creteadDt: "2022-12-19",
    lastloginDt: "2022-12-19",
  },
];

export const authority = [];
