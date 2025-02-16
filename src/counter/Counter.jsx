import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    let text = e.target.innerHTML;
    if (text == "Decrease") {
      setCount(count - 1);
    } else if (text == "Reset") {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="container mx-auto text-center p-5  rounded-5 w-full xl:w-1/4 md:w-1/3">
        <h1
          className={`bg-gradient-to-r text-9xl w-max mx-auto bg-clip-text text-transparent  ${
            count < 0
              ? "bg-red-500 animate-bounce"
              : "from-red-600  to-blue-800"
          } `}
        >
          {count}
        </h1>

        <div className="flex my-5 gap-3 justify-center items-center">
          <button
            onClick={handleCount}
            className="px-5 py-2 rounded-full outline-0 bg-gradient-to-r from-red-500 font-semibold text-white to-orange-500 cursor-pointer hover:bg-gradient-to-l"
          >
            Decrease
          </button>
          <button
            onClick={handleCount}
            className="px-5 py-2 rounded-full  bg-gradient-to-r text-black font-semibold hover:bg-yellow-400 transition-all  cursor-pointer hover:bg-gradient-to-l hover:outline-yellow-400 hover:text-white outline outline-yellow-400"
          >
            Reset
          </button>
          <button
            onClick={handleCount}
            className="px-5 py-2 rounded-full outline-0 bg-gradient-to-r from-green-500 font-semibold text-white to-green-800 cursor-pointer hover:bg-gradient-to-l"
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
