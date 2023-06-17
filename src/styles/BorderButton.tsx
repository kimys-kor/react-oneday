import styled, { css } from "styled-components";
import { Dispatch, SetStateAction } from "react";

export interface BorderButtonProps {
  title: string;
  id: number;
  onClick: (id: number) => void;
  activeId: number | null;
}

function BorderButton({ title, id, onClick, activeId }: BorderButtonProps) {
  const isActive = id === activeId;
  const borderColor = isActive ? "border-active" : "border-normal";
  const fontColor = isActive ? "text-active" : "text-normal";

  return (
    <button
      className={`text-base font-light w-20 h-10 overflow-hidden whitespace-nowrap border bg-white cursor-pointer
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
