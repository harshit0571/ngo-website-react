import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderNav from "./components/HeaderNav";
import UseGlobal from "./hooks/UseGlobal";

const Layout = () => {
  const { pathname } = useLocation();

  const { getUser } = UseGlobal();
  const [User, setUser] = useState(getUser());
  // Automatically scrolls to top whenever pathname changes

  return (
    <div>
      <HeaderNav />
      <Header user={User} />
      <Outlet User={User} setUser={setUser} />
      <Footer />
    </div>
  );
};

export default Layout;
