import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <button
          className="p-2
         border-2
         border-r-0
         rounded-l-xl
         font-bold
         hover:scale-110 "
        >
          Previous
        </button>
        <button
          className="p-2
         border-2
         font-bold
         "
        >
          1
        </button>
        <button
          className="p-2
         border-2
         border-l-0
         rounded-r-xl
         font-bold
         hover:scale-110"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
