import { useState } from "react";

import chroma from "chroma-js";
import Select, { StylesConfig } from "react-select";

interface optionObj {
  value: number;
  label: string;
}

interface selectProps {
  options: Array<optionObj>;
}

const CustomSelect: React.FC<selectProps> = ({ options }: selectProps) => {
  const [selectOnline, setSelectOnline] = useState(options[0]);

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
      onChange={(e) => setSelectOnline}
      defaultValue={options[0]}
    />
  );
};

export default CustomSelect;
