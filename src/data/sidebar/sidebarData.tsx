import sidebarModel from "@/models/sidebar/sidebarModel";

import {
  MdDashboard,
  MdBorderAll,
  MdCalculate,
  MdPeople,
} from "react-icons/md";
import { AiOutlineShop, AiOutlineShoppingCart } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";

export const sidebarMenu: Array<sidebarModel> = [
  {
    logo: <MdDashboard color="white" size="26" />,
    name: "대시보드",
    path: "dashboard",
  },
  {
    logo: <AiOutlineShop color="white" size="26" />,
    name: "상점관리",
    path: "shop",
  },
  {
    logo: <AiOutlineShoppingCart color="white" size="26" />,
    name: "상품관리",
    path: "product",
  },
  {
    logo: <CiDeliveryTruck color="white" size="26" />,
    name: "기사관리",
    path: "rider",
  },
  {
    logo: <MdBorderAll color="white" size="26" />,
    name: "주문현황",
    path: "orders",
  },
  { logo: <MdCalculate color="white" size="26" />, name: "정산", path: "" },
  {
    logo: <MdPeople color="white" size="26" />,
    name: "회원관리",
    path: "member",
  },
];
