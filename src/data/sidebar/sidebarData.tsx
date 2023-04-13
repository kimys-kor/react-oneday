import { sidebarModel } from "@/models/sidebar/sidebarModel";

import { ReactComponent as DashboardIcon } from "@statics/images/sidebar/dashboardicon.svg";
import { ReactComponent as MemberIcon } from "@statics/images/sidebar/membericon.svg";
import { ReactComponent as AppIcon } from "@statics/images/sidebar/appicon.svg";
import { ReactComponent as GiftcardIcon } from "@statics/images/sidebar/giftcardicon.svg";
import { ReactComponent as SavingIcon } from "@statics/images/sidebar/savingicon.svg";
import { ReactComponent as ChartIcon } from "@statics/images/sidebar/charticon.svg";
import { ReactComponent as AdminUserIcon } from "@statics/images/sidebar/adminusericon.svg";
import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

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
      name: "유저 관리",
      path: "member",
      pathname: "/oneday/member",
    },
    {
      logo: <AppIcon color="#7B829B" size="26" />,
      name: "앱 관리",
      path: "application",
      pathname: "/oneday/application",
    },
    {
      logo: <GiftcardIcon color="#7B829B" size="26" />,
      name: "상품권 관리",
      path: "product",
      pathname: "/oneday/product",
    },
    {
      logo: <SavingIcon color="#7B829B" size="26" />,
      name: "적립 이력",
      path: "saving",
      pathname: "/oneday/saving",
    },
    {
      logo: <ChartIcon color="#7B829B" size="26" />,
      name: "통계",
      path: "chart",
      pathname: "/oneday/chart",
    },
  ],
  [
    {
      logo: <AdminUserIcon color="#7B829B" size="26" />,
      name: "어드민 관리",
      path: "adminuser",
      pathname: "/oneday/adminuser",
    },
    {
      logo: <AnotherIcon color="#7B829B" size="26" />,
      name: "더보기",
      path: "another",
      pathname: "/oneday/another",
    },
  ],
];
