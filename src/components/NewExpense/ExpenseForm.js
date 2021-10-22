import "./ExpenseForm.css";
import { useState } from "react";
const defaultState = {
  title: "",
  amount: "",
  date: "",
};
const ExpenseForm = (props) => {
  const [inputDetails, setInputDetails] = useState(defaultState);
  const titleChangeHandler = (event) => {
    setInputDetails((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };
  const amountChangeHandler = (event) => {
    setInputDetails((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };
  const dateChangeHandler = (event) => {
    setInputDetails((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };
  const sumbitHandler = (event) => {
    event.preventDefault();
    const { title, amount, date } = inputDetails;
    const expenses = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    setInputDetails(defaultState);
    props.newExpenseCallback(expenses);
  };
  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input
            type="text"
            value={inputDetails.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            max="1000"
            value={inputDetails.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDetails.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="button" onClick={props.changeNewFormVisibilityState}>Cancel Expense</button>
        <button type="submit" className="btn-add-expense">
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
