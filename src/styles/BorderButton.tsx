import styled, { css } from "styled-components";
import { Dispatch, SetStateAction } from "react";

export interface BorderButtonProps {
  title: string;
  width: number;
  active: boolean;
}

function BorderButton({ title, width, active }: BorderButtonProps) {
  return (
    <Button width={width} active={active}>
      {title}
    </Button>
  );
}

export default BorderButton;

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

  @media (max-width: 1150px) {
    width: auto;
  }
`;
