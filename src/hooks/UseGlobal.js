import React from "react";

const UseGlobal = () => {
  let User = {
    name: null,
    username: null,
    country: null,
    status: null,
  };
  const updateUser = (user) => {
    User = user;
    return User;
  };
  const getUser = () => {
    return User;
  };
  return { getUser, updateUser };
};

export default UseGlobal;
