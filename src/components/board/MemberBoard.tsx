import styled from "styled-components";
import { useEffect, useRef } from "react";
import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

import Paging from "@components/common/Paging";

interface BoardProps {
  boardMenu: Array<string>;
  boardData: Array<any>;
  handleDetailOpen: (index: number) => void;
  openAnother: number;
  handleOpenIndex: (index: number) => void;
}

const setPage = function () {
  console.log("온체인지");
};

function MemberBoard({
  boardMenu,
  boardData,
  handleDetailOpen,
  openAnother,
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
            <Td>{item.id}</Td>
            <Td>{item.phone}</Td>
            <Td>{item.email}</Td>
            <Td>{item.nickname}</Td>
            <Td>{item.creteadDt}</Td>
            <Td>{item.point}</Td>
            <Td>{item.status}</Td>
            <Td>
              <Iconbox>
                <AnotherIcon
                  onClick={() =>
                    handleOpenIndex(openAnother === index ? -1 : index)
                  }
                />
                {openAnother === index && (
                  <Optionbox
                    ref={optionRef}
                    onClick={() =>
                      handleOpenIndex(openAnother === index ? -1 : index)
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
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </>
  );
}

export default MemberBoard;

const Table = styled.div`
  margin-top: 50px;
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

  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr;
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
  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr;

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
    width: 15px;
    height: 15px;
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