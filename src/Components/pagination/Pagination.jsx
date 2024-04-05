import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <div>
        Page {currentPage} of {totalPages}
      </div>
      <div>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
