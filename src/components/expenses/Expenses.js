import Card from "../UI/Card";
import "./Expenses.css";
import FilterExpense from "../filter/FilterExpense";
import { useState } from "react";
import { getYear } from "../../util/dateExtractor";
import NoElement from "../UI/NoElement";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [year, setYear] = useState("2020");
  const yearToBeFiltered = (year) => {
    setYear(year);
  };
  const filteredExpense = props.items.filter(
    (expense) => getYear(expense.date).toString() === year
  );
  return (
    <li>
    <Card className="expenses" value="card">
      <FilterExpense filteredYear={yearToBeFiltered} defaultYear={year} />
      <ExpenseChart expenses ={filteredExpense}/>
      {filteredExpense.length > 0 ? (
        <ExpenseList expenses={filteredExpense} />
      ) : (
        <NoElement />
      )}
    </Card>
    </li>
  );
}
export default Expenses;
