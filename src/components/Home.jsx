import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import HeroImg from '/imgs/hero1.png'
const Home = () => {
  return (
    <div className='flex md:gap-3 h-[79vh] md:w-[90vw] mx-auto md:items-center px-6 md:justify-between flex-col md:flex-row bg-blue-300   rounded-2xl'>
      <div className='flex flex-col  md:justify-center  p-4 md:order-1 order-2 '>
        <h1 className='text-2xl md:text-4xl text-white font-bold mb-2'>Quality Education  <br />Delivered. </h1>
        <p className='text-md/6 mb-3 line-clamp-1.5'>Master new skills at your own pace, <br /> with world-class courses available anytime, anywhere.</p>

        <div className=''>
          <button className='text-white bg-green-900 py-2 px-4 hover:bg-green-700 md:mb-2 '>GET STARTED NOW → </button>
          <button className='lowercase bg-white py-2 px-4 hover:bg-gray-300 mt-1'> VIEW COURESE →</button></div>
      </div>
      <div className=' md:flex-1 h-[30vh]  flex items-center justify-center md:order-2 order-1'>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
}

export default Home;
