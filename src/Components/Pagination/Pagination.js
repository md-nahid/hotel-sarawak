import React from 'react';
import ReactPaginate from 'react-paginate';
import Wrapper from './Pagination.styled';
import { Icon } from '@iconify/react';

export default function Pagination({ Data, prodPerpage, onPageChange, pagesVisited }) {
  const pageCount = Math.ceil(Data.length / prodPerpage);
  return (
    <Wrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="text-xl text-center sm:text-left font-semibold">
          <p>
            Showing <span className="mr-3 ml-3">{pagesVisited + 1}</span>-
            <span className="ml-3 mr-3">
              {pagesVisited + prodPerpage > Data.length ? Data.length : pagesVisited + prodPerpage}
            </span>
            of
            <span className="ml-3">{Data.length}</span>
          </p>
        </div>
        <div className="paginationContainer mt-4 sm:mt-0">
          <ReactPaginate
            breakLabel="..."
            previousLabel={<Icon icon="akar-icons:chevron-left" />}
            nextLabel={<Icon icon="akar-icons:chevron-right" />}
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName={'pagination'}
            previousLinkClassName={'prevBtn'}
            nextLinkClassName={'nextBtn'}
            disabledClassName={'disabledBtn'}
            activeClassName={'activeBtn'}
          />
        </div>
      </div>
    </Wrapper>
  );
}
