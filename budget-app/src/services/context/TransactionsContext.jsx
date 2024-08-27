import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTransactionsFullData } from "../api/transactions/transactions.api";

export const TransactionsContext = createContext({
  transactions: null,
  categories: null,
  loading: false,
  error: null,
  data: null,
  status: {
    income: 0,
    expanse: 0,
    total: 0,
  },
  sortBy: "",
  setSortBy: () => {},
  categFilter: "",
  setCategFilter: () => {},
  typeFilter: "",
  setTypeFilter: () => {},
});

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(null);
  const [categories, setCategories] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // filters state
  const [sortBy, setSortBy] = useState(""); // 'date' , 'amount'
  const [categFilter, setCategFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("all"); // 'income' , 'expanse' , 'all'

  useEffect(() => {
    // api
    setLoading(true);
    getTransactionsFullData()
      .then(({ data, categories }) => {
        setTransactions(data);
        setCategories(categories);
      })
      .catch((err) => {
        setError(err);
        setTransactions(null);
        setCategories(null);
      })
      .finally(() => setLoading(false));
  }, []);

  // computed data
  const data = useMemo(() => {
    if (!transactions) return [];
    if (!categories) return [];

    let allData = transactions.map((t) => {
      return {
        ...t,
        categoryData: categories.find((c) => c.id === t.category) || null,
      };
    });

    if (typeFilter !== "all") {
      allData = allData.filter((item) => item.type === typeFilter);
    }

    if (categFilter) {
      allData = allData.filter((item) => item.category === categFilter);
    }

    if (sortBy) {
      allData.sort((a, b) => {
        if (sortBy === "amount") {
          if (Number(a.amount) > Number(b.amount)) {
            return -1;
          }
        } else if (sortBy === "date") {
          // '"2022-01-22"'
          const aTimestamp = new Date(a.date).getTime();
          const bTimestamp = new Date(b.date).getTime();
          if (aTimestamp > bTimestamp) {
            return -1;
          }
        }

        return 1;
      });
    }

    return allData;
  }, [transactions, categories, typeFilter, categFilter, sortBy]);

  const status = useMemo(() => {
    const s = {
      income: 0,
      expanse: 0,
      total: 0,
    };

    if (data?.length) {
      data.forEach((el) => {
        if (el.type === "income") {
          s.income += Number(el.amount);
        } else {
          s.expanse += Number(el.amount);
        }
      });
      s.total = s.income - s.expanse;
    }

    return s;
  }, [data]);

  console.log(data);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        categories,
        loading,
        error,
        data,
        status,
        sortBy,
        setSortBy,
        categFilter,
        setCategFilter,
        typeFilter,
        setTypeFilter,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionsContext);
