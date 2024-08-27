import React from "react";

const MoneyTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-center  mt-12 w-full">
      <div
        className={`bg-slate-900 flex-1 p-3 text-center cursor-pointer ${
          activeTab === "data" ? "scale-110 shadow-xl" : "shadow-sm opacity-70"
        }`}
        onClick={() => setActiveTab("data")}
      >
        {" "}
        data{" "}
      </div>
      <div
        className={`bg-slate-900 flex-1 p-3 text-center cursor-pointer ${
          activeTab === "income"
            ? "scale-110 shadow-xl"
            : "shadow-sm opacity-70"
        }`}
        onClick={() => setActiveTab("income")}
      >
        {" "}
        income{" "}
      </div>
      <div
        className={`bg-slate-900 flex-1 p-3 text-center cursor-pointer ${
          activeTab === "expanse"
            ? "scale-110 shadow-xl"
            : "shadow-sm opacity-70"
        }`}
        onClick={() => setActiveTab("expanse")}
      >
        {" "}
        expanses{" "}
      </div>
    </div>
  );
};

export default MoneyTabs;
