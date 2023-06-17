import styled, { css } from "styled-components";
import { Dispatch, SetStateAction } from "react";

export interface BorderButtonProps {
  width: number;
  title: string;
  id: number;
  onClick: (id: number) => void;
  activeId: number | null;
}

function BorderButton({
  title,
  width,
  id,
  onClick,
  activeId,
}: BorderButtonProps) {
  const isActive = id === activeId;
  const borderColor = isActive ? "border-active" : "border-normal";
  const fontColor = isActive ? "text-active" : "text-normal";

  return (
    <button
      className={`text-base font-light w-40 h-10 overflow-hidden whitespace-nowrap border  bg-white cursor-pointer mr-0 
      hover:text-active hover:border-active
      ${borderColor}
      ${fontColor}`}
      onClick={() => onClick(id)}
    >
      {title}
    </button>
  );
}

export default BorderButton;
