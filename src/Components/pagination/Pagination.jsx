import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination mt-28">
      
      <div>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`page-button ${currentPage === index + 1 ? 'active' : ''}
            border-2 border-gray-600 px-3 py-1 mx-2 rounded-lg font-extrabold transition-all duration-150
            ${currentPage === index +1 ? "bg-gray-600 text-gray-50" : "text-gray-600"}            
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
