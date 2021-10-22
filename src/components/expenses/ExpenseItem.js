import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.expense.date}/>
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItems;
