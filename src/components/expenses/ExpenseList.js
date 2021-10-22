import "./ExpenseList.css";
import ExpenseItems from "./ExpenseItem";
const ExpenseList = (props) => {
  return (
    <ul className="expense-list-container">
      {props.expenses.map((item, index) => {
        return <ExpenseItems key={item.id} expense={item} />;
      })}
    </ul>
  );
};
export default ExpenseList;
