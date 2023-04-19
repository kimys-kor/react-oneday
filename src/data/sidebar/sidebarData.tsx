import { ReactComponent as MemberIcon } from "@statics/images/sidebar/membericon.svg";
import { ReactComponent as DashboardIcon } from "@statics/images/sidebar/dashboardicon.svg";
import { ReactComponent as AppIcon } from "@statics/images/sidebar/appicon.svg";
import { ReactComponent as GiftcardIcon } from "@statics/images/sidebar/giftcardicon.svg";
import { ReactComponent as SavingIcon } from "@statics/images/sidebar/savingicon.svg";
import { ReactComponent as ChartIcon } from "@statics/images/sidebar/charticon.svg";
import { ReactComponent as AdminUserIcon } from "@statics/images/sidebar/adminusericon.svg";
import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

import { ReactNode } from "react";

export interface sidebarModel {
  logo: ReactNode;
  name: string;
  path: string;
  pathname: string;
}

export interface SidebarProps {
  xPosition: number;
}

export interface BoxProps {
  clicked: boolean;
}

export const sidebarMenu: Array<Array<sidebarModel>> = [
  [
    {
      logo: <DashboardIcon color="#7B829B" size="26" />,
      name: "대시보드",
      path: "dashboard",
      pathname: "/oneday/dashboard",
    },
    {
      logo: <MemberIcon color="#7B829B" size="26" />,
      name: "회원 관리",
      path: "member",
      pathname: "/oneday/member",
    },
    {
      logo: <AppIcon color="#7B829B" size="26" />,
      name: "상점 관리",
      path: "shop",
      pathname: "/oneday/shop",
    },
    {
      logo: <GiftcardIcon color="#7B829B" size="26" />,
      name: "상품 관리",
      path: "product",
      pathname: "/oneday/product",
    },
    {
      logo: <GiftcardIcon color="#7B829B" size="26" />,
      name: "기사 관리",
      path: "riders",
      pathname: "/oneday/riders",
    },
    {
      logo: <SavingIcon color="#7B829B" size="26" />,
      name: "주문현황",
      path: "orders",
      pathname: "/oneday/orders",
    },
    {
      logo: <ChartIcon color="#7B829B" size="26" />,
      name: "정산",
      path: "statistics",
      pathname: "/oneday/statistics",
    },
  ],
];
