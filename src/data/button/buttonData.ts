export interface ButtonProps {
  active: boolean;
  width: number;
}

export interface BorderButtonProps {
  titles: string[];
  width: number;
}

export const dateFilter: Array<string> = ["전체"];

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

export const eaOptions: Array<eaOption> = [
  { key: 0, value: "10개 씩" },
  { key: 1, value: "20개 씩" },
  { key: 2, value: "30개 씩" },
  { key: 3, value: "40개 씩" },
  { key: 4, value: "50개 씩" },
];
