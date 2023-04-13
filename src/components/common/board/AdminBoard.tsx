import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

interface BoardProps {
  boardMenu: Array<string>;
  boardData: Array<any>;
  handleDetailOpen: (index: number) => void;
  openIndex: number;
  handleOpenIndex: (index: number) => void;
}

function AdminBoard({
  boardMenu,
  boardData,
  handleDetailOpen,
  openIndex,
  handleOpenIndex,
}: BoardProps) {
  const optionRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      optionRef.current &&
      !optionRef.current.contains(event.target as Node)
    ) {
      handleOpenIndex(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Table>
        <Title>
          {boardMenu.map((item, index) => (
            <Td key={index}>{item}</Td>
          ))}
        </Title>

        {boardData.map((item, index) => (
          <Tr key={index}>
            <Td>{item.position}</Td>
            <Td>{item.name}</Td>
            <Td>{item.id}</Td>
            <Td>{item.creteadDt}</Td>
            <Td>{item.lastloginDt}</Td>
            <Td>
              <Iconbox>
                <AnotherIcon
                  onClick={() =>
                    handleOpenIndex(openIndex === index ? -1 : index)
                  }
                />
                {openIndex === index && (
                  <Optionbox
                    ref={optionRef}
                    onClick={() =>
                      handleOpenIndex(openIndex === index ? -1 : index)
                    }
                  >
                    <Option onClick={() => handleDetailOpen(index)}>
                      상세정보
                    </Option>
                    <Option>수정</Option>
                    <Option>삭제</Option>
                  </Optionbox>
                )}
              </Iconbox>
            </Td>
          </Tr>
        ))}
      </Table>
    </>
  );
}

export default AdminBoard;
const Table = styled.div`
  width: 100%;
  border: 1px solid #bbbbcf;
  box-sizing: border-box;
`;

const Title = styled.li`
  width: 100%;
  display: grid;
  box-sizing: border-box;
  padding: 10px;
  border-bottom: 1px solid #bbbbcf;

  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr;
  div {
    text-align: center;
    font-size: 1rem;
  }
`;

const Tr = styled.li`
  box-sizing: border-box;

  width: 100%;
  height: 62px;
  display: grid;
  padding: 10px;

  border-top: 1px solid #cfcfcf;
  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr;

  div {
    text-align: center;
  }
`;

const Td = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Iconbox = styled.div`
  box-sizing: border-box;

  width: 30px;
  height: 15px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Optionbox = styled.div`
  width: 99px;

  border: 1px solid #bbbbcf;
  box-shadow: 0px 12px 12px rgba(30, 32, 38, 0.1);
  text-align: center;
  background-color: #fff;

  position: relative;
  left: -80px;
  z-index: 10;
`;

const Option = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #bbbbcf;

  &:hover {
    color: #ff6622;
  }
`;
