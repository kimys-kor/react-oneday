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
    gap: 0.35rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    /* border-radius: 50%; */
  }

  ul.pagination li:last-child {
    /* border-radius: 50%; */
  }

  ul.pagination li a {
    text-decoration: none;
    color: black;
    width: 1.875rem;
    height: 1.875rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul.pagination li.active {
    border-radius: 50%;
    background-color: #ebebeb;
    color: black;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    border-radius: 50%;
    background-color: #ebebeb;
    color: black;
  }

  .page-selection {
    width: 3rem;
    height: 1.875rem;
    color: #337ab7;
  }
`;
