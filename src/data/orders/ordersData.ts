export const tabOrders: string[] = [
  "주문 현황",
  "일자별 주문 검색",
  "미완료 주문 관리",
  "사고 주문 관리",
];

export interface orders {
  id: number;
  name: string;
  user: number;
  savedPoint: number;
  store: string[];

  appNumber: string;
  appCode: string;
  corporation: string;

  appVersion: string;
  rejoinday: number;
  terms: string;
  privacy: string;
}

export const ordersData: orders[] = [
  {
    id: 0,
    name: "캐시문상1",
    user: 32465,
    savedPoint: 165480350,
    store: ["원스토어", "구글스토어", "앱스토어"],
    appNumber: "A001",
    appCode: "ksfnken",
    corporation: "에스와이컴퍼니",

    appVersion: "1.0.1",
    rejoinday: 14,
    terms: "wekfnweknf",
    privacy: "dkdkdk",
  },
  {
    id: 1,
    name: "캐시문상2",
    user: 32465,
    savedPoint: 165480350,
    store: ["원스토어", "구글스토어", "앱스토어"],
    appNumber: "A002",
    appCode: "ksfnken",
    corporation: "에스와이컴퍼니",

    appVersion: "1.0.1",
    rejoinday: 14,
    terms: "wekfnweknf",
    privacy: "dkdkdk",
  },
  {
    id: 2,
    name: "캐시문상",
    user: 32465,
    savedPoint: 165480350,
    store: ["원스토어", "구글스토어", "앱스토어"],
    appNumber: "A001",
    appCode: "ksfnken",
    corporation: "에스와이컴퍼니",

    appVersion: "1.0.1",
    rejoinday: 14,
    terms: "wekfnweknf",
    privacy: "dkdkdk",
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
