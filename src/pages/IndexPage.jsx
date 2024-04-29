/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const IndexPage = () => {
  const [titleApp, setTitleApp] = useState("Home");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setTitleApp("dashboard");
        break;
      case "/accounts":
        setTitleApp("accounts");
        break;
      case "/payment-link":
        setTitleApp("payment link");
        break;
      case "/settings":
        setTitleApp("settings");
        break;
      case "/wallet":
        setTitleApp("wallet");
        break;
      default:
        setTitleApp("Dashboard");
        break;
    }
  }, [location, setTitleApp]);
  return (
    <>
      <div className="max-w-[1440px] border mx-auto shadow-card">
        <div className="flex flex-col  lg:grid lg:grid-cols-5 xl:grid-cols-6  ">
          <div className="sidebar hidden pb-5 bg-white  lg:block h-[100vh] border-[#000]  sticky  top-0">
            <div className=" ">
              <Sidebar />
            </div>
          </div>
          <div className="navbar-content  lg:col-span-4 xl:col-span-5">
            <div className="navbar   z-20 sticky top-0">
              {" "}
              <Navbar title={titleApp} />
            </div>
            <div className=" px-2 py-3 sm:py-5">
              <h1 className="lg:hidden capitalize text-xl sm:text-2xl font-bold text-black-ercas mb-2">
                {titleApp}
              </h1>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
