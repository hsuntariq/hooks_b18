import React from "react";

const Circuits = () => {
  let text = "fsdfsdfsdf";

  //   let first = text && "Salam";
  //   let second = text || "Wa laikum Salam";

  return (
    <>
      <div className="container text-center mx-auto text-4xl">
        {text ? "Salam" : "Wa laikum salam"}
      </div>
    </>
  );
};

export default Circuits;
