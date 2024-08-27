import { useNavigate } from "react-router-dom";
import MoneyCard from "../components/monyCards/MoneyCard";
import MoneyTabs from "../components/monyTabs/MoneyTabs";
import { useState } from "react";
import DataTransactions from "../components/transactions/DataTransactions";
import IncomeTransactions from "../components/transactions/IncomeTransactions";
import ExpanseTransactions from "../components/transactions/ExpanseTransactions";
import { useTransactions } from "../services/context/TransactionsContext";

const HomePage = () => {
  const navigate = useNavigate();

  const { loading, error, data, status } = useTransactions();

  const [activeTab, setActiveTab] = useState("data"); // data , income , expanse

  if (loading) return <div> Loading .... </div>;
  if (error)
    return <div className="text-red-500"> error in fetching data </div>;

  if (!data || !data?.length)
    return <div className="text-center p-12">No Data</div>;

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          <MoneyCard type="total" value={status.total} />
          <MoneyCard type="income" value={status.income} />
          <MoneyCard type="expanse" value={status.expanse} />
        </div>

        <MoneyTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-8">
          {activeTab === "data" && <DataTransactions />}
          {activeTab === "income" && <IncomeTransactions />}
          {activeTab === "expanse" && <ExpanseTransactions />}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
