import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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
  const [expense, setExpense] = useState(expenses);
  // const [addNewExpenseFormState, setNewExpenseVisibilityState] =
  //   useState(false);
  //Under the hood
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses,{items : expenses})
  // );
  const newExpense = (newExpense) => {
    const expense = { ...newExpense, id: Math.random.toString() };
    setExpense((prevState) => {
      return [expense, ...prevState];
    });
  };
  // const changeNewFormVisibilityState = () => {
  //   setNewExpenseVisibilityState((prevState) => !prevState);
  // };

  return (
    <div>
      <NewExpense newExpenseCallback={newExpense}/>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
