import React from 'react';
import Logo from '/imgs/logo1.jpg'
import { students } from '../Data';

const UserInfo = () => {
  
  return (
    <div className='text-center py-5 '>
       
      <h1 className='font-bold text-3xl '>OUR USER</h1>
      <div className="flex justify-center mb-3  ">
        <div className="md:w-10 w-15 h-1 shadow bg-green-900 mb-2"></div>
        <div className="md:w-30 w-15 h-1 bg-white mb-2"></div>
      </div>

      <div className='grid md:grid-cols-4 gap-3'>

        {
          students.map((item, indx) => (
            <div
              indx={indx}
              className='flex flex-col justify-center items-center border p-2 bg-blue-200 rounded-2xl'>
              <img src={item.image} alt="" className='w-40 h-40 rounded-full border-2 border-white' />
              <div className='mt-2'>
                <h2 className='font-bold text-xl'>{item.name}</h2>
                <p className='mb-0'><span className='text-sm font-semibold mb-0'>Coures :- {item.course} </span></p>
                <p className='mb-0'><span className='text-sm font-semibold'>Club :- {item.course} </span></p>
              </div>
            </div>
          ))
        }
        
       </div>

    </div>
  );
}

export default UserInfo;
