import React, { useState } from "react";
import UseGlobal from "../hooks/UseGlobal";
import LoggedIn from "../components/LoggedIn";
import SignUp from "../components/SignUp";

const Login = ({ User, setUser }) => {
  return (
    <div className="flex flex-col mb-[120px]">
      {User.name ? (
        <LoggedIn setUser={setUser} user={User} />
      ) : (
        <SignUp setUser={setUser} />
      )}
    </div>
  );
};

export default Login;
