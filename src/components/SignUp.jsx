import React, { useState } from "react";

const SignUp = ({ setUser }) => {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [country, setcountry] = useState("");
  const [True, setTrue] = useState(true);
  return (
    <div>
      {True ? (
        <div className="flex  flex-col mb-10 items-center justify-center mt-10">
          <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)] gap-10">
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
                  required
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
                  required
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Password:{" "}
                <input
                  type="password"
                  required
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <button
                onClick={() => {
                  setUser({ name: name, username: username });
                }}
              >
                Log in
              </button>
              <button
                onClick={() => {
                  setTrue(!True);
                }}
                className="bg-red-600"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col mb-10 items-center justify-center mt-10">
          <div className="flex flex-col w-[98%] md:w-[50%] xl:w-[40%] pb-5 justify-between items-center border-2 lg:p-4 pt-7 shadow-[0_20px_50px_rgba(0,0,0,0.7)]  gap-10">
            <div className="flex flex-col w-full items-center gap-5">
              <h1 className="text-red-500 font-bold text-3xl">Register</h1>
              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Name:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={name}
                  required
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
                  required
                  onChange={(e) => {
                    setusername(e.target.value);
                  }}
                />
              </div>
              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Country:{" "}
                <input
                  type="text"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                  value={country}
                  required
                  onChange={(e) => {
                    setcountry(e.target.value);
                  }}
                />
              </div>

              <div className="flex w-[80%] items-baseline justify-between text-red-600 font-bold">
                Password:{" "}
                <input
                  required
                  type="password"
                  className="border-2 px-1 py-2 text-black font-sans border-black"
                />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row justify-center items-center gap-5">
              <button
                onClick={() => {
                  setUser({ name: name, username: username, country: country });
                }}
              >
                Register
              </button>
              <button
                onClick={() => {
                  setTrue(!True);
                }}
                className="bg-red-600"
              >
                Already Have An account?
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
