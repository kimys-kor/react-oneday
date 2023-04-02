import { FC, useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";

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
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={setPage}
      />
    </div>
  );
};

export default Paging;
