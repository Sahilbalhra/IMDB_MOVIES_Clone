import React from "react";

const MoviesItem = (props) => {
  let {title,Image}=props;
  return (
    <div className="justify-center ">
      <div
        className={`bg-[url(https://image.tmdb.org/t/p/w500${Image})] 
        h-[28vh]
        w-[30vw]
        md:h-[38vh]
        md:w-[15vw]
        m-4
        bg-center
        bg-cover
        rounded-xl
        flex 
        items-end
        hover:scale-110 
        ease-out duration-300
        ease-in duration-100`}
      >
        <div className=" w-full bg-gray-900 text-white py-2 text-center rounded-b-xl text-xl font-bold">
          {title}
        </div>
      </div>
    </div>
  );
};

export default MoviesItem;
