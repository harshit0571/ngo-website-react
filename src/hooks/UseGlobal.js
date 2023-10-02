import React from "react";

const UseGlobal = () => {
  let User = null;
  const changeUser = (user) => {
    User = user;
  };
  const getUser = () => {
    return User;
  };
  return { getUser, changeUser };
};

export default UseGlobal;
