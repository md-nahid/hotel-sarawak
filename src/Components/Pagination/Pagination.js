import React from "react";
import ReactPaginate from "react-paginate";
import Wrapper from "./Pagination.styled";
import { Icon } from "@iconify/react";

export default function Pagination({ Data, userPerPage, changePage, pagesVisited }) {
  const pageCount = Math.ceil(Data.length / userPerPage);
  return (
    <Wrapper>
      <div className="grid grid-cols-2 justify-between">
        <div className="text-xl font-semibold">
          <p>
            Showing <span className="mr-3 ml-3">{pagesVisited + 1}</span>-
            <span className="ml-3 mr-3">{pagesVisited + userPerPage > Data.length ? Data.length : pagesVisited + userPerPage}</span>
            of
            <span className="ml-3">{Data.length}</span>
          </p>
        </div>
        <div className="paginationContainer">
          <ReactPaginate
            breakLabel="..."
            previousLabel={<Icon icon="akar-icons:chevron-left" />}
            nextLabel={<Icon icon="akar-icons:chevron-right" />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"prevBtn"}
            nextLinkClassName={"nextBtn"}
            disabledClassName={"disabledBtn"}
            activeClassName={"activeBtn"}
          />
        </div>
      </div>
    </Wrapper>
  );
}
