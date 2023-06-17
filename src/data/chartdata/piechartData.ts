export interface piechartModel {
  id: string;
  occupation?: string;
  value: number;
}

export const piechartData: piechartModel[] = [
  { id: "cola", value: 324 },
  { id: "cidar", value: 88 },
  { id: "fanta", value: 221 },
  { id: "milkis", value: 221 },
  { id: "sunup", value: 221 },
];

export const color = [
  "#FF6622",
  "#FF9064",
  "#FFBCA4",
  "#FFDC22",
  "#FFFF50",
  "#C4FF50",
  "#06E9A5",
  "#84F7CD",
  "#84F4F4",
  "#22AFFF",
  "#7BD7FF",
  "#90AFFF",
  "#6922FF",
  "#956EFF",
  "#F4ABFF",
];

export const memberOccupationData: Array<piechartModel> = [
  {
    id: "배달지연",
    occupation: "45%",
    value: 3000,
  },
  {
    id: "물건누락",
    occupation: "45%",
    value: 4000,
  },
  {
    id: "결제실패",
    occupation: "45%",
    value: 2000,
  },
];

export const pointOccupationData: Array<piechartModel> = [
  {
    id: "배달지연",
    occupation: "45%",
    value: 115000,
  },
  {
    id: "물건누락",
    occupation: "45%",
    value: 70000,
  },
  {
    id: "결제실패",
    occupation: "45%",
    value: 55000,
  },
];
