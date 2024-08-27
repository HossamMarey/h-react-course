import React from "react";

import { FaCoins } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";

const MoneyCard = ({ type = "total", value = 0 }) => {
  return (
    <div
      className={` 
    ${type === "total" ? "bg-primary" : ""}
    ${type === "income" ? "bg-income" : ""}
    ${type === "expanse" ? "bg-expanse" : ""}
    flex flex-col gap-4 py-6 px-3 items-center justify-center text-center
  `}
    >
      <span className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
        {type === "total" && <FaCoins size={32} />}
        {type === "income" && <CiWallet size={32} />}
        {type === "expanse" && <CiCreditCard1 size={32} />}
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-4xl font-bold">${value}</span>
        <small className="capitalize opacity-70"> total {type} </small>
      </div>
    </div>
  );
};

export default MoneyCard;
