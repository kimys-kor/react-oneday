import styled from "styled-components";

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

function RiderOrderBoard({ index, boardMenu, boardData }: BoardProps) {
  return (
    <>
      <Table>
        <Title>
          {boardMenu.map((item, index) => (
            <Td key={index}>{item}</Td>
          ))}
        </Title>

        {boardData.map((riderOrder, index) => (
          <Tr key={index}>
            <Td>{index}</Td>
            <Td>{riderOrder.creteadDt}</Td>
            <Td>{riderOrder.orderShop}</Td>
            <Td>{riderOrder.orderProducts}</Td>
            <Td>{riderOrder.address}</Td>
          </Tr>
        ))}
      </Table>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </>
  );
}

export default RiderOrderBoard;

const Table = styled.div`
  width: 100%;
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

  grid-template-columns: 2fr 3fr 3fr 3fr 3fr;
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
  grid-template-columns: 2fr 3fr 3fr 3fr 3fr;

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
