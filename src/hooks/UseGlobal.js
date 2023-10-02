import React from "react";

const UseGlobal = () => {
  let User = {
    name: "harshit",
    username: "harshit0571",
    country: "india",
    status: "active",
  };
  const updateUser = (user) => {
    User = user;
    return User;
  };
  const getUser = () => {
    return User;
  };
  const check = () => {
    console.log(User);
  };
  return { getUser, updateUser, check };
};

export default UseGlobal;
