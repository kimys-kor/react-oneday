import React, { useState } from "react";
import styled from "styled-components";
import Paging from "./Paging";

const Flexbox = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  text-align: center;
  margin-bottom: 20px;
`;

const Tr = styled.tr``;

const Title = styled.tr`
  font-size: 18px;
`;

const Td = styled.td`
  border-bottom: 1px solid #ddd;
  padding: 8px;
  height: 24px;
`;

const Tdflex = styled.td`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  padding: 8px;
  height: 24px;
`;

const Tdinput = styled(Td)`
  text-align: center;
`;

const Checkbox = styled.input`
  margin: 0;
`;

const Modifybutton = styled.div`
  width: 50px;
  height: 30px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #eae13a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #e0d90f;
  }
`;

const Deletebutton = styled.div`
  width: 50px;
  height: 30px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2rem;
  background-color: #ea3a3a;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #d11812;
  }
`;

function Board() {
  const [isCheckedAll, setCheckedAll] = useState(false);
  const [isCheckedItems, setCheckedItems] = useState(Array(10).fill(false));

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checked: boolean = event.target.checked;
    setCheckedAll(checked);
    setCheckedItems(Array(10).fill(checked));
  };

  const handleCheckItem = (index: number): void => {
    const newCheckedItems: boolean[] = [...isCheckedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    const checkedAll: boolean = newCheckedItems.every((item: boolean) => item);
    setCheckedAll(checkedAll);
  };

  const setPage = function () {
    console.log("온체인지");
  };

  return (
    <Flexbox>
      <Table>
        <thead>
          <Title>
            <Tdinput>
              <Checkbox
                type="checkbox"
                checked={isCheckedAll}
                onChange={handleCheckAll}
              />
            </Tdinput>
            <Td>번호</Td>
            <Td>상점명</Td>
            <Td>사업자번호</Td>
            <Td>대표자명</Td>
            <Td>주소</Td>
            <Td>전화번호</Td>
            <Td>...</Td>
          </Title>
        </thead>
        <tbody>
          {[...Array(15)].map((_, index) => (
            <Tr key={index}>
              <Tdinput>
                <Checkbox
                  type="checkbox"
                  checked={isCheckedItems[index]}
                  onChange={() => handleCheckItem(index)}
                />
              </Tdinput>
              <Td>{index + 1}</Td>
              <Td>용만이네상점{index + 1}</Td>
              <Td>운영자</Td>
              <Td>2022-10-19</Td>
              <Td>0</Td>
              <Td>0</Td>
              <Tdflex>
                <Modifybutton>수정</Modifybutton>
                <Deletebutton>삭제</Deletebutton>
              </Tdflex>
            </Tr>
          ))}
        </tbody>
      </Table>
      <Paging page={1} count={15} setPage={setPage}></Paging>
    </Flexbox>
  );
}

export default Board;
