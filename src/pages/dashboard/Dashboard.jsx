/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import React from "react";
import { Icon } from "../../components/Icon";

const BalanceDetailsCard = ({ bal = 0.0, curr, bg, symbol }) => {
  return (
    <>
      <div
        className={`shadow-lg ${bg} h-[132px] flex justify-between text-white rounded-lg py-4  px-5`}
      >
        <div>
          <h2 className="font-bold text-2xl">
            {symbol} {bal}.00
          </h2>
          <p className="text-sm mt-1">{curr}</p>
        </div>
        <Icon src="/assets/icons/eye-slash.png" alt="eye-icon" size={24} />
      </div>
    </>
  );
};

const TableHeader = () => {
  return (
    <>
      <div className="w-[1024px] lg:w-full grid grid-cols-6 border bg-black-100 text-white font-medium py-4 px-5">
        <h5 className="">Date</h5>
        <h5 className="">Time</h5>
        <h5 className="">Type</h5>
        <h5 className="">Amount</h5>
        <h5 className="">Reference Number</h5>
        <h5 className="pl-8">Status</h5>
      </div>
    </>
  );
};

const TableRow = ({ data, rowNum }) => {
  return (
    <>
      <div
        className={`w-[1024px] lg:w-full grid grid-cols-6  py-3 text-[#000000] hover:bg-grey-200 font-normal px-5 ${
          rowNum % 2 === 0 ? "bg-white" : "bg-transparent"
        }`}
      >
        <h5 className="">{data.date}</h5>
        <h5 className="">{data.time}</h5>
        <h5 className="flex gap-1 items-center">
          <Icon src={`/assets/icons/${data.icon}.png`} alt={data.type} />
          <span>{data.type}</span>
        </h5>
        <h5 className="">
          {data.currency.toLowerCase() === "usd" ? "$" : "N"}
          {data.amount}
        </h5>
        <h5 className="">{data.reference}</h5>
        <h5 className="pl-8">
          <button
            className={`px-4 capitalize py-1 rounded-full ${
              data.status === "completed"
                ? "bg-[#D1FADF] text-[#12B76A]"
                : data.status === "pending"
                ? "bg-[#FDF3DF] text-[#E5AE40] text-sm font-medium border"
                : data.status === "cancelled"
                ? "bg-[#FEE4E2] text-[#F04438] text-sm font-medium border"
                : null
            } `}
          >
            {data.status}
          </button>
        </h5>
      </div>
    </>
  );
};

export const Dashboard = () => {
  const tabelData = [
    {
      date: "1 Feb, 2020",
      time: "07:24.33",
      type: "Add Money",
      amount: "100,000",
      reference: "USMK6UEDMT",
      status: "completed",
      icon: "add-circle",
      currency: "USD",
    },
    {
      date: "1 Feb, 2020",
      time: "07:24.33",
      type: "Swap",
      amount: "100,000",
      reference: "USMK6UEDMT",
      status: "pending",
      icon: "convert",
      currency: "NGN",
    },
    {
      date: "1 Feb, 2020",
      time: "07:24.33",
      type: "Send Money",
      amount: "100,000",
      reference: "USMK6UEDMT",
      status: "completed",
      icon: "add-circle",
      currency: "USD",
    },
    {
      date: "1 Feb, 2020",
      time: "07:24.33",
      type: "Payment Link",
      amount: "100,000",
      reference: "USMK6UEDMT",
      status: "cancelled",
      icon: "link-circle-2",
      currency: "NGN",
    },
    {
      date: "1 Feb, 2020",
      time: "07:24.33",
      type: "Swap",
      amount: "100,000",
      reference: "USMK6UEDMT",
      status: "pending",
      icon: "convert",
      currency: "USD",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Header */}
        <h5 className="text-lg font-semibold leading-6">Hi Boluwatife 😎</h5>

        {/* Complete your verification */}
        <div className="bg-primary-100 py-2 px-4 border-x-0 border-b-0 border-2 flex flex-col gap-3 border-primary-200">
          <h4 className="font-bold text-lg">
            Complete Your Account Verification
          </h4>
          <p className="sm:w-[70%] text-black-100 text-base leading-6">
            Verify your Account by submitting a valid ID Card and BVN to access
            all our features and protect your account.
          </p>

          <div className="flec-col sm:flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <Icon src="/assets/icons/tick-circle.png" />
              <span className="text-base font-medium text-black-100">
                Bank Verification Number (BVN)
              </span>
            </div>
            <span className="h-1 hidden sm:block w-[50px] border bg-black-100"></span>
            <div className="flex items-center gap-2">
              <Icon src="/assets/icons/tick-circle.png" />
              <span className="text-base font-medium text-black-100">
                Valid Identification Card
              </span>
            </div>
          </div>
        </div>

        {/* Balances */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <BalanceDetailsCard
            bal={1000}
            curr="Nigerian Naira Wallet"
            bg="naira-balance"
            symbol="N"
          />
          <BalanceDetailsCard
            bal={100}
            curr="USDC Wallet"
            bg="dollar-balance"
            symbol="$"
          />
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col gap-4 mt-2">
          <h4 className="font-bold text-lg text-black-100">Quick Actions</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5  gap-3">
            {/* send money */}
            <div className=" cursor-pointer hover:bg-grey-200 hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 px-2  md:px-4 py-3 bg-white rounded-lg flex gap-2 justify-center items-center">
              <Icon src="/assets/icons/convert.png" alt="send money" />
              <span className="text-base leading-6 font-medium text-[#008080]">
                Send Money
              </span>
            </div>

            {/* Add money */}
            <div className=" cursor-pointer hover:bg-grey-200  hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 px-2 md:px-4 py-3 bg-white rounded-lg flex gap-2 justify-center items-center">
              <Icon src="/assets/icons/add-circle.png" alt="add money" />
              <span className="text-base leading-6 font-medium text-[#008000]">
                Add Money
              </span>
            </div>

            {/* Swap */}
            <div className=" cursor-pointer hover:bg-grey-200  hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 px-2 md:px-4 py-3 bg-white rounded-lg flex gap-2 justify-center items-center">
              <Icon src="/assets/icons/convert.png" alt="swap" />
              <span className="text-base leading-6 font-medium text-[#008080]">
                Swap
              </span>
            </div>

            {/* payment link */}
            <div className=" cursor-pointer hover:bg-grey-200  hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 px-2 md:px-4 py-3 bg-white rounded-lg flex gap-2 justify-center items-center">
              <Icon src="/assets/icons/link-circle-2.png" alt="payment link" />
              <span className="text-base leading-6 font-medium text-[#A146A1]">
                Payment Link
              </span>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="flex flex-col gap-4 mt-2">
          <h4 className="font-bold text-lg text-black-100">
            Transaction History
          </h4>

          <div className="w-full overflow-x-scroll lg:overflow-x-hidden">
            <TableHeader />
            <div>
              {tabelData.map((data, idx) => (
                <TableRow key={idx} rowNum={idx} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
