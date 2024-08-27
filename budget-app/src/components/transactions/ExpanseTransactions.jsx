import React from "react";
import { useTransactions } from "../../services/context/TransactionsContext";
import DounutChart from "../shared/ui/DounutChart";

const ExpanseTransactions = () => {
  const { loa } = useTransactions();

  return <DounutChart type="expanse" />;
};

export default ExpanseTransactions;
