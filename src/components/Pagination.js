import React, { useState } from "react";

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const previoushandler = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const nexthandler = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <>
      <div className="w-full flex justify-center mt-8">
        <button
          className="p-2
         border-2
         border-r-0
         rounded-l-xl
         font-bold
         hover:scale-110 "
          onClick={previoushandler}
        >
          Previous
        </button>
        <button
          className="p-2
         border-2
         font-bold
         "
        >
          {pageNumber}
        </button>
        <button
          className="p-2
         border-2
         border-l-0
         rounded-r-xl
         font-bold
         hover:scale-110"
          onClick={nexthandler}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
