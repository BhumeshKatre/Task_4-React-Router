import React from "react";
import AboutImg from "/imgs/image.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleContinueBtn = () => {
    navigate("/contact");
  };
  return (
    <div className="flex md:gap-3 h-[79vh] md:w-[90vw] mx-auto md:items-center px-6 md:justify-between flex-col md:flex-row bg-blue-300   rounded-2xl">
      <div className="flex flex-col md:w-[70vh]  md:justify-center  p-4 md:order-1 order-2 ">
        <h1 className="text-2xl md:text-4xl text-white font-bold ">
          About Us{" "}
        </h1>
        <div className="flex">
          {" "}
          <div className="md:w-10 w-5 h-1 shadow bg-green-900 mb-2"></div>
          <div className="md:w-30 w-10 h-1 bg-white mb-2"></div>
        </div>
        <p className="text-md/6 mb-3 line-clamp-1.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum,
          alias, in non perferendis autem itaque, voluptate voluptatum delectus
          error consequuntur.
        </p>

        <div className="">
          <button
            onClick={handleContinueBtn}
            className=" bg-white py-2 px-4 hover:bg-gray-300 mt-1"
          >
            {" "}
            Contact Now →
          </button>
        </div>
      </div>
      <div className=" md:flex-1 h-[30vh]  flex items-center justify-center md:order-2 order-1">
        <img src="/public\imgs\hero1.png" alt="" />
      </div>
    </div>
  );
};

export default About;
