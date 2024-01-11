import React, { useState } from "react";
import UseGlobal from "../hooks/UseGlobal";
import axios from "axios";

const LoggedIn = ({ user, setUser }) => {
  const { getUser, updateUser, check } = UseGlobal();
  const [name, setname] = useState(user.full_name || "");
  const [username, setusername] = useState(user.username || "");
  const [city, setcity] = useState(user.city || "");
  const [state, setstate] = useState(user.state || "");
  const [phone, setphone] = useState(user.phone_number || "");
  const [address, setaddress] = useState(user.address || "");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState(user.email || "");

  const logout = async () => {
    const res = await axios.get("http://localhost:8000/user/logout", {
      withCredentials: true,
    });
    console.log(res);
    setUser({
      username: null,
      full_name: null,
      address: null,
      city: null,
      state: null,
      email: null,
      phone_number: null,
      password: null,
    });
  };

  return (
    <div className="flex flex-col mt-7 justify-center gap-5 items-center">
      <h1>
        Logged in as: <i className="fa fa-user" aria-hidden="true"></i>
        {username}
      </h1>

      <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)] gap-10">
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
            City:{" "}
            <input
              type="text"
              className="border-2 px-1 py-2 text-black font-sans border-black"
              value={city}
              onChange={(e) => {
                setcity(e.target.value);
              }}
              required
            />
          </div>
          {/* Additional fields */}
          <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
            State:{" "}
            <input
              type="text"
              className="border-2 px-1 py-2 text-black font-sans border-black"
              value={state}
              onChange={(e) => {
                setstate(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
            Phone:{" "}
            <input
              type="text"
              className="border-2 px-1 py-2 text-black font-sans border-black"
              value={phone}
              onChange={(e) => {
                setphone(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
            Address:{" "}
            <input
              type="text"
              className="border-2 px-1 py-2 text-black font-sans border-black"
              value={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <button onClick={() => {}}>Update</button>
          <button
            onClick={() => {
              logout();
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
