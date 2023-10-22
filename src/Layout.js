import React, { useEffect, useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import UseGlobal from "./hooks/UseGlobal";

const Layout = ({ User, setUser }) => {
  const { pathname } = useLocation();
  // Automatically scrolls to top whenever pathname changes
  console.log(User, "layout");

  return (
    <div>
      <HeaderNav />
      <Header User={User} path={pathname} />
      <Outlet User={User} setUser={setUser} />
      <Footer />
    </div>
  );
};

export default Layout;
