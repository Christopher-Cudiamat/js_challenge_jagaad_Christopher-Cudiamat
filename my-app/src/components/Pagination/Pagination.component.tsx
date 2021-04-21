import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ArrowButton from "./ArrowButton/ArrowButton.component";
import { IDataPagination, IPaginationProps } from "./pagination.type";
import "./pagination.style.scss";

const Pagination: React.FC<IPaginationProps> = ({
  setOffset,
  pageCount,
  ItemPerPage,
}) => {
  const [page, setPage] = useState(0);
  const totalPage = Math.ceil(pageCount / ItemPerPage);
  const marginPagesDisplayed = 2;
  const pageRangeDisplayed = 4;

  const handleOnClick = (data: IDataPagination) => {
    setOffset(data.selected * ItemPerPage);
    setPage(data.selected);
  };

  return (
    <div className="pagination__container">
      <ReactPaginate
        previousLabel={<ArrowButton direction={"left"} isHidden={page > 0} />}
        nextLabel={
          <ArrowButton direction={"right"} isHidden={page !== totalPage - 1} />
        }
        breakLabel={"..."}
        pageCount={totalPage}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={handleOnClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Pagination;
