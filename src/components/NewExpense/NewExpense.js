import "./NewExpense.css";
import "./ExpenseForm";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const isEditingStateController = () => {
    setIsEditing((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={isEditingStateController}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          newExpenseCallback={props.newExpenseCallback}
          changeNewFormVisibilityState={isEditingStateController}
        />
      )}
    </div>
  );
};

export default NewExpense;
