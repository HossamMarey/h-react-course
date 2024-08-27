import React from "react";
import { useTransactions } from "../../services/context/TransactionsContext";
import SingleTransaction from "./SingleTransaction";

const sortData = [
  {
    key: "date",
    label: "Date",
  },
  {
    key: "amount",
    label: "Amount",
  },
];

const typeData = [
  {
    key: "all",
    label: "All",
  },
  {
    key: "income",
    label: "Income",
  },

  {
    key: "expanse",
    label: "Expanse",
  },
];

const DataTransactions = () => {
  const {
    data,
    sortBy,
    setSortBy,
    categories,
    categFilter,
    setCategFilter,
    typeFilter,
    setTypeFilter,
  } = useTransactions();
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2>Recent Transactions </h2>

        <div className="flex items-center gap-2">
          <select
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
            className="p-2 rounded-lg"
          >
            <option value=""> Sort By</option>
            {sortData.map((s) => (
              <option key={s.key} value={s.key}>
                {" "}
                {s.label}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setCategFilter(e.target.value)}
            value={categFilter}
            className="p-2 rounded-lg"
          >
            <option value=""> Categories </option>
            {categories?.map((s) => (
              <option key={s.id} value={s.id}>
                {" "}
                {s.name}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setTypeFilter(e.target.value)}
            value={typeFilter}
            className="p-2 rounded-lg"
          >
            {typeData.map((s) => (
              <option key={s.key} value={s.key}>
                {" "}
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {data.map((d) => (
        <SingleTransaction key={d.id} transaction={d} />
      ))}
    </div>
  );
};

export default DataTransactions;
