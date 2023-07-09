import { RxDashboard } from "react-icons/rx";
import { HiOutlineUser } from "react-icons/hi";
import { BsShop } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import {
  BiSpreadsheet,
  BiBarChartAlt2,
  BiMessageAltError,
  BiMessageEdit,
} from "react-icons/bi";

import { ReactNode } from "react";

export const sidebarMenu: Array<Array<sidebarModel>> = [
  [
    {
      logo: (
        <RxDashboard className="color-[#7B829B] hover:color-active" size="26" />
      ),
      name: "대시보드",
      path: "dashboard",
      pathname: "/oneday/dashboard",
    },
    {
      logo: <HiOutlineUser size="26" />,
      name: "회원 관리",
      path: "member",
      pathname: "/oneday/member",
    },
    {
      logo: <BsShop size="26" />,
      name: "상점 관리",
      path: "shop",
      pathname: "/oneday/shop",
    },
    {
      logo: <BsTruck size="26" />,
      name: "기사 관리",
      path: "rider",
      pathname: "/oneday/rider",
    },
    {
      logo: <BiMessageEdit size="26" />,
      name: "상점 문의",
      path: "question",
      pathname: "/oneday/question",
    },
    {
      logo: <BiSpreadsheet size="26" />,
      name: "주문관리",
      path: "orders",
      pathname: "/oneday/orders",
    },
    {
      logo: <BiBarChartAlt2 size="26" />,
      name: "정산",
      path: "statistics",
      pathname: "/oneday/statistics",
    },
  ],
];

export interface appOption {
  key: number;
  value: string;
}

export interface eaOption {
  key: number;
  value: string;
}

