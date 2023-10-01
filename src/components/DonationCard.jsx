import React, { useState } from "react";

const DonationCard = () => {
  const [Donation, setDonation] = useState("");
  return (
    <div className="flex flex-col items-center justify-around gap-5 mb-20 w-full">
      <h1 className="font-sans text-2xl mt-5">Make A One-Time Gift</h1>
      <div className="flex flex-row justify-around gap-5 mt-5 flex-wrap w-[80%]">
        <button
          className="border-0 bg-red-500 py-5 px-5 w-[40%] focus:outline-none hover:bg-red-200 hover:text-red-500 rounded text-lg "
          onClick={() => {
            setDonation("$10");
          }}
        >
          $10
        </button>
        <button
          className="border-0 bg-red-500 py-5 px-5 w-[40%] focus:outline-none hover:bg-red-200 hover:text-red-500 rounded text-lg "
          onClick={() => {
            setDonation("$20");
          }}
        >
          $20
        </button>
        <button
          className="border-0 bg-red-500 py-5 px-5 w-[40%] focus:outline-none hover:bg-red-200 hover:text-red-500 rounded text-lg "
          onClick={() => {
            setDonation("$30");
          }}
        >
          30$
        </button>
        <button
          className="border-0 bg-red-500 py-5 px-5 w-[40%] focus:outline-none hover:bg-red-200 hover:text-red-500 rounded text-lg "
          onClick={() => {
            setDonation("$40");
          }}
        >
          $40
        </button>
      </div>
      <input
        className="w-[60%] mt-10 py-3 px-10 outline-2 outline-red-500 border-2 border-black"
        type="text"
        value={Donation}
        onChange={(e) => {
          setDonation(e.target.value);
        }}
        placeholder="donate"
      />
      <button
        className="border-0 bg-red-500 py-5 px-10 focus:outline-none hover:bg-red-200 hover:text-red-500 rounded text-lg "
        onClick={() => {
          alert("thanks for donating :)");
        }}
      >
        Donate
      </button>
    </div>
  );
};

export default DonationCard;