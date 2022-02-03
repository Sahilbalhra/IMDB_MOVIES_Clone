import React from 'react';

const Banner = () => {
  return <div className={`bg-[url("https://stylecaster.com/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-2.jpg")]
  h-[40vh]
  md:h-[60vh]
  md:w-[100vw] 
  bg-cover 
  flex items-end 
  justify-center`}>
      <div className='text-3xl text-white p-4 bg-gray-900 bg-opacity-50 w-full flex justify-center'>Spider-Man:No way home</div>
  </div>;
};

export default Banner;