export interface app {
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

export interface admin {
  key: number;
  position: string;
  name: string;
  id: string;
  creteadDt: string;
  lastloginDt: string;
}

export interface adv {
  appName: string;
  accountant: string;
  key: string;
  url: string;
  contactNum: string;
  memo: string;
}

export interface filterDto {
  startDt: string | null | undefined;
  endDt: string | null | undefined;
  appIdList: string[];
  keywordOption: string;
  keyword: string;
  page: number;
  size: number;
  companyId?: string;
}

export interface sidebarModel {
  logo: ReactNode;
  name: string;
  path: string;
  pathname: string;
}

export const adminAuthority = [
  "대시보드",
  "멤버관리",
  "기프트레터",
  "적립이력",
  "통계",
  "어드민관리",
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

export const accordionitems = [
  {
    title: "Section 1",
    content: [
      { title: "메뉴1", path: "/menu1" },
      { title: "메뉴2", path: "/menu2" },
      { title: "메뉴3", path: "/menu3" },
    ],
  },
  {
    title: "Section 2",
    content: [
      { title: "메뉴1", path: "/menu1" },
      { title: "메뉴2", path: "/menu2" },
      { title: "메뉴3", path: "/menu3" },
    ],
  },
  {
    title: "Section 3",
    content: [
      { title: "메뉴1", path: "/menu1" },
      { title: "메뉴2", path: "/menu2" },
      { title: "메뉴3", path: "/menu3" },
    ],
  },
];

export const dateFilter: string = "전체";

export const itemFilter: Array<string> = ["전체", "활성", "비활성", "휴면"];

export interface corpOption {
  key: number;
  value: string | number;
}

export interface appOption {
  key: number;
  value: string;
}

export interface eaOption {
  key: number;
  value: string;
}

export interface SelectOptionsProps {
  show?: boolean;
  width?: number;
  height?: number;
}

export interface WidthOptionProps {
  width: number;
  height: number;
}

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

export const text1 = "간편하게 클릭하나만으로";
export const text2 = "필요한 물품을 하루내에 배송까지";
export const footertext1 =
  "주식회사 원데이컴퍼니 | 대표자:김영승 | 사업자등록번호:111-111-1111";
export const footertext2 =
  "고객센터: 11@1111.kr 062-111-1111(평일 오전 09시~오후 18시)";
export const footertext3 =
  "2023. Copyright© by ONEDAYCOMPANY Inc. All rights reserved";

export const memberBoardTitle = [
  "구분",
  "핸드폰",
  "이메일",
  "닉네임",
  "가입일",
  "보유 포인트",
  "상태",
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
    id: 1,
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
    id: 10,
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
    id: 122,
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
export interface board {
  id: number;
  title: string;
  writer: string;
  createdDt: string;
}

export const boardData: board[] = [
  { id: 4, title: "제목4", writer: "상점4", createdDt: "2023-04-17" },
  { id: 3, title: "제목3", writer: "상점3", createdDt: "2023-04-17" },
  { id: 2, title: "제목2", writer: "상점2", createdDt: "2023-04-17" },
  { id: 1, title: "제목1", writer: "상점1", createdDt: "2023-04-17" },
];

export const memberPointBoardTitle = [
  "주문번호",
  "주문일",
  "상점",
  "상품명",
  "주문금액",
];

export interface memberPoint {
  id: number;
  creteadDt: string;
  orderShop: string;
  orderProducts: string;
  orderAmount: number;
}

export const memberPointBoardData: memberPoint[] = [
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
    name: "라이더1",
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
    name: "라이더2",
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
    name: "라이더3",
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

export interface corpOption {
  key: number;
  value: string | number;
}

export interface appOption {
  key: number;
  value: string;
}

export interface eaOption {
  key: number;
  value: string;
}

export interface SelectOptionsProps {
  show?: boolean;
  width?: number;
  height?: number;
}

export interface WidthOptionProps {
  width: number;
  height: number;
}

export const eaOptions = [
  { value: 10, label: "10개 씩" },
  { value: 20, label: "20개 씩" },
  { value: 30, label: "30개 씩" },
  { value: 40, label: "40개 씩" },
  { value: 50, label: "50개 씩" },
];

export const cityOptions = [{ value: 0, label: "광주광역시" }];

export const guOptions = [
  { value: 0, label: "북구" },
  { value: 1, label: "서구" },
  { value: 2, label: "광산구" },
  { value: 3, label: "남구" },
];

export const dongOptions = [
  { value: 0, label: "동림동" },
  { value: 1, label: "운암동" },
  { value: 2, label: "오치동" },
  { value: 3, label: "용봉동" },
];

export const shopOptions = [
  { value: 0, label: "용만이네1" },
  { value: 1, label: "용만이네2" },
  { value: 2, label: "용만이네3" },
  { value: 3, label: "용만이네4" },
];

export const yearOptions = [
  { value: 1, label: "2023" },
  { value: 2, label: "2022" },
  { value: 3, label: "2021" },
  { value: 4, label: "2020" },
];

export const monthOptions = [
  { value: 1, label: "01" },
  { value: 2, label: "02" },
  { value: 3, label: "03" },
  { value: 4, label: "04" },
  { value: 4, label: "05" },
  { value: 4, label: "06" },
  { value: 4, label: "07" },
  { value: 4, label: "08" },
  { value: 4, label: "09" },
  { value: 4, label: "10" },
  { value: 4, label: "11" },
  { value: 4, label: "12" },
];

export const shoplocation: Array<String> = [
  "전체",
  "남구",
  "북구",
  "서구",
  "동구",
];

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
  businessNumber: string;
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
    businessNumber: "102-19293-122",
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
    businessNumber: "102-19293-122",
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
    businessNumber: "102-19293-122",
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

export interface SidebarProps {
  xPosition: number;
}

export interface BoxProps {
  clicked: boolean;
}

export interface summaryProps {
  title: string;
  subTitle1: string;
  subTitle2: string;
}

export const titleStatistics = ["주문건수 통계", "주문금액 통계"];

export const searchFilter = ["전체", "주문완료", "주문취소"];

export const chartFilter = ["누적회원점유율", "누적적립금점유율"];
