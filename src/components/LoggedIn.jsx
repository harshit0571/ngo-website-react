import React, { useState } from "react";
import UseGlobal from "../hooks/UseGlobal";

const LoggedIn = ({ setUser }) => {
  const { getUser, updateUser, check } = UseGlobal();
  const user = getUser();
  const [name, setname] = useState(user.name);
  const [username, setusername] = useState(user.username);
  const [country, setcountry] = useState(user.country);

  return (
    <div className="flex flex-col mt-7 justify-center gap-5 items-center">
      <h1>
        Logged in as: <i class="fa fa-user" aria-hidden="true"></i>
        {name}
      </h1>

      <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 border-black gap-10">
        <div className="flex flex-col w-full items-center gap-5">
          <img
            src="assets/user.jpg"
            className="w-[150px] mt-5 h-[150px] rounded-[50%] border-2 border-black"
          />
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
            Country:{" "}
            <input
              type="text"
              className="border-2 px-1 py-2 text-black font-sans border-black"
              value={country}
              onChange={(e) => {
                setcountry(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <button
            onClick={() => {
              check();
            }}
          >
            Update
          </button>
          <button
            onClick={() => {
              setUser({ name: null, country: null, username: null });
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
