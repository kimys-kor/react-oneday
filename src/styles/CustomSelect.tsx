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

  const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      borderRadius: "4px",
      border: "#ff622",
      boxShadow: "none",
      width: "9rem",
      height: "1rem",
      textAlign: "center",
      fontSize: "0.875rem",
      WebkitBoxShadow: "0px 1px 3px 0px #dadce0",
      "&:hover": {
        borderColor: "#ff6622",
      },
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#fff"
        : state.isFocused
        ? "#ff6622"
        : "#fff",
      color: state.isSelected ? "#ff6622" : "#333",
      fontSize: "0.85rem",
      "&:hover": {
        backgroundColor: state.isSelected ? "#fff" : "#ff6622",
        color: state.isSelected ? "#ff6622" : "#fff",
      },
    }),
  };

  return (
    <Select
      styles={customStyles}
      options={options}
      onChange={(option) => setCurrent(option)}
      defaultValue={options[0]}
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
    />
  );
};

export default CustomSelect;
