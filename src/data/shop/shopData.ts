import {
  corpOption,
  appOption,
  eaOption,
} from "@/data/selectbox/selectboxData";



export const shopBoardTitle = [
  "구분",
  "매장명",
  "매장점주",
  "핸드폰",
  "이메일",
  "등록일",
  "상품수",
  "총주문건수",
  "상세 정보",
];

export interface shop {
  id: number;
  shopName: string;
  owner: string;
  phone: string;
  email: string;
  createdDt: string;
  productNumber: number;
  orderCount: number;
}

export const shopData: shop[] = [
  {
    id: 0,
    shopName: "용만이네상점1",
    owner: "김영승",
    phone: "01012345678",
    email: "wwkwk@naver.com",
    createdDt: "2020-03-01",
    productNumber: 2040,
    orderCount: 2645,
  },
  {
    id: 1,
    shopName: "용만이네상점2",
    owner: "김영승",
    phone: "01012345678",
    email: "wwkwk@naver.com",
    createdDt: "2020-03-01",
    productNumber: 2040,
    orderCount: 2645,
  },
  {
    id: 2,
    shopName: "용만이네상점3",
    owner: "김영승",
    phone: "01012345678",
    email: "wwkwk@naver.com",
    createdDt: "2020-03-01",
    productNumber: 2040,
    orderCount: 2645,
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

export const shopOrderBoardTitle = [
  "주문번호",
  "주문일",
  "회원",
  "상품명",
  "주문금액",
];

export interface shoprOrder {
  id: number;
  creteadDt: string;
  orderMember: string;
  orderProducts: string;
  orderAmount: number;
}

export const shopOrdertBoardData: shoprOrder[] = [
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderMember: "rainbow1",
    orderProducts: "주방용품 3종세트",
    orderAmount: 204000,
  },
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderMember: "rainbow2",
    orderProducts: "공구용품",
    orderAmount: 204000,
  },
  {
    id: 1,
    creteadDt: "2022-12-19",
    orderMember: "rainbow3",
    orderProducts: "가구",
    orderAmount: 204000,
  },
];
