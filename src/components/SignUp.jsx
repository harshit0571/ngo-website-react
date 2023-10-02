import React, { useState } from "react";

const SignUp = ({ setUser }) => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [country, setcountry] = useState("");
  return (
    <div className="flex flex-col mb-10 items-center justify-center mt-10">
      <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 border-black gap-10">
        <div className="flex flex-col w-full items-center gap-5">
          <h1 className="text-red-500 font-bold text-3xl">LOGIN</h1>
          <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
            Name:{" "}
            <input
              type="text"
              className="border-2 px-1 py-2 text-black font-sans border-black"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
            User Name:{" "}
            <input
              type="text"
              className="border-2 px-1 py-2 text-black font-sans border-black"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>

          <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
            Password:{" "}
            <input
              type="password"
              className="border-2 px-1 py-2 text-black font-sans border-black"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <button
            onClick={() => {
              setUser({ name: name, username: username });
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
