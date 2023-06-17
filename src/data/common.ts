import { ReactNode } from "react";

export interface corpOption {
  key: number;
  value: string;
}

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

export interface member {
  id: string;
  useFlag: boolean;
  appName: string;
  phoneNum: string;
  email: string;
  createdDt: string;
  totalPoint: string;
}

export interface sidebarModel {
  logo: ReactNode;
  name: string;
  path: string;
  pathname: string;
}
