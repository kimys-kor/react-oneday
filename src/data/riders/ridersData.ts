export const riderBoardTitle = [
  "구분",
  "상태",
  "핸드폰",
  "이메일",
  "기사명",
  "가입일",
  "마지막수행일",
  "수행건수",
  "총수익금",
  "보유포인트",
  "상세 정보",
];

export interface rider {
  id: number;
  status: string;
  phone: string;
  email: string;
  name: string;
  creteadDt: string;
  lastorderDt: string;
  orderCount: number;
  orderAmount: number;
  point: number;
}

export const riderData: rider[] = [
  {
    status: "정상",
    id: 0,
    phone: "01012345678",
    email: "wwkwk@naver.com",
    name: "부끄러운어피치",
    creteadDt: "2020-03-01",
    lastorderDt: "2023-04-17",
    orderCount: 2645,
    orderAmount: 1204044,
    point: 2700,
  },
  {
    status: "정상",
    id: 1,
    phone: "01012345678",
    email: "wwkwk@naver.com",
    name: "라이언과함께",
    creteadDt: "2020-03-01",
    lastorderDt: "2023-04-17",
    orderCount: 2645,
    orderAmount: 1204044,
    point: 2700,
  },
  {
    status: "정상",
    id: 2,
    phone: "01012345678",
    email: "wwkwk@naver.com",
    name: "콜라좋아",
    creteadDt: "2020-03-01",
    lastorderDt: "2023-04-17",
    orderCount: 2645,
    orderAmount: 1204044,
    point: 2700,
  },
];
