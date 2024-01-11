import React, { useEffect, useState } from "react";
import LoggedIn from "../components/LoggedIn";
import SignUp from "../components/SignUp";
import axios from "axios";

const Login = ({ User, setUser }) => {
  const [current, setcurrent] = useState({ session: null });
  // const axiosInstance = axios.create({
  //   withCredentials: true,
  // });

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkSession = async () => {
      const res = await axios.get("http://localhost:8000/user/login", {
        withCredentials: true,
      });
      setcurrent(res.data);
      setUser(res.data.session);
      console.log(res.data, "fnfdfjnfjdnfjfdjfdjfdbdjfdfjj");
    };
    checkSession();
  }, []);

  return (
    <div className="flex flex-col mb-20">
      {User && User.username ? (
        <LoggedIn setUser={setUser} user={User} />
      ) : (
        <SignUp setUser={setUser} setcurrent={setcurrent} />
      )}
    </div>
  );
};

export default Login;
