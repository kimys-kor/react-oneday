import { FC, useState } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";

// activePage : 현재 페이지
// itemsCountPerPage : 한 페이지 당 보여줄 아이템 수
//  totalItemsCount : 총 아이템 수
// pageRangeDisplayed : paginator에서 보여줄 페이지 범위
// prevPageText : 이전 페이지로 가기를 나타내는 텍스트
// nextPageText : 다음 페이지로 가기를 나타내는 텍스트
// onChange : 페이지가 바뀔 때 핸들링하는 함수

interface PagingProps {
  page: number;
  count: number;
  setPage: (pageNumber: number) => void;
}

const Paging: FC<PagingProps> = ({ page, count, setPage }) => {
  return (
    <Pagingbox>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={setPage}
      />
    </Pagingbox>
  );
};

export default Paging;

const Pagingbox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
    display: flex;
    justify-content: center;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
