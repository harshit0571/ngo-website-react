import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";

const Layout = () => {
  return (
    <div>
      <HeaderNav />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
