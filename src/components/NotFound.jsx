import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const HadleBackToHomeBtn = () => {
    navigate('/')
  }
  return (
    <div className='flex justify-between h-[100vh] w-[100vw] items-center'>

      <div className='border p-5 flex flex-col items-center  mx-auto justify-center'>
        <h2 className='text-8xl font-extrabold font-serif '>OOPS!</h2>
        <h3 className='flex font-serif mb-3'>404-Page Not Found</h3>
        <button
          onClick={HadleBackToHomeBtn}
          className='bg-blue-500 hover:bg-blue-700 py-2 px-5 rounded-full text-white font-bold '>Go to HomePage</button>
      </div>
      
    </div>
  );
}

export default NotFound;
