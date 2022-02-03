import React from "react";

const MoviesItem = () => {
  return (
    <div className="m-8 flex flex-wrap justify-center ">
      <div
        className={`bg-[url("https://stylecaster.com/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-2.jpg")] 
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
          Tile
        </div>
      </div>
      <div
        className={`bg-[url("https://stylecaster.com/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-2.jpg")] 
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
          Tile
        </div>
      </div>
      
    </div>
  );
};

export default MoviesItem;
