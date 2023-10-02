import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";

const Layout = () => {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(pathname);
  }, [pathname]);

  return (
    <div>
      <HeaderNav />
      <Header path={pathname} user={" log-in"} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
