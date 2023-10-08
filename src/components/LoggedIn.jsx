import React, { useState } from "react";
import UseGlobal from "../hooks/UseGlobal";

const LoggedIn = ({ user, setUser }) => {
  const { getUser, updateUser, check } = UseGlobal();
  const [name, setname] = useState(user.name);
  const [username, setusername] = useState(user.username);
  const [country, setcountry] = useState(user.country);

  return (
    <div className="flex flex-col mt-7 justify-center gap-5 items-center">
      <h1>
        Logged in as: <i class="fa fa-user" aria-hidden="true"></i>
        {name}
      </h1>

      <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)]  gap-10">
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
              required
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
              required
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
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <button
            onClick={() => {
              setUser({ name: name, country: country, username: username });
              alert("changes updated :)");
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
