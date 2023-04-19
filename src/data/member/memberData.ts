export const memberBoardTitle = [
  "구분",
  "핸드폰",
  "이메일",
  "닉네임",
  "가입일",
  "보유 포인트",
  "상태",
  "상세 정보",
];

export interface member {
  status: string;
  id: number;
  phone: string;
  email: string;
  nickname: string;
  creteadDt: string;
  lastloginDt: string;
  orderCount: number;
  orderAmount: number;
  point: number;
}

export const memberData: member[] = [
  {
    status: "정상",
    id: 0,
    phone: "01012345678",
    email: "wwkwk@naver.com",
    nickname: "부끄러운어피치",
    creteadDt: "2020-03-01",
    lastloginDt: "2023-04-17",
    orderCount: 2645,
    orderAmount: 1204044,
    point: 2700,
  },
  {
    status: "정상",
    id: 1,
    phone: "01012345678",
    email: "wwkwk@naver.com",
    nickname: "라이언과함께",
    creteadDt: "2020-03-01",
    lastloginDt: "2023-04-17",
    orderCount: 2645,
    orderAmount: 1204044,
    point: 2700,
  },
  {
    status: "정상",
    id: 2,
    phone: "01012345678",
    email: "wwkwk@naver.com",
    nickname: "콜라좋아",
    creteadDt: "2020-03-01",
    lastloginDt: "2023-04-17",
    orderCount: 2645,
    orderAmount: 1204044,
    point: 2700,
  },
];

export const memberOrderBoardTitle = [
  "주문번호",
  "주문일",
  "상점",
  "상품명",
  "주문금액",
];

export interface memberOrder {
  id: number;
  creteadDt: string;
  orderShop: string;
  orderProducts: string;
  orderAmount: number;
}

export const memberOrdertBoardData: memberOrder[] = [
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderShop: "용만이네상점1",
    orderProducts: "주방용품 3종세트",
    orderAmount: 204000,
  },
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderShop: "용만이네상점1",
    orderProducts: "공구용품",
    orderAmount: 204000,
  },
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderShop: "용만이네상점1",
    orderProducts: "가구",
    orderAmount: 204000,
  },
];

export const dateFilter: Array<string> = ["전체"];

export const itemFilter: Array<string> = ["전체", "활성", "비활성", "휴면"];
