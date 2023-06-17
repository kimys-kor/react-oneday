import styled, { css } from "styled-components";
import { Dispatch, SetStateAction } from "react";

import { BorderButtonProps, ButtonProps } from "@/data/buttonData";

interface LiftedProps {
  activeIndex: number | null;
  handleButtonClick: (index: number) => void;
}

function BorderButton({
  titles,
  width,
  activeIndex,
  handleButtonClick,
}: BorderButtonProps & LiftedProps) {
  return (
    <>
      {titles.map((title, index) => (
        <Button
          key={index}
          onClick={() => handleButtonClick(index)}
          active={index === activeIndex}
          width={width}
        >
          {title}
        </Button>
      ))}
    </>
  );
}

export default BorderButton;

const Button = styled.button<ButtonProps>`
  text-align: center;
  font-size: 16px;
  font-weight: 300;
  width: ${({ width }) => width}rem;
  height: 2.3125rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border: 1px solid #bbbbcf;
  background-color: #ffffff;
  cursor: pointer;
  margin-right: 0; // remove the margin on the last button

  ${({ active }) =>
    active &&
    css`
      border-color: #ff6622; // set border color to #ff6622 for active button
      color: #ff6622; // set text color to #ff6622 for active button
    `}
`;
