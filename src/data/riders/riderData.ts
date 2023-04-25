export const riderBoardTitle = [
  "구분",
  "상태",
  "핸드폰",
  "이메일",
  "기사명",
  "마지막수행일",
  "보유포인트",
  "상세 정보",
];

export const riderDetailBoardTitle = [
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
    id: 0,
    status: "정상",
    phone: "01012345678",
    email: "123123@naver.com",
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

export const riderOrderBoardTitle = [
  "주문번호",
  "수행일",
  "상점",
  "상품명",
  "배달지",
];

export interface riderOrder {
  id: number;
  creteadDt: string;
  orderShop: string;
  orderProducts: string;
  address: string;
}

export const riderOrderBoardData: riderOrder[] = [
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderShop: "용만이네상점1",
    orderProducts: "주방용품 3종세트",
    address: "광주 북구...",
  },
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderShop: "용만이네상점1",
    orderProducts: "공구용품",
    address: "광주 남구...",
  },
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderShop: "용만이네상점1",
    orderProducts: "가구",
    address: "광주 서구...",
  },
];
