import styled, { css } from "styled-components";
import { Dispatch, SetStateAction } from "react";

interface LiftedProps {
  activeIndex: number | null;
  handleButtonClick: (index: number) => void;
}

export interface BorderButtonProps {
  titles: string[];
  width: number;
}

function BorderButton({
  titles,
  width,
  activeIndex,
  handleButtonClick,
}: BorderButtonProps & LiftedProps) {
  return (
    <ButtonBox>
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
    </ButtonBox>
  );
}

export default BorderButton;

const ButtonBox = styled.div`
  box-sizing: border-box;
  transition: all 0.01s linear;
`;

export interface ButtonProps {
  active: boolean;
  width: number;
}

const Button = styled.button<ButtonProps>`
  text-align: center;

  font-size: 16px;
  width: ${({ width }) => width}rem;
  height: 37px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border: 1px solid #bbbbcf;
  background-color: #ffffff;
  cursor: pointer;
  margin-right: 0; // remove the margin on the last button
  transition: all 0.1s linear;

  &:hover {
    border-color: #ff6622; // set border color to #ff6622 for active button
    color: #ff6622;
  }

  ${({ active }) =>
    active &&
    css`
      border-color: #ff6622; // set border color to #ff6622 for active button
      color: #ff6622; // set text color to #ff6622 for active button
    `}
`;
