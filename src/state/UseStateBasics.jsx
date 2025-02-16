import React, { useState } from "react";

const UseStateBasics = () => {
  const [title, setTitle] = useState("This is a title");

  const changeTitle = () => {
    if (title == "This is a title") {
      setTitle("This is a new title");
    } else {
      setTitle("This is a title");
    }
  };

  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className=" text-6xl bg-gradient-to-l from-red-600 to to-blue-500 w-max mx-auto bg-clip-text text-transparent font-semibold">
          {title}
        </h1>

        <button
          onClick={changeTitle}
          className="px-5 my-2 cursor-pointer hover:bg-gradient-to-l hover:scale-105 hover:shadow-lg transition-all py-2 rounded-full bg-gradient-to-r from-purple-700 to-yellow-600 text-white"
        >
          Change title
        </button>
      </div>
    </>
  );
};

export default UseStateBasics;
