import React from "react";

const Pagination = (props) => {
  let {page,next,prev}=props;
 
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
          onClick={prev}
        >
          Previous
        </button>
        <button
          className="p-2
         border-2
         font-bold
         "
        >
          {page}
        </button>
        <button
          className="p-2
         border-2
         border-l-0
         rounded-r-xl
         font-bold
         hover:scale-110"
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
