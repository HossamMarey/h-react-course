import React from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import Button from "../shared/ui/Button";
const SingleTransaction = ({ transaction }) => {
  return (
    <div className="bg-slate-700 flex items-center gap-2 py-2 px-3 rounded-lg">
      <span
        className={`text-xl   w-14 h-14 rounded-full items-center justify-center flex  
      ${transaction?.type === "income" ? "bg-income" : "bg-expanse"}
         `}
      >
        $
      </span>

      <div className="flex-1">
        {transaction?.title}
        <div className="flex items-center gap-2 text-sm opacity-65">
          <span>$ {transaction?.amount}</span>
          <span> {transaction?.date}</span>
          {!!transaction?.categoryData?.name && (
            <span> {transaction?.categoryData?.name}</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button className="rounded-full">
          <FiEdit3 />
        </Button>

        <Button type="income" className="rounded-full">
          <FiTrash2 />
        </Button>
      </div>
    </div>
  );
};

export default SingleTransaction;
