export const productBoardTitle = [
  "구분",
  "매장명",
  "상품명",
  "옵션",
  "등록일",
  "재고",
  "상세 정보",
];

export interface product {
  id: number;
  shopName: string;
  productName: string;
  option: string;
  createdDt: string;
  inventory: number;
}

export const productData: product[] = [
  {
    id: 0,
    shopName: "용만이네상점1",
    productName: "주방용도마",
    option: "01012345678",
    createdDt: "2020-03-01",
    inventory: 2040,
  },
  {
    id: 0,
    shopName: "용만이네상점1",
    productName: "쿠킹호일",
    option: "01012345678",
    createdDt: "2020-03-01",
    inventory: 2040,
  },
  {
    id: 0,
    shopName: "용만이네상점1",
    productName: "토마토",
    option: "01012345678",
    createdDt: "2020-03-01",
    inventory: 2040,
  },
];
