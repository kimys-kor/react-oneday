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

function MemberPointBoard({ index, boardMenu, boardData }: BoardProps) {
  return (
    <>
      {index == 0 ? (
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
                <Td>{item.email}</Td>
                <Td>{item.creteadDt}</Td>
                <Td>{item.advName}</Td>
                <Td>{item.agencyName}</Td>
                <Td>{item.point}</Td>
              </Tr>
            ))}
          </Table>
          <Paging page={1} count={15} setPage={setPage}></Paging>
        </>
      ) : (
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
                <Td>{item.creteadDt}</Td>
                <Td>{item.phone}</Td>
                <Td>{item.giftLetter}</Td>
                <Td>{item.status}</Td>
                <Td>{item.agencyName}</Td>
              </Tr>
            ))}
          </Table>
          <Paging page={1} count={15} setPage={setPage}></Paging>
        </>
      )}
    </>
  );
}

export default MemberPointBoard;

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

  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 2fr;
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
  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 2fr;

  div {
    text-align: center;
  }
`;

const TitleTd = styled.div`
  box-sizing: border-box;
  width: 130px;
  height: 56px;
  line-height: 56px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
`;

const Td = styled.div`
  box-sizing: border-box;
  width: 130px;
  line-height: 62px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
`;
