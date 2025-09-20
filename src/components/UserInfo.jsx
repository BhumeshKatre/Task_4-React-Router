import React from 'react';
import Logo from '/imgs/logo1.jpg'


const UserInfo = () => {
  const people = [
    {
      name: "Aarav Mehta",
      age: 28,
      dob: "1997-04-15",
      gender: "Male",
      occupation: "Software Engineer",
      image: "https://example.com/images/aarav.jpg"
    },
    {
      name: "Diya Sharma",
      age: 32,
      dob: "1993-11-02",
      gender: "Female",
      occupation: "UX Designer",
      image: "https://example.com/images/diya.jpg"
    },
    {
      name: "Kabir Singh",
      age: 40,
      dob: "1985-07-21",
      gender: "Male",
      occupation: "Doctor",
      image: "https://example.com/images/kabir.jpg"
    },
    {
      name: "Riya Patel",
      age: 25,
      dob: "2000-01-10",
      gender: "Female",
      occupation: "Marketing Specialist",
      image: "https://example.com/images/riya.jpg"
    },
    {
      name: "Aditya Verma",
      age: 35,
      dob: "1990-08-05",
      gender: "Male",
      occupation: "Product Manager",
      image: "https://example.com/images/aditya.jpg"
    },
    {
      name: "Sneha Kulkarni",
      age: 29,
      dob: "1996-03-22",
      gender: "Female",
      occupation: "Data Analyst",
      image: "https://example.com/images/sneha.jpg"
    },
    {
      name: "Rahul Deshmukh",
      age: 38,
      dob: "1987-06-18",
      gender: "Male",
      occupation: "Architect",
      image: "https://example.com/images/rahul.jpg"
    },
    {
      name: "Neha Joshi",
      age: 31,
      dob: "1994-09-30",
      gender: "Female",
      occupation: "HR Manager",
      image: "https://example.com/images/neha.jpg"
    },
    {
      name: "Vikram Rao",
      age: 45,
      dob: "1980-12-12",
      gender: "Male",
      occupation: "Lawyer",
      image: "https://example.com/images/vikram.jpg"
    },
    {
      name: "Tanvi Nair",
      age: 27,
      dob: "1998-05-25",
      gender: "Female",
      occupation: "Content Writer",
      image: "https://example.com/images/tanvi.jpg"
    }
  ];
  return (
    <div className='text-center py-5 '>
       
      <h1 className='font-bold text-3xl '>OUR USER</h1>
      <div className="flex justify-center mb-3  ">
        <div className="md:w-10 w-15 h-1 shadow bg-green-900 mb-2"></div>
        <div className="md:w-30 w-15 h-1 bg-white mb-2"></div>
      </div>

      <div className='grid md:grid-cols-4 gap-3'>

        {
          people.map((item, indx) => (
            <div className='flex flex-col justify-center items-center border p-2 bg-blue-200 rounded-2xl'>
              <img src={Logo} alt="" className='w-40 h-40 rounded-full' />
              <div>
                <h2 className='font-bold text-xl'>{item.name}</h2>
                <p>{item.occupation }</p>
              </div>
            </div>
          ))
        }
        
       </div>

    </div>
  );
}

export default UserInfo;
