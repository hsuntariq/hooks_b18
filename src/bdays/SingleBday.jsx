import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const SingleBday = ({ id, name, age, image, r }) => {
  return (
    <>
      <div className="flex p-4 shadow my-4 justify-between items-center">
        <div className="flex gap-3 items-center">
          <img
            src={image}
            alt=""
            className="w-[70px] object-cover h-[70px] rounded-full"
          />
          <div className="flex flex-col">
            <h5 className="text-xl"> {name} </h5>
            <p className="text-gray-500"> {age} years old</p>
          </div>
        </div>
        <div
          onClick={() => r(id)}
          className="w-[50px] flex justify-center items-center text-white h-[50px] rounded-full bg-red-500 cursor-pointer hover:bg-red-700"
        >
          <FaTrashAlt size={20} />
        </div>
      </div>
    </>
  );
};

export default SingleBday;
