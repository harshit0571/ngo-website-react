import React from "react";

const UseGlobal = () => {
  let User = {
    username: null,
    full_name: null,
    address: null,
    city: null,
    state: null,
    email: null,
    phone_number: null,
    password: null,
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
