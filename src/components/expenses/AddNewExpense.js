import "./AddNewExpense.css";
const AddNewExpense = (props) => {
  const onClickHandler = (event) => {
    props.changeNewFormVisibilityState();
  };
  return (
    <div className="add-new-expense">
      <button onClick={onClickHandler}>Add New Expense</button>
    </div>
  );
};

export default AddNewExpense;
