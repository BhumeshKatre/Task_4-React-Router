import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaFax } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { MdAddCall } from "react-icons/md";

const Contact = () => {
  const contactDetails = [
    {
      icon: FaLocationDot,
      type: 'Location',
      label: 'Our Main Office',
      value: 'Soho, 94 Broadway St,',
      value1:'New York, NY 1001'

    },
    {
      icon: MdAddCall,
      type: 'Phone',
      label: 'Phone Number',
      value: '234-9876-5400 ,',
      value1: '888-0123-4567 (Toll Free)',
    },
    {
      icon: FaFax,
      type: 'Fax',
      label: 'Fax',
      value: '1-234-567-8900',
      value1: '1-234-567-8900',
    },
    {
      icon: IoIosMailUnread,
      type: 'Email',
      label: 'Email',
      value: 'hello@theme.com',
      value1: 'hello@theme.com',
    },
  ];
  return (
    <div className='flex h-full md:gap-3 md:h-[79vh] md:w-[40vw] mx-auto md:items-center px-6 md:justify-between flex-col md:flex-row  rounded-2xl '>
      {/* <div className='grid md:grid-cols-2 gap-4 md:justify-center  p-4 md:order-1    '>
        {
          contactDetails.map((contact, indx) => (
            <div
              key={indx}
              className='p-4  bg-white flex flex-col  items-center justify-center text-cetner shadow-md rounded-md '>
              <contact.icon className='text-3xl  mb-2 font-mono text-blue-400' />

              <h3 className='font-semibold font-serif '>{contact.label} </h3>
              <p>{contact.value}</p>
              <p>{contact.value1}</p>
            </div>
          ))
        }
        
       
      </div> */}
      <div className=' md:flex-1 px-4 py-8 md:h-[50vh] md:w-[50vw]  flex flex-col items-center justify-center md:order-2  bg-blue-300 rounded-md '>
        <h1 className='text-white font-extrabold font-serif text-3xl'>Contact Us </h1>

        <div className='mt-2'>
          <form action="">
            
            <div>
              <input
                className='p-2 bg-white rounded-md md:w-80'
                type="text"
                placeholder='Enter Your name here'
              />
            </div>

            
            <div className='mt-2'>
              <input
                className='p-2 bg-white rounded-md md:w-80'
                placeholder='Enter a valid email address '
                type="text" />
            </div>

            <div className='mt-2'>
              <textarea
                className='p-2 bg-white rounded-md md:w-80'
                rows={3}
                cols={24}
                name="" id=""></textarea>
            </div>

            <div className='text-center mt-4'>
              <button className='bg-transparent border-2 border-white font-semibold py-2 px-4 hover:bg-blue-400'>
                SUBMIT
              </button>
           </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
