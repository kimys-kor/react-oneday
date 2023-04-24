import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  corpOption,
  SelectOptionsProps,
  WidthOptionProps,
} from "@/data/selectbox/selectboxData";

const CustomSelect: React.FC<{
  width: number;
  height: number;
  title?: string;
  optionData: corpOption[];
  currentValue: any;
  setCurrentValue: (value: any) => void;
}> = ({ width, height, title, optionData, currentValue, setCurrentValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLLIElement>) => {
    setCurrentValue(e.currentTarget.getAttribute("value") || "");
  };

  // 셀렉트 바깥쪽 클릭시 option안보이도록
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <SelectWrapper
      width={width}
      height={height}
      ref={selectRef}
      onClick={() => setShowOptions((prev) => !prev)}
    >
      {title && (
        <Label>
          <Greyfont1>{title}</Greyfont1>
          <Greyfont2>|</Greyfont2>
          {currentValue}
        </Label>
      )}
      {!title && (
        <Label>
          <Greyfont2>{currentValue}</Greyfont2>
        </Label>
      )}
      <SelectOptions show={showOptions} height={height} width={width}>
        {optionData.map((data, index) => (
          <Option
            height={height}
            key={index}
            value={data.value}
            onClick={handleOnChangeSelectValue}
          >
            {data.value}
          </Option>
        ))}
      </SelectOptions>
    </SelectWrapper>
  );
};

export default CustomSelect;

const SelectWrapper = styled.div<WidthOptionProps>`
  box-sizing: border-box;
  border: 1px solid #bbbbcf;

  position: relative;
  width: ${({ width }) => width}px;

  height: ${({ height }) => height}px;
  line-height: ${({ height }) => height}px;

  background-color: #fff;
  font-family: "MinSans-Regular";

  font-size: 16px;
  color: 1e2026;

  text-overflow: ellipsis;
  white-space: nowrap;

  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    right: 8px;
    top: -3px;
    color: #a8adc0;
    font-size: 20px;
  }
`;
const Label = styled.label`
  margin-left: 4px;
  cursor: pointer;
  color: #a8adc0;
`;

const Greyfont1 = styled.p`
  display: inline;
  color: #a8adc0;
  font-weight: 400;
  margin-left: 18px;
  margin-right: 13px;
`;
const Greyfont2 = styled.p`
  display: inline;
  color: #a8adc0;
  font-weight: 400;

  margin-right: 11px;
`;

const SelectOptions = styled.ul<SelectOptionsProps>`
  z-index: 10;
  position: relative;
  list-style: none;
  box-sizing: border-box;
  border: 1px solid #dbddeb;
  top: -18px;
  left: -1px;
  width: ${({ width }) => width}px;
  display: ${(props) => (props.show ? "block" : "none")};
  padding: 0;
  background-color: #fff;
`;
const Option = styled.li<SelectOptionsProps>`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 0.5px solid #dbddeb;
  text-align: center;
  height: ${({ height }) => height}px;
  line-height: ${({ height }) => height}px;
  font-size: 15px;
  transition: background-color 0.2s ease-in;
  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #595959;
    color: #fff;
  }
`;
