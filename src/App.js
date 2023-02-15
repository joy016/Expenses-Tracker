import ExpenseItem from "./components/ExpenseItem";
import "./index.css";
import "../src/components/Expenses.css";
import Card from "../src/components/Card.js";
import NewExpense from "./components/newExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter";
import { useEffect, useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpensesChart from "./components/chart/ExpensesChart";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [newExpenses, setNewExpenses] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState("2020");

  const OnPassData = ({ id, title, amount, date }) => {
    const formatDate = new Date(date);
    const convertId = id.toString();
    setNewExpenses((prevState) => [
      { id: convertId, title, amount, date: formatDate },
      ...prevState,
    ]);
  };

  const filteredExpenses = newExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <NewExpense onAddExpense={OnPassData} />

      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expensesChart={filteredExpenses} />
        <ExpenseList filteredResult={filteredExpenses} />
      </Card>
    </div>
  );
}

export default App;
