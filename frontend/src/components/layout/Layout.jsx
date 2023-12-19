import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="relative h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
