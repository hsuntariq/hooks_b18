import React, { useState } from "react";
import SingleBday from "./SingleBday";
import { bdays } from "./data";

const Bday = () => {
  const [bdaysData, setBdaysData] = useState(bdays);

  const removeAll = () => {
    // if (bdaysData.length == 0) {
    //   setBdaysData(bdays);
    // } else {
    //   setBdaysData([]);
    // }

    bdaysData.length == 0 ? setBdaysData(bdays) : setBdaysData([]);
  };

  const remove = (id) => {
    const newItems = bdaysData.filter((item, index) => {
      return item.id !== id;
    });

    setBdaysData(newItems);
  };

  return (
    <>
      <div className="w-full xl:w-1/3 lg:w-[40%] sm:w-1/2 shadow-lg rounded-md p-5 mx-auto">
        <h1 className="text-center text-4xl capitalize">
          {bdaysData.length} Birtdays today
        </h1>
        {bdaysData.map((cod, index) => {
          return <SingleBday {...cod} key={index} r={remove} />;
        })}

        <button
          onClick={removeAll}
          className={`w-1/2 text-white font-semibold  cursor-pointer block mx-auto p-2 rounded-md  ${
            bdaysData.length == 0
              ? "bg-yellow-400 hover:bg-yellow-500"
              : "bg-red-500 hover:bg-red-700"
          }`}
        >
          {bdaysData.length < 0 ? "Refresh All" : "Remove All"}
        </button>
      </div>
    </>
  );
};

export default Bday;
