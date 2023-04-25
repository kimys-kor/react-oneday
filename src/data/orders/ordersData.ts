export const tabOrders: string[] = [
  "주문 현황",
  "일자별 주문 검색",
  "미완료 주문 관리",
  "사고 주문 관리",
];

export interface orders {
  id: number;
  riderId: number;
  riderName: string;
  shopId: number;
  shopName: string;
  memberId: number;
  memberNickname: string;
  productName: string;
  price: number;
  products: number[];
  statusCode: number;
  status: string;
}

// statusCode 0 주문접수, 1 상품준비중, 2 배달중, 3 배달완료, 4 배달지연, 5 배달사고
export const ordersData: orders[] = [
  {
    id: 0,
    riderId: 1,
    riderName: "김영승",
    shopId: 1,
    shopName: "용만이네1",
    memberId: 1,
    memberNickname: "쭈꾸미",
    price: 12000,
    productName: "주방용품3종세트",
    products: [1, 2, 3, 4],
    statusCode: 1,
    status: "상품준비중",
  },
  {
    id: 1,
    riderId: 1,
    riderName: "김영승",
    shopId: 1,
    shopName: "용만이네1",
    memberId: 1,
    memberNickname: "쭈꾸미",
    productName: "주방용품3종세트",
    price: 14000,
    products: [1, 2, 3, 4],
    statusCode: 2,
    status: "배달중",
  },
  {
    id: 2,
    riderId: 1,
    riderName: "김영승",
    shopId: 2,
    shopName: "용만이네2",
    memberId: 1,
    memberNickname: "쭈꾸미",
    productName: "주방용품3종세트",
    price: 22000,
    products: [1, 2, 3, 4],
    statusCode: 3,
    status: "배달완료",
  },
];

export const advList = [
  "NAS",
  "OHC",
  "IVE",
  "TNK",
  "POINTCLICK",
  "IGAWORKS",
  "PINCRUX",
  "APALL",
  "FLEX",
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

export const adv = [
  { name: "NAS", amount: 2000000 },
  { name: "OHC", amount: 2000000 },
  { name: "IVE", amount: 2000000 },
  { name: "TNK", amount: 2000000 },
  { name: "POINTCLICK", amount: 2000000 },
  { name: "IGAWORKS", amount: 2000000 },
  { name: "PINCRUX", amount: 2000000 },
  { name: "APALL", amount: 2000000 },
  { name: "FLEX", amount: 2000000 },
];

export const advBoardMenu = [
  "구분",
  "계정",
  "비밀키",
  "URL",
  "발신번호",
  "메모",
  "관리",
];
interface adv {
  appName: string;
  accountant: string;
  key: string;
  url: string;
  contactNum: string;
  memo: string;
}

export const advBoardData: adv[] = [
  {
    appName: "[A001]캐시문상",
    accountant: "GFN0697",
    key: "CK55799816",
    url: "https://wapi.gift-n.net/",
    contactNum: "1899-2047",
    memo: "메모메모메모",
  },
  {
    appName: "[A001]캐시문상",
    accountant: "GFN0697",
    key: "CK55799816",
    url: "https://wapi.gift-n.net/",
    contactNum: "1899-2047",
    memo: "메모메모메모",
  },
  {
    appName: "[A001]캐시문상",
    accountant: "GFN0697",
    key: "CK55799816",
    url: "https://wapi.gift-n.net/",
    contactNum: "1899-2047",
    memo: "메모메모메모",
  },
  {
    appName: "[A001]캐시문상",
    accountant: "GFN0697",
    key: "CK55799816",
    url: "https://wapi.gift-n.net/",
    contactNum: "1899-2047",
    memo: "메모메모메모",
  },
];
