import React, { useState } from "react";
import UseGlobal from "../hooks/UseGlobal";
import LoggedIn from "../components/LoggedIn";
import SignUp from "../components/SignUp";

const Login = ({ User, setUser }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);
  return (
    <div className="flex flex-col mb-20">
      {User.name ? (
        <LoggedIn setUser={setUser} user={User} />
      ) : (
        <SignUp setUser={setUser} />
      )}
    </div>
  );
};

export default Login;
