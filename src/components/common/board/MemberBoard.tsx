import styled from "styled-components";

import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

import Paging from "../Paging";

interface BoardProps {
  boardMenu: Array<string>;
  boardData: Array<any>;
  handleModalOpen: () => void;
}

const setPage = function () {
  console.log("온체인지");
};

function MemberBoard({ boardMenu, boardData, handleModalOpen }: BoardProps) {
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
            <Td>{index}</Td>
            <Td>{item.phone}</Td>
            <Td>{item.email}</Td>
            <Td>{item.creteadDt}</Td>
            <Td>{item.point}</Td>
            <Td>{item.stats}</Td>
            <Td>
              <Iconbox onClick={handleModalOpen}>
                <AnotherIcon></AnotherIcon>
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

  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr 3fr;
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
  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr 3fr;

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
`;
