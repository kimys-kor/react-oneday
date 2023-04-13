import styled from "styled-components";

import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

import Paging from "../Paging";

interface BoardProps {
  index: number;
  boardMenu: Array<string>;
  boardData: Array<any>;
  handleModalOpen?: () => void;
}

const setPage = function () {
  console.log("온체인지");
};

function AdminLogBoard({
  index,
  boardMenu,
  boardData,
  handleModalOpen,
}: BoardProps) {
  return (
    <>
      <Table>
        <Title>
          {boardMenu.map((item, index) => (
            <TitleTd key={index}>{item}</TitleTd>
          ))}
        </Title>

        {boardData.map((item, index) => (
          <Tr key={index}>
            <Td>{index}</Td>
            <Td>{item.creteadDt}</Td>
            <Td>{item.log}</Td>
          </Tr>
        ))}
      </Table>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </>
  );
}

export default AdminLogBoard;

const Table = styled.div`
  width: 860px;
  border: 1px solid #bbbbcf;
  box-sizing: border-box;
`;

const Title = styled.li`
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  display: grid;
  box-sizing: border-box;
  border-bottom: 1px solid #bbbbcf;

  grid-template-columns: 1fr 1fr 5fr;
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

  border-top: 1px solid #cfcfcf;
  grid-template-columns: 1fr 1fr 5fr;

  div {
    text-align: center;
  }
`;

const TitleTd = styled.div`
  box-sizing: border-box;

  height: 56px;
  line-height: 56px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
`;

const Td = styled.div`
  box-sizing: border-box;

  line-height: 62px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
`;
