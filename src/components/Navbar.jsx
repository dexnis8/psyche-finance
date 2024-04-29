/* eslint-disable react/prop-types */
import { Backdrop } from "@mui/material";
import { Icon } from "./Icon";
import { Sidebar } from "./Sidebar";
import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ title }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showSideBar}
        onClick={() => setShowSideBar(false)}
      >
        <div className=" w-1/2 absolute  shadow-card right-0 overflow-y-scroll z-5    0 h-[100vh] top-0">
          <Sidebar />
        </div>
      </Backdrop>
      <div className="flex items-center bg-white justify-between pl-2 pr-5 p-3">
        <div className="flex gap-x-2 ">
          <span onClick={() => navigate("/")} className="lg:hidden sm:block">
            <Icon src="/assets/icons/logo.png" alt="psyche-logo" />
          </span>
          <h3 className="hidden capitalize lg:block text-xl font-semibold text-black-ercas">
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-5">
          <div className="p-2 hidden sm:block  border rounded-full bg-grey-100">
            <Icon src="/assets/icons/notification.png" alt="notify" />
          </div>
          <div className="hidden sm:flex gap-2 items-center py-2 pl-5 pr-3 bg-grey-200 rounded-full">
            <h4>Isaac</h4>

            {/* <Icon src="/assets/icons/notification.png" alt="notify" /> */}
            <span className="h-[30px] w-[30px] rounded-full bg-primary-200 "></span>
          </div>
          <span
            onClick={() => setShowSideBar(true)}
            className="lg:hidden block md:block"
          >
            <MenuOpenIcon  />
          </span>
        </div>
      </div>
    </>
  );
};
