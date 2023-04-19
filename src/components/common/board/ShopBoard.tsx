import styled from "styled-components";

import { ReactComponent as AnotherIcon } from "@statics/images/sidebar/anothericon.svg";

import Paging from "../Paging";

interface BoardProps {
  shopboardMenu: Array<string>;
  shopBoardData: Array<any>;
  handleModalOpen: () => void;
}

const setPage = function () {
  console.log("온체인지");
};

function ShopBoard({
  shopboardMenu,
  shopBoardData,
  handleModalOpen,
}: BoardProps) {
  return (
    <>
      <Table>
        <Title>
          {shopboardMenu.map((menu, index) => (
            <Td key={index}>{menu}</Td>
          ))}
        </Title>

        {shopBoardData.map((shop, index) => (
          <Tr key={index}>
            <Td>{shop.id}</Td>
            <Td>{shop.shopName}</Td>
            <Td>{shop.owner}</Td>
            <Td>{shop.phone}</Td>
            <Td>{shop.email}</Td>
            <Td>{shop.createdDt}</Td>
            <Td>{shop.productNumber}</Td>
            <Td>{shop.orderCount}</Td>
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

export default ShopBoard;

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

  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr;
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
  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr;

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