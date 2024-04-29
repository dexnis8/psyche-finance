/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "./Icon";

const LinkItem = ({ active, iconSrc, text }) => {
  return (
    <>
      <span
        className={`flex font-normal border  text-base leading-6 pl-2 py-3 border-white hover:border-grey-300 ${
          active
            ? "text-black font-semibold bg-grey-200"
            : "text-grey-300 font-normal"
        }   overflow-hidden items-center ml-3 gap-2`}
      >
        <Icon src={iconSrc} alt={text} />
        {text}
      </span>
    </>
  );
};

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <aside className="flex flex-col justify-between  bg-white h-[100vh]">
        {/* Sidebar Links */}
        <div className="">
          <div
            onClick={() => navigate("/")}
            className=" sticky top-0 hidden  lg:flex items-center py-[15px] px-[15px] "
          >
            <Icon src="/assets/icons/logo.png" alt="psyche-logo" />
          </div>

          <div className=" py-1 px-0 lg:px-[10px]">
            {/* Links starts here */}

            <div className="gap-4 flex pb-4 mb-3 mt-5 flex-col">
              <NavLink to="dashboard" className="">
                {({ isActive = true }) => (
                  <>
                    <LinkItem
                      active={isActive || location.pathname === "/"}
                      iconSrc="/assets/icons/bank.png"
                      text="Dashboard"
                    />
                  </>
                )}
              </NavLink>
              <NavLink to="wallet">
                {({ isActive }) => (
                  <>
                    <LinkItem
                      active={isActive}
                      iconSrc="/assets/icons/wallet.png"
                      text="Wallet"
                    />
                  </>
                )}
              </NavLink>
              <NavLink to="accounts">
                {({ isActive }) => (
                  <>
                    <LinkItem
                      active={isActive}
                      iconSrc="/assets/icons/bank.png"
                      text="Account"
                    />
                  </>
                )}
              </NavLink>
              <NavLink to="payment-link">
                {({ isActive }) => (
                  <>
                    <LinkItem
                      active={isActive}
                      iconSrc="/assets/icons/link-circle.png"
                      text="Payment Link"
                    />
                  </>
                )}
              </NavLink>
              <NavLink to="settings">
                {({ isActive }) => (
                  <>
                    <LinkItem
                      active={isActive}
                      iconSrc="/assets/icons/setting-3.png"
                      text="Settings"
                    />
                  </>
                )}
              </NavLink>
            </div>
          </div>
        </div>

        {/*Sidebar Logout section  */}
        <div className="py-5 px-3 lg:px-6 flex flex-col gap-5 border-x-0 border-b-0 border justify-center">
          <div className="logout flex p-2 hover:underline gap-2 cursor-pointer items-center">
            <Icon src="/assets/icons/logout.png" />
            <p className="text-base text-[#F04438]">Logout</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-[45px] w-[45px] rounded-full overflow-hidden">
              <img
                src="/assets/images/user.png"
                alt="user"
                className="w-full h-full"
              />
            </span>
            <span className="hover:underline text-sm text-grey-300">
              Boluwatife <br />
              Oluwafemi
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};
