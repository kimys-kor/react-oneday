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
