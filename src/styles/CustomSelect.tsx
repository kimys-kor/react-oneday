import { useState } from "react";

import chroma from "chroma-js";
import Select, { StylesConfig } from "react-select";

interface optionObj {
  value: number;
  label: string;
}

interface selectProps {
  options: Array<optionObj>;
  setCurrent: (value: any) => void;
}

const CustomSelect: React.FC<selectProps> = ({
  options,
  setCurrent,
}: selectProps) => {
  if (options === undefined) {
    return null; // 또는 적절한 대체 컨텐츠를 반환할 수 있습니다.
  }

  return (
    <Select
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary: "orange",
          primary75: "orange",
          primary50: "orange",
          primary25: "orange",
        },
      })}
      options={options}
      onChange={(option) => setCurrent(option)}
      defaultValue={options[0]}
    />
  );
};

export default CustomSelect;
