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
    id: "언어의정원",
    occupation: "45%",
    value: 3000,
  },
  {
    id: "캐시문상",
    occupation: "45%",
    value: 4000,
  },
  {
    id: "로또서치",
    occupation: "45%",
    value: 2000,
  },
  {
    id: "행복로또",
    occupation: "45%",
    value: 200,
  },
  {
    id: "핏츠",
    occupation: "45%",
    value: 500,
  },
  {
    id: "에이바",
    occupation: "45%",
    value: 600,
  },
  {
    id: "티티고",
    occupation: "45%",
    value: 100,
  },
];

export const pointOccupationData: Array<piechartModel> = [
  {
    id: "언어의정원",
    occupation: "45%",
    value: 115000,
  },
  {
    id: "캐시문상",
    occupation: "45%",
    value: 70000,
  },
  {
    id: "로또서치",
    occupation: "45%",
    value: 55000,
  },
  {
    id: "행복로또",
    occupation: "45%",
    value: 30000,
  },
  {
    id: "핏츠",
    occupation: "45%",
    value: 20000,
  },
  {
    id: "에이바",
    occupation: "45%",
    value: 10000,
  },
  {
    id: "티티고",
    occupation: "45%",
    value: 5000,
  },
];
