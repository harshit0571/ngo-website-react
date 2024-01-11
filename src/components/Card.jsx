import React from "react";

const Card = ({ heading, img, para, desc }) => {
  return (
    <div className="w-[250px] bg-red-200 max-h-[450px] min-h-[300px] gap-5 flex flex-col items-center justify-between py-5">
      <div className="items-start w-[90%]">
        <h1 className="text-2xl text-gray-800 font-bold">{heading}</h1>
      </div>

      <img src={img} className="w-[90%]  h-[150px]" />
      <p className=" w-[90%] ">{para}</p>
      <p className=" w-[90%]">{desc}</p>
    </div>
  );
};

export default Card;
