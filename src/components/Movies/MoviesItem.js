import React, { useState } from "react";

const MoviesItem = (props) => {
  const [hover, setHover] = useState("");
  
  let { title, Image ,add} = props;
  let id = props.id;

  const onIDChange=()=>{
    add(id)
  }
 
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
        ease-in duration-100
        relative`}
        onMouseEnter={() => {
          setHover(id);
          console.log(id);
          console.log(hover);
        }}
        onMouseLeave={() => setHover("")}
      >
        {hover === id && (
          <div
            className="absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl cursor-pointer"
            onClick={onIDChange}
          >
            ❤️
          </div>
        )}
        <div className=" w-full bg-gray-900 text-white py-2 text-center rounded-b-xl text-xl font-bold">
          {title}
        </div>
      </div>
    </div>
  );
};

export default MoviesItem;
