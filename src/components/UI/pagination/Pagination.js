import React from "react";
import { getPagesArray } from "../../../utils/pages";
import MyButton from "../button/MyButton";

const Pagination = ({ totalPages, changePage, page }) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p, index) => (
        <MyButton
          key={p}
          onClick={() => changePage(p)}
          className={
            page === p ? "my-btn__pages page__current" : "my-btn__pages"
          }
        >
          {p}
        </MyButton>
      ))}
    </div>
  );
};

export default Pagination;
